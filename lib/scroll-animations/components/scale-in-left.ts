import { css } from 'lit';
import BaseElement from './base-element';
import { customElement } from 'lit/decorators.js';

@customElement('scale-in-left')
export class ScaleInLeft extends BaseElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        transform: scale(0) translateX(-100%);
      }
    `
  ];

  protected getAnimation() {
    return { scale: [0, 1], translateX: ['100%', '0%'] };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'scale-in-left': ScaleInLeft;
  }
}
