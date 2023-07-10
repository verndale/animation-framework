import { LitElement, PropertyValueMap } from 'lit';
import { BaseElement } from './base-element';
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
export class AnimatedElement extends BaseElement(LitElement) {
  @property({ type: String, attribute: 'times' })
  times?: string;

  async updated(changedProperties: PropertyValueMap<unknown> | Map<PropertyKey, unknown>) {
    super.updated(changedProperties);
    if (this.parentElement?.tagName === 'ANIMATED-TIMELINE') return;
    if (this.scrub) this.setupScrollAnimation();
    else this.setupInViewAnimation();
  }

  private getAnimation() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      inView(this, () => {
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
