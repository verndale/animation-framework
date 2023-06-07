import { LitElement, PropertyValueMap, css } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { customElement, property } from 'lit/decorators.js';
import {
  scroll,
  animate,
  MotionKeyframesDefinition,
  inView,
  stagger,
  ElementOrSelector
} from 'motion';

@customElement('animated-element')
export class AnimatedElement extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: String })
  as = 'div';

  @property({ type: String, attribute: 'root-margin' })
  rootMargin?: string;

  @property({ type: Number, attribute: 'amount-visible' })
  amountVisible?: number;

  @property({ type: String, attribute: 'scroll-offset' })
  offset?: string;

  @property({ type: Boolean, attribute: 'scrolling' })
  scrolling?: boolean;

  @property({ type: Number, attribute: 'stagger' })
  stagger?: number;

  @property({ type: Boolean, attribute: 'wrapper' })
  wrapper?: boolean;

  @property({ type: Object })
  anim?: MotionKeyframesDefinition;

  @property({ type: Number })
  duration?: number = 1;

  @property({ type: Number })
  delay = 0;

  render() {
    return html`<${unsafeStatic(this.as)}><slot></slot></${unsafeStatic(this.as)}>`;
  }

  async updated(changedProperties: PropertyValueMap<unknown> | Map<PropertyKey, unknown>) {
    super.updated(changedProperties);
    if (!this.anim) return;
    if (this.scrolling) {
      scroll(
        animate(this.wrapper ? (this.firstElementChild as Element) : (this as Element), this.anim, {
          duration: this.duration,
          delay: this.delay
        }),
        {
          target: this.wrapper ? (this.firstElementChild as Element) : (this as Element),
          offset: this.offset ? JSON.parse(this.offset) : ['start end', 'end start']
        }
      );
    } else {
      inView(
        this.wrapper ? (this.firstElementChild as ElementOrSelector) : this,
        info => {
          let target;
          if (this.stagger) {
            target = info.target.querySelectorAll(':scope > *');
          } else {
            target = info.target;
          }

          animate(target, this.anim as MotionKeyframesDefinition, {
            duration: this.duration,
            delay: this.stagger ? stagger(this.stagger) : this.delay
          });
        },
        {
          amount: this.amountVisible ? this.amountVisible : 1,
          margin: this.rootMargin ? this.rootMargin : '0px 0px -10% 0px'
        }
      );
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'animated-element': AnimatedElement;
  }
}
