import { LitElement, PropertyValueMap, css } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { customElement, property } from 'lit/decorators.js';
import { scroll, animate, MotionKeyframesDefinition, inView } from 'motion';

@customElement('animated-element')
export class AnimatedElement extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: String })
  as = 'div';

  @property({ type: Boolean, attribute: 'scrolling' })
  scrolling?: boolean;

  @property({ type: Boolean, attribute: 'wrapper' })
  wrapper?: boolean;

  @property({ type: Object })
  anim?: MotionKeyframesDefinition;

  @property({ type: Number })
  duration?: number;

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
        { target: this.wrapper ? (this.firstElementChild as Element) : (this as Element) }
      );
    } else {
      inView(this.wrapper ? (this.firstElementChild as Element) : (this as Element), info => {
        animate(info.target, this.anim as MotionKeyframesDefinition, {
          duration: 2,
          delay: this.delay
        });
      });
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'animated-element': AnimatedElement;
  }
}
