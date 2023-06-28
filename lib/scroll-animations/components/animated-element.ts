import { LitElement, PropertyValueMap, css } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { customElement, property } from 'lit/decorators.js';
import {
  animate,
  AnimationListOptions,
  inView,
  scroll,
  timeline,
  TimelineDefinition
} from 'motion';
import { camelize } from '../../../src/scripts/helpers/utils';
import { animProps, animatableProperties } from '../../../src/scripts/helpers/constants';

@customElement('animated-element')
export class AnimatedElement extends LitElement {
  static styles = css`
    :host {
      inline-size: fit-content;
    }
  `;

  @property({ type: String, attribute: 'root-margin' })
  rootMargin?: string;

  @property({ type: Number, attribute: 'amount-visible' })
  amountVisible = 0;

  @property({ type: Boolean, attribute: 'scrub' })
  scrub?: boolean;

  @property({ type: String, attribute: 'start-offset' })
  startOffset = 'start end';

  @property({ type: String, attribute: 'end-offset' })
  endOffset = 'end start';

  @property({ type: Number, attribute: 'duration' })
  duration = 1.5;

  @property({ type: Number, attribute: 'delay' })
  delay = 0;

  @property({ type: String, attribute: 'times' })
  times?: string;

  render() {
    return html`<slot></slot>`;
  }

  async updated(changedProperties: PropertyValueMap<unknown> | Map<PropertyKey, unknown>) {
    super.updated(changedProperties);
    if (this.parentElement?.tagName === 'ANIMATED-TIMELINE') return;
    if (this.scrub) this.setupScrollAnimation();
    else this.setupInViewAnimation();
  }

  private getAnimation() {
    const animObject: any = {};
    Array(...this.attributes).forEach(element => {
      if (animatableProperties.includes(camelize(element.name) as animProps))
        animObject[camelize(element.name)] = element.value.includes(',')
          ? element.value.split(',')
          : element.value;
    });

    return animObject;
  }

  private getTimeline() {
    const sequence = [] as TimelineDefinition;
    const delays = this.times?.split(',').map(time => parseFloat(time));
    Array(...this.attributes).forEach(element => {
      if (animatableProperties.includes(camelize(element.name) as animProps))
        sequence.push([
          this,
          {
            [camelize(element.name)]: element.value.includes(',')
              ? element.value.split(',')
              : element.value
          },
          { at: delays?.shift() }
        ]);
    });

    return sequence;
  }

  private setupInViewAnimation() {
    if (this.times === undefined) {
      inView(
        this,
        info => {
          animate(info.target, this.getAnimation(), {
            duration: this.duration,
            delay: this.delay
          });
        },
        { amount: this.amountVisible }
      );
    } else {
      inView(this, info => {
        const target = info.target as AnimatedElement;
        const configObject: AnimationListOptions = {};
        if (this.duration) configObject.duration = this.duration;
        if (this.delay) configObject.delay = this.delay;

        timeline(this.getTimeline(), configObject);
      });
    }
  }

  private setupScrollAnimation() {
    scroll(animate(this, this.getAnimation()), {
      target: this,
      offset: [this.startOffset, this.endOffset]
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'animated-element': AnimatedElement;
  }
}
