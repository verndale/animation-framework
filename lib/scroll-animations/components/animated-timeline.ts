import { LitElement, PropertyValueMap, css } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { customElement, property } from 'lit/decorators.js';
import {
  animate,
  MotionKeyframesDefinition,
  inView,
  timeline,
  ElementSequence,
  TimelineDefinition
} from 'motion';

@customElement('animated-timeline')
export class AnimatedTimeline extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: String })
  as = 'div';

  render() {
    return html`<${unsafeStatic(this.as)}><slot></slot></${unsafeStatic(this.as)}>`;
  }

  async updated(changedProperties: PropertyValueMap<unknown> | Map<PropertyKey, unknown>) {
    console.log('animated-timeline updated');
    super.updated(changedProperties);
    console.log(this.querySelectorAll('animated-element'));
    const sequence = [] as TimelineDefinition;
    this.querySelectorAll('animated-element').forEach((el: Element, i) => {
      sequence.push([el, { opacity: [0, 1] }]);
    });
    timeline(sequence);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'animated-timeline': AnimatedTimeline;
  }
}
