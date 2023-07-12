import { css } from 'lit';
import BaseElement from '../core/base-element';
import { customElement } from 'lit/decorators.js';

@customElement('fade-in')
export class FadeIn extends BaseElement {
  static styles = [
    css`
      :host {
        opacity: 0;
      }
    `
  ];

  protected getAnimation() {
    return { opacity: [0, 1] };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fade-in': FadeIn;
  }
}
