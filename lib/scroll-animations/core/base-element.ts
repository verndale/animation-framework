import { LitElement, PropertyValueMap, css, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { MotionKeyframesDefinition, animate, inView, scroll } from 'motion';

export declare class BaseElementInterface {
  rootMargin?: string;
  amountVisible?: number;
  scrub?: boolean;
  startOffset?: string;
  endOffset?: string;
  duration?: number;
  delay?: number;
  at?: number;
}
abstract class BaseElement extends LitElement {
  static styles = [
    LitElement.styles ?? [],
    css`
      :host {
      }
    `
  ];

  @property({ type: String, attribute: 'root-margin' })
  rootMargin?: string;

  @property({ type: Number, attribute: 'amount-visible' })
  amountVisible = 1;

  @property({ type: Boolean, attribute: 'scrub' })
  scrub?: boolean;

  @property({ type: String, attribute: 'start-offset' })
  startOffset = 'start end';

  @property({ type: String, attribute: 'end-offset' })
  endOffset = 'start 25%';

  @property({ type: Number, attribute: 'duration' })
  duration = 1;

  @property({ type: Number, attribute: 'delay' })
  delay = 0;

  @property({ type: String, attribute: 'times' })
  times?: string;

  @property({ type: Number, attribute: 'at' })
  at?: number;

  constructor() {
    super();
    //in case you need to setup a default value that is different from the ones used in the base-element (.i.e. duration=1, delay=0)
    this.duration = this.getAttribute('duration')
      ? parseFloat(this.getAttribute('duration') as string)
      : 2;
    this.delay = this.getAttribute('delay') ? parseFloat(this.getAttribute('delay') as string) : 0;
  }

  protected abstract getAnimation(): MotionKeyframesDefinition;

  protected setupInViewAnimation() {
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
  }

  async updated(changedProperties: PropertyValueMap<unknown> | Map<PropertyKey, unknown>) {
    super.updated(changedProperties);
    if (this.parentElement?.tagName === 'ANIMATED-TIMELINE') return;
    if (this.scrub) this.setupScrollAnimation();
    else this.setupInViewAnimation();
  }

  private setupScrollAnimation() {
    scroll(animate(this, this.getAnimation()), {
      target: this,
      offset: [this.startOffset, this.endOffset]
    });
  }

  render() {
    return html`<slot></slot>`;
  }
}

export default BaseElement;
