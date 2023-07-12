import { css } from 'lit';
import BaseElement from './base-element';
import { customElement } from 'lit/decorators.js';

@customElement('slide-in-left')
export class SlideInLeft extends BaseElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        transform: translate(-100%, 0%);
      }
    `
  ];

  protected getAnimation() {
    return { translateX: ['-100%', '0%'] };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'slide-in-left': SlideInLeft;
  }
}
