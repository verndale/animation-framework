import { LitElement, PropertyValueMap, css } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { customElement, property, state } from 'lit/decorators.js';
import { animate, MotionKeyframesDefinition, inView, AnimationControls } from 'motion';

type rawAnimProps = 'opacity' | 'translateX' | 'translateY' | 'scale';
type animatableProps = Exclude<rawAnimProps, 'translateY' | 'translateX'> | 'x' | 'y';

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
  @property()
  protected anim?: AnimationControls;
  @property({ type: Number })
  protected _currentTime?: number;

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
    if (changedProperties.has('show' as never)) this.setupToggleAnimation();
    else this.setupInViewAnimation();
  }

  private getAnimation(prefix?: 'in' | 'out') {
    const animationProperties: rawAnimProps[] = ['opacity', 'scale', 'translateY', 'translateX'];
    const animObject: MotionKeyframesDefinition = {};

    animationProperties.forEach(property => {
      const inOutProperty = `${prefix}${this.capitalizeFirstLetter(property)}`;
      const propertyKey = (prefix ? inOutProperty : property) as keyof ToggleElement;
      if (!this[propertyKey]) return;

      const propertyValue = this[propertyKey] as string;

      const animatablePropName = this.getAnimatableProp(property);
      animObject[animatablePropName] = this.hasMultipleKeyframes(propertyValue)
        ? propertyValue.split(',').map(this.parseUnitValue)
        : (animObject[animatablePropName] = this.parseUnitValue(propertyValue));
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
    if (this.show) {
      this.showAnimation();
    } else if (!this.show) {
      this.hideAnimation();
    }
  }

  private showAnimation() {
    if (this._state === 'hide-anim') {
      this._currentTime = this.anim?.currentTime || 0;
      this.anim?.cancel();
    }

    const inAnimObject = this.getAnimation('in');
    this.anim = animate(this, inAnimObject, {
      duration: this.duration,
      delay: this.delay
    });

    if (this._state === 'hide-anim')
      this.anim.currentTime = (this.duration || 0) - (this._currentTime || 0);

    this.hide = false;
    this._state = 'show-anim';
    this.anim.finished.then(animInfo => {
      if (animInfo) this._state = 'shown';
    });
  }

  private hideAnimation() {
    if (this._state === 'show-anim') {
      this._currentTime = this.anim?.currentTime || 0;
      this.anim?.cancel();
    }

    const outAnimObject = this.getAnimation('out');
    this.anim = animate(this, outAnimObject, {
      duration: this.duration,
      delay: this.delay
    });

    if (this._state === 'show-anim')
      this.anim.currentTime = (this.duration || 0) - (this._currentTime || 0);

    this._state = 'hide-anim';
    this.anim.finished.then(animInfo => {
      if (animInfo) {
        this._state = 'hidden';
        this.hide = true;
      }
    });
  }

  private parseUnitValue = (value: string) => {
    const isNumberWithoutUnit = /^-?\d+(\.\d+)?$/;
    if (isNumberWithoutUnit.test(value)) return Number(value);
    else return value;
  };

  private hasMultipleKeyframes = (value: string) => value?.includes(',');

  private capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  private getAnimatableProp = (property: rawAnimProps): animatableProps => {
    if (property === 'translateX') return 'x';
    if (property === 'translateY') return 'y';
    return property;
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'toggle-element': ToggleElement;
  }
}
