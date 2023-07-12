import { css } from 'lit';
import BaseElement from '../core/base-element';
import { customElement } from 'lit/decorators.js';

@customElement('scale-out-bottom-right')
export class ScaleOutBottomRight extends BaseElement {
  static styles = [
    css`
      :host {
        display: inline-block;
      }
    `
  ];

  protected getAnimation() {
    return { scale: [1, 0], translateX: '100%', translateY: '100%' };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'scale-out-bottom-right': ScaleOutBottomRight;
  }
}
