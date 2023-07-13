import { css } from 'lit';
import BaseElement from '../core/base-element';
import { customElement } from 'lit/decorators.js';

@customElement('zoom-in-top-right')
export class ZoomInTopRight extends BaseElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        opacity: 0;
        transform: scale3d(0.3, 0.3, 0.3) translate3d(500px, -500px, 0);
      }
    `
  ];

  protected getAnimation() {
    return {
      transform: [
        'scale3d(0.3, 0.3, 0.3) translate3d(500px,-500px,0)',
        'scale3d(1, 1, 1) translate3d(0,0,0)'
      ],
      opacity: [0, 1]
    };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'zoom-in-top-right': ZoomInTopRight;
  }
}
