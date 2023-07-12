import { css } from 'lit';
import BaseElement from '../core/base-element';
import { customElement } from 'lit/decorators.js';

@customElement('rotate-left')
export class RotateLeft extends BaseElement {
  static styles = [
    css`
      :host {
        display: inline-block;
      }
    `
  ];

  protected getAnimation() {
    return { rotate: -360 };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rotate-left': RotateLeft;
  }
}
