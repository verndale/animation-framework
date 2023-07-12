import { css } from 'lit';
import BaseElement from '../core/base-element';
import { customElement } from 'lit/decorators.js';

@customElement('blur-in')
export class BlurIn extends BaseElement {
  static styles = [
    css`
      :host {
        opacity: 0;
        filter: blur(50px);
      }
    `
  ];

  protected getAnimation() {
    return { filter: ['blur(50px)', 'blur(0px)'], opacity: [0, 1] };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'blur-in': BlurIn;
  }
}
