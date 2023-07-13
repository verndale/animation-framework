import { css } from 'lit';
import BaseElement from '../core/base-element';
import { customElement } from 'lit/decorators.js';

@customElement('zoom-out')
export class ZoomOut extends BaseElement {
  static styles = [
    css`
      :host {
        display: inline-block;
      }
    `
  ];

  protected getAnimation() {
    return { transform: ['scale3d(1, 1, 1)', 'scale3d(0.1,0.1,0.1)'], opacity: [1, 0] };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'zoom-out': ZoomOut;
  }
}
