import { LitElement, PropertyValueMap, css } from 'lit';
import { html } from 'lit/static-html.js';
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
    }
  `;

  @property({ type: Number, attribute: 'amount-visible' })
  amountVisible = 0;

  @property({ type: Number, attribute: 'delay' })
  delay = 0;

  @property({ type: Number, attribute: 'duration' })
  duration?: number;

  render() {
    return html`<slot></slot>`;
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
      if (attributes.includes('scrub')) return;
      const animObject = this.getAnimation(el, attributes);
      const configObject = {
        duration: el.getAttribute('duration')
          ? parseFloat(el.getAttribute('duration') as string)
          : 1,
        delay: el.getAttribute('delay') ? parseFloat(el.getAttribute('delay') as string) : 0,
        at: el.getAttribute('at') ? parseFloat(el.getAttribute('at') as string) : 0
      } as AnimationListOptions;
      sequence.push([el, animObject, configObject]);
    });
    inView(
      this,
      () => {
        const configObject = {} as AnimationListOptions;
        if (this.duration) configObject.duration = this.duration;
        if (this.delay) configObject.delay = this.delay;
        timeline(sequence, configObject);
      },
      {
        amount: this.amountVisible
      }
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'animated-timeline': AnimatedTimeline;
  }
}
