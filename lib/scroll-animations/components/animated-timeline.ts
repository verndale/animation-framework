import { LitElement, PropertyValueMap, css } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { customElement, property } from 'lit/decorators.js';
import {
  AnimationListOptions,
  inView,
  StyleKeyframesDefinition,
  timeline,
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
    super.updated(changedProperties);
    this.setupInViewAnimation();
  }

  private getAnimation(el: HTMLElement, attibutes: string[]) {
    const animObject: StyleKeyframesDefinition = {};

    if (attibutes.includes('opacity')) {
      const attr = el.getAttribute('opacity');
      if (attr?.includes(',')) animObject.opacity = attr.split(',');
      else animObject.opacity = attr ?? 1;
    }
    if (attibutes.includes('translate-x')) {
      const attr = el.getAttribute('translate-x');
      if (attr?.includes(',')) animObject.x = attr.split(',');
      else animObject.x = attr ?? 0;
    }
    if (attibutes.includes('translate-y')) {
      const attr = el.getAttribute('translate-y');
      if (attr?.includes(',')) animObject.y = attr.split(',');
      else animObject.y = attr ?? 0;
    }
    if (attibutes.includes('scale')) {
      const attr = el.getAttribute('scale');
      if (attr?.includes(',')) animObject.scale = attr.split(',');
      else animObject.scale = attr ?? 1;
    }

    return animObject;
  }

  private setupInViewAnimation() {
    const sequence = [] as TimelineDefinition;
    this.querySelectorAll('animated-element').forEach((el: HTMLElement) => {
      const attributes = el.getAttributeNames();
      const animObject = this.getAnimation(el, attributes);
      const configObject = {
        duration: el.getAttribute('duration') ?? 1,
        delay: el.getAttribute('delay') ?? 0
      } as AnimationListOptions;
      sequence.push([el, animObject, configObject]);
    });
    inView(this, () => {
      timeline(sequence);
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'animated-timeline': AnimatedTimeline;
  }
}
