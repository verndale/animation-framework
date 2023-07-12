import { css } from 'lit';
import BaseElement from '../core/base-element';
import { customElement } from 'lit/decorators.js';

@customElement('scale-in-bottom-left')
export class ScaleInBottomLeft extends BaseElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        transform: scale(0) translate(-100%, 100%);
      }
    `
  ];

  protected getAnimation() {
    return { scale: [0, 1], translateX: ['-100%', '0%'], translateY: ['100%', '0%'] };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'scale-in-bottom-left': ScaleInBottomLeft;
  }
}
