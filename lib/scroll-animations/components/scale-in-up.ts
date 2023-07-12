import { css } from 'lit';
import BaseElement from '../core/base-element';
import { customElement } from 'lit/decorators.js';

@customElement('scale-in-up')
export class ScaleInUp extends BaseElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        transform: scale(0) translateY(100%);
      }
    `
  ];

  protected getAnimation() {
    return { scale: [0, 1], translateY: ['100%', '0%'] };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'scale-in-up': ScaleInUp;
  }
}
