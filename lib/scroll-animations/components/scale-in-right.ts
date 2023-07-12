import { css } from 'lit';
import BaseElement from '../core/base-element';
import { customElement } from 'lit/decorators.js';

@customElement('scale-in-right')
export class ScaleInRight extends BaseElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        transform: scale(0) translateX(100%);
      }
    `
  ];

  protected getAnimation() {
    return { scale: [0, 1], translateX: ['-100%', '0%'] };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'scale-in-right': ScaleInRight;
  }
}
