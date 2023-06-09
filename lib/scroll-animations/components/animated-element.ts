import { LitElement, PropertyValueMap, css } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { customElement, property } from 'lit/decorators.js';
import { animate, MotionKeyframesDefinition, inView } from 'motion';

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

  @property({ type: String, attribute: 'opacity' })
  opacity?: string;
  @property({ type: String, attribute: 'translate-x' })
  translateX?: string;
  @property({ type: String, attribute: 'translate-y' })
  translateY?: string;
  @property({ type: String, attribute: 'scale' })
  scale?: string;

  @property({ type: Number, attribute: 'amount-visible' })
  amountVisible?: number;

  @property({ type: Boolean, attribute: 'scrub' })
  scrub?: boolean;

  @property({ type: String, attribute: 'start-offset' })
  startOffset?: string = 'start end';

  @property({ type: String, attribute: 'end-offset' })
  endOffset?: string = 'end start';

  @property({ type: Number, attribute: 'duration' })
  duration?: number = 1;

  @property({ type: Number, attribute: 'delay' })
  delay?: number = 0;

  render() {
    return html`<${unsafeStatic(this.as)}><slot></slot></${unsafeStatic(this.as)}>`;
  }

  async updated(changedProperties: PropertyValueMap<unknown> | Map<PropertyKey, unknown>) {
    console.log('animated-element updated');
    super.updated(changedProperties);
    if (this.parentElement?.tagName === 'ANIMATED-TIMELINE') return;
    this.setupInViewAnimation();
  }

  private getAnimation() {
    const animObject: MotionKeyframesDefinition = {};
    if (this.opacity) {
      if (this.opacity.includes(',')) animObject.opacity = this.opacity.split(',');
      else animObject.opacity = this.opacity;
    }
    if (this.translateX) {
      if (this.translateX.includes(',')) animObject.x = this.translateX.split(',');
      else animObject.x = this.translateX;
    }
    if (this.translateY) {
      if (this.translateY.includes(',')) animObject.x = this.translateY.split(',');
      else animObject.y = this.translateY;
    }
    if (this.scale) {
      if (this.scale.includes(',')) animObject.scale = this.scale.split(',');
      else animObject.scale = this.scale;
    }

    return animObject;
  }

  private setupInViewAnimation() {
    inView(this, info => {
      animate(info.target, this.getAnimation(), {
        duration: this.duration,
        delay: this.delay
      });
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'animated-element': AnimatedElement;
  }
}
