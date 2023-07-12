import { css } from 'lit';
import BaseElement from '../core/base-element';
import { customElement } from 'lit/decorators.js';

@customElement('scale-in-down')
export class ScaleInDown extends BaseElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        transform: scale(0) translateY(-100%);
      }
    `
  ];

  protected getAnimation() {
    return { scale: [0, 1], translateY: ['-100%', '0%'] };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'scale-in-down': ScaleInDown;
  }
}
