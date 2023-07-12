import { css } from 'lit';
import BaseElement from '../core/base-element';
import { customElement } from 'lit/decorators.js';

@customElement('blur-out')
export class BlurOut extends BaseElement {
  protected getAnimation() {
    return { filter: ['blur(0px)', 'blur(50px)'], opacity: 0 };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'blur-out': BlurOut;
  }
}
