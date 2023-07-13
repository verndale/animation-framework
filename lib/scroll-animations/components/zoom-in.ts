import { css } from 'lit';
import BaseElement from '../core/base-element';
import { customElement } from 'lit/decorators.js';

@customElement('zoom-in')
export class ZoomIn extends BaseElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        opacity: 0;
        transform: scale3d(0.3, 0.3, 0.3);
      }
    `
  ];

  protected getAnimation() {
    return { transform: ['scale3d(0.3, 0.3, 0.3)', 'scale3d(1, 1,1)'], opacity: [0, 1] };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'zoom-in': ZoomIn;
  }
}
