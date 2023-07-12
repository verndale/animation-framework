import { css } from 'lit';
import BaseElement from '../core/base-element';
import { customElement } from 'lit/decorators.js';

@customElement('scale-out')
export class ScaleOut extends BaseElement {
  static styles = [
    css`
      :host {
        display: inline-block;
      }
    `
  ];

  protected getAnimation() {
    return { scale: [1, 0] };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'scale-out': ScaleOut;
  }
}
