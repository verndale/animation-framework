import { LitElement, PropertyValueMap, css } from 'lit';
import { BaseElement } from './base-element';
import { customElement } from 'lit/decorators.js';
import { animate, inView, scroll } from 'motion';

@customElement('fade-in')
export class FadeIn extends BaseElement(LitElement) {
  static styles = [
    css`
      :host {
        opacity: 0;
      }
    `
  ];

  constructor() {
    super();
    //in case you need to setup a default value that is different from the ones used in the base-element (.i.e. duration=1, delay=0)
    this.duration = this.getAttribute('duration')
      ? parseFloat(this.getAttribute('duration') as string)
      : 2;
    this.delay = this.getAttribute('delay') ? parseFloat(this.getAttribute('delay') as string) : 0;
  }

  async updated(changedProperties: PropertyValueMap<unknown> | Map<PropertyKey, unknown>) {
    super.updated(changedProperties);
    if (this.parentElement?.tagName === 'ANIMATED-TIMELINE') return;
    if (this.scrub) this.setupScrollAnimation();
    else this.setupInViewAnimation();
  }

  private getAnimation() {
    return { opacity: [0, 1] };
  }

  private setupInViewAnimation() {
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

  private setupScrollAnimation() {
    scroll(animate(this, this.getAnimation()), {
      target: this,
      offset: [this.startOffset, this.endOffset]
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fade-in': FadeIn;
  }
}
