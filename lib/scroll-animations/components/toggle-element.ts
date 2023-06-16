import { LitElement, PropertyValueMap, css } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { customElement, property, state } from 'lit/decorators.js';
import { animate, MotionKeyframesDefinition, inView } from 'motion';

@customElement('toggle-element')
export class ToggleElement extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    :host([hide]) {
      display: none;
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

  //toggle
  @property({ type: String, attribute: 'show', reflect: true })
  show?: string;
  @property({ type: String, attribute: 'hide', reflect: true })
  hide?: string;
  @state()
  protected _state = 'hidden';

  @property({ type: String, attribute: 'in-opacity' })
  inOpacity?: string;
  @property({ type: String, attribute: 'out-opacity' })
  outOpacity?: string;
  @property({ type: String, attribute: 'in-translate-y' })
  inTranslateY?: string;
  @property({ type: String, attribute: 'out-translate-y' })
  outTranslateY?: string;
  @property({ type: String, attribute: 'in-translate-x' })
  inTranslateX?: string;
  @property({ type: String, attribute: 'out-translate-x' })
  outTranslateX?: string;
  @property({ type: String, attribute: 'in-scale' })
  inScale?: string;
  @property({ type: String, attribute: 'out-scale' })
  outScale?: string;
  @property({ type: String, attribute: 'class' })
  class?: string;

  render() {
    const componentClass = this._state === 'hidden' ? 'hidden' : '';

    return html`<${unsafeStatic(this.as)} class=${componentClass}><slot></slot></${unsafeStatic(
      this.as
    )}>`;
  }

  async updated(changedProperties: PropertyValueMap<unknown> | Map<PropertyKey, unknown>) {
    super.updated(changedProperties);
    if (this.parentElement?.tagName === 'ANIMATED-TIMELINE') return;
    if (changedProperties.has('show' as never) || changedProperties.has('hide' as never))
      this.setupToggleAnimation();
    else this.setupInViewAnimation();
  }

  private getAnimation(prefix?: 'in' | 'out') {
    const opacityKey: keyof ToggleElement = prefix ? `${prefix}Opacity` : 'opacity';
    const opacityProp = this[opacityKey];

    const transitionYKey: keyof ToggleElement = prefix ? `${prefix}TranslateY` : 'translateY';
    const transitionYProp = this[transitionYKey];

    const animObject: MotionKeyframesDefinition = {};
    if (typeof opacityProp === 'string') {
      if (opacityProp.includes(',')) animObject.opacity = opacityProp.split(',');
      else animObject.opacity = opacityProp;
    }

    if (typeof transitionYProp === 'string') {
      if (transitionYProp.includes(','))
        animObject.transform = transitionYProp.split(',').map(value => `translateY(${value}px)`);
      else animObject.y = transitionYProp;
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

  private setupToggleAnimation() {
    if (this.show === 'true' && (this._state === 'hide-anim' || this._state === 'hidden')) {
      const inAnimObject = this.getAnimation('in');
      this._state = 'shown';
      animate(this, inAnimObject, {
        duration: this.duration,
        delay: this.delay && this.delay
      });
    } else if (this.hide === 'true' && this._state === 'shown') {
      const outAnimObject = this.getAnimation('out');
      this._state = 'hide-anim';
      animate(this, outAnimObject, { duration: this.duration, delay: this.delay }).finished.then(
        () => {
          this._state = 'hidden';
        }
      );
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'toggle-element': ToggleElement;
  }
}
