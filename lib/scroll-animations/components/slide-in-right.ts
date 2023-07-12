import { css } from 'lit';
import BaseElement from '../core/base-element';
import { customElement } from 'lit/decorators.js';

@customElement('slide-in-right')
export class SlideInRight extends BaseElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        transform: translate(100%, 0%);
      }
    `
  ];

  protected getAnimation() {
    return { translateX: ['100%', '0%'] };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'slide-in-right': SlideInRight;
  }
}
