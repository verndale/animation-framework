import { css } from 'lit';
import BaseElement from '../core/base-element';
import { customElement } from 'lit/decorators.js';

@customElement('zoom-out-up')
export class ZoomOutUp extends BaseElement {
  static styles = [
    css`
      :host {
        display: inline-block;
      }
    `
  ];

  protected getAnimation() {
    return {
      transform: [
        'scale3d(1, 1, 1) translate3d(0,0,0)',
        'scale3d(0.3, 0.3, 0.3) translate3d(0,-500px,0)'
      ],
      opacity: [1, 0]
    };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'zoom-out-up': ZoomOutUp;
  }
}
