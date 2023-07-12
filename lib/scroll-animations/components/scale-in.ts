import { css } from 'lit';
import BaseElement from '../core/base-element';
import { customElement } from 'lit/decorators.js';

@customElement('scale-in')
export class ScaleIn extends BaseElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        transform: scale(0);
      }
    `
  ];

  protected getAnimation() {
    return { scale: [0, 1] };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'scale-in': ScaleIn;
  }
}
