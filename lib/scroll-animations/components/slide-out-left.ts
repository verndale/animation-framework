import { css } from 'lit';
import BaseElement from './base-element';
import { customElement } from 'lit/decorators.js';

@customElement('slide-out-left')
export class SlideOutLeft extends BaseElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        transform: translate(0%, 0%);
      }
    `
  ];

  protected getAnimation() {
    return { translateX: ['0%', '-100%'], visibility: 'hidden' };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'slide-out-left': SlideOutLeft;
  }
}
