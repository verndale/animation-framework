import { LitElement, PropertyValueMap, css } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { customElement, property, state } from 'lit/decorators.js';
import { animate, MotionKeyframesDefinition, inView } from 'motion';
import { animProps, animatableProperties } from '../../../src/scripts/helpers/constants';

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
  @property({ type: Boolean, attribute: 'show' })
  show?: boolean;
  @property({ type: Boolean, attribute: 'hide', reflect: true })
  hide?: boolean;
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

    return html`<slot></slot>`;
  }

  async updated(changedProperties: PropertyValueMap<unknown> | Map<PropertyKey, unknown>) {
    super.updated(changedProperties);
    if (this.parentElement?.tagName === 'ANIMATED-TIMELINE') return;
    if (changedProperties.has('show' as never)) this.setupToggleAnimation();
    else this.setupInViewAnimation();
  }

  private getAnimation(prefix?: 'in' | 'out') {
    const animObject: MotionKeyframesDefinition = {};
    const hasMultipleKeyframes = (value: string) => value?.includes(',');

    animatableProperties.forEach(property => {
      const propertyWithPrefix = `${prefix}${property.charAt(0).toUpperCase()}${property.slice(1)}`;
      const propertyKey = (prefix ? propertyWithPrefix : property) as keyof ToggleElement;
      if (!this[propertyKey]) return;
      const propertyValue = this[propertyKey] as string;

      if (property === 'translateY' || property === 'translateX') {
        animObject.transform = hasMultipleKeyframes(propertyValue)
          ? propertyValue.split(',').map(value => `${property}(${value}px)`)
          : (animObject.transform = `${property}(${propertyValue}px)`);
      } else {
        animObject[property] = hasMultipleKeyframes(propertyValue)
          ? propertyValue.split(',')
          : propertyValue;
      }
    });

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
    if (this.show && (this._state === 'hide-anim' || this._state === 'hidden')) {
      const inAnimObject = this.getAnimation('in');
      this._state = 'shown';
      this.hide = false;

      animate(this, inAnimObject, {
        duration: this.duration,
        delay: this.delay && this.delay
      });
    } else if (!this.show && this._state === 'shown') {
      const outAnimObject = this.getAnimation('out');
      this._state = 'hide-anim';
      animate(this, outAnimObject, { duration: this.duration, delay: this.delay }).finished.then(
        () => {
          this._state = 'hidden';
          this.hide = true;
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
