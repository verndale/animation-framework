import { LitElement, PropertyValueMap, css } from 'lit';
import { html } from 'lit/static-html.js';
import { customElement, property } from 'lit/decorators.js';
import { animate, inView, AnimationControls, Easing } from 'motion';
import { animatableProperties, animProps } from '../../../src/scripts/helpers/constants';
import { camelize } from '../../../src/scripts/helpers/utils';

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

  @property({ type: String, attribute: 'root-margin' })
  rootMargin?: string;

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

  @property({ type: String, attribute: 'easing' })
  easing?: string = 'ease-in-out';

  //toggle
  @property({ type: Boolean, attribute: 'show', reflect: true })
  show?: boolean;
  @property({ type: Boolean, attribute: 'hide', reflect: true })
  hide?: boolean;
  @property({ type: Boolean })
  protected _state = 'hidden';
  @property()
  protected anim?: AnimationControls;
  @property({ type: Number })
  protected _currentTime?: number;

  @property({ type: String, attribute: 'class' })
  class?: string;
  @property({ type: String, attribute: 'trigger-type' })
  triggerType?: string;
  @property({ type: String, attribute: 'trigger-controls' })
  triggerControls?: string;
  @property({ type: String, attribute: 'triggered-by' })
  triggeredBy?: string;
  @property({ type: Boolean, attribute: 'trigger-group' })
  triggerGroup?: boolean;

  handleTrigger() {
    const triggeredElement = document.querySelector(`#${this.triggerControls}`);
    const hasShow = triggeredElement?.hasAttribute('show');
    if (hasShow) {
      triggeredElement?.removeAttribute('show');
    } else {
      triggeredElement?.setAttribute('show', '');
    }
    const triggerControls = this.triggerControls?.split('-');
    triggerControls?.pop();
    const triggerControlsWithoutPrefix = triggerControls?.join('-');
    const triggerGroup = document.querySelectorAll(`[id^="${triggerControlsWithoutPrefix}"]`);
    triggerGroup.forEach(element => {
      if (triggeredElement !== element) {
        element.removeAttribute('show');
      }
    });
  }

  handleShow = () => (this.show = !this.show);

  connectedCallback() {
    super.connectedCallback();
    const closeBtn = this.querySelector(`#${this.triggeredBy}`);
    if (!closeBtn) return;
    this.addEventListener('click', this.handleShow);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleShow);
  }

  render() {
    return html`<slot
      @click=${this.triggerType === 'click' ? this.handleTrigger : undefined}
      @mouseover=${this.triggerType === 'hover' ? this.handleTrigger : undefined}
      @mouseleave=${this.triggerType === 'hover' ? this.handleTrigger : undefined}
    ></slot>`;
  }

  async updated(changedProperties: PropertyValueMap<unknown> | Map<PropertyKey, unknown>) {
    super.updated(changedProperties);
    if (this.parentElement?.tagName === 'ANIMATED-TIMELINE') return;
    if (changedProperties.has('show' as never)) this.setupToggleAnimation();
    else if (!changedProperties.has('_state' as never)) this.setupInViewAnimation();
  }

  reverseIfOut = (value: string[], prefix?: 'in' | 'out') => {
    if (prefix === 'out') return value.reverse();
    return value;
  };

  private getAnimation(prefix?: 'in' | 'out') {
    const animObject: any = {};

    Array(...this.attributes).forEach(element => {
      if (element.name.includes(`${prefix}-`)) {
        const [, property] = element.name.split(`${prefix}-`);
        if (animatableProperties.includes(camelize(property) as animProps)) {
          animObject[camelize(property)] = element.value.includes(',')
            ? element.value.split(',')
            : element.value;
        }
      } else {
        if (animatableProperties.includes(camelize(element.name) as animProps)) {
          animObject[camelize(element.name)] = element.value.includes(',')
            ? this.reverseIfOut(element.value.split(','), prefix)
            : element.value;
        }
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
      delay: this.delay,
      easing: this.easing?.split(',').map(this.getNumberOrDimensionalValue) as Easing | Easing[]
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
      delay: this.delay,
      easing: this.easing?.split(',').map(this.getNumberOrDimensionalValue) as Easing | Easing[]
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

  getTransformedValue = (propertyValue: string) => {
    return propertyValue.split(',').map(this.getNumberOrDimensionalValue);
  };

  private getNumberOrDimensionalValue = (value: string) => {
    const isNumberWithoutUnit = /^-?\d+(\.\d+)?$/;
    if (isNumberWithoutUnit.test(value)) return Number(value);
    else return value;
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'toggle-element': ToggleElement;
  }
}
