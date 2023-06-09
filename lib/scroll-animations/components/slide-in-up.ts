import { css } from 'lit';
import BaseElement from '../core/base-element';
import { customElement } from 'lit/decorators.js';

@customElement('slide-in-up')
export class SlideInUp extends BaseElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        transform: translate(0%, 100%);
      }
    `
  ];

  protected getAnimation() {
    return { translateY: ['100%', '0%'] };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'slide-in-up': SlideInUp;
  }
}
