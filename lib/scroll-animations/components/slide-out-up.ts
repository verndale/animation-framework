import { css } from 'lit';
import BaseElement from './base-element';
import { customElement } from 'lit/decorators.js';

@customElement('slide-out-up')
export class SlideOutUp extends BaseElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        transform: translate(0%, 0%);
      }
    `
  ];

  protected getAnimation() {
    return { translateY: ['100%', '0%'], visibility: 'hidden' };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'slide-out-up': SlideOutUp;
  }
}
