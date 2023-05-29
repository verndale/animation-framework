import { LitElement, PropertyValueMap, css } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { customElement, property } from 'lit/decorators.js';
import { scroll, animate, MotionKeyframesDefinition } from 'motion';

@customElement('verndale-anim-element')
export class VerndaleAnimElement extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ type: String })
  as = 'div';

  @property({ type: Boolean, attribute: 'animscroll' })
  animScroll?: boolean;

  @property({ type: Object })
  animated?: MotionKeyframesDefinition;

  @property({ type: Number })
  duration = 2;

  @property({ type: Number })
  delay = 0;

  render() {
    return html`<${unsafeStatic(this.as)}><slot></slot></${unsafeStatic(this.as)}>`;
  }

  async updated(changedProperties: PropertyValueMap<unknown> | Map<PropertyKey, unknown>) {
    super.updated(changedProperties);

    if (!this.animated) return;
    if (this.animScroll)
      scroll(
        animate(this.firstElementChild as Element, this.animated, {
          duration: this.duration,
          delay: this.delay
        })
      );
    else animate(this as Element, this.animated, { duration: this.duration, delay: this.delay });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'verndale-anim-element': VerndaleAnimElement;
  }
}
