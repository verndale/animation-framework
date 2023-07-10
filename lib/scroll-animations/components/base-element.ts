import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators/property.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T> = new (...args: any[]) => T;

export declare class BaseElementInterface {
  rootMargin?: string;
  amountVisible?: number;
  scrub?: boolean;
  startOffset?: string;
  endOffset?: string;
  duration?: number;
  delay?: number;
  at?: number;
}

export const BaseElement = <T extends Constructor<LitElement>>(superClass: T) => {
  class BaseElement extends superClass {
    static styles = [
      (superClass as unknown as typeof LitElement).styles ?? [],
      css`
        :host {
        }
      `
    ];

    @property({ type: String, attribute: 'root-margin' })
    rootMargin?: string;

    @property({ type: Number, attribute: 'amount-visible' })
    amountVisible = 1;

    @property({ type: Boolean, attribute: 'scrub' })
    scrub?: boolean;

    @property({ type: String, attribute: 'start-offset' })
    startOffset = 'start end';

    @property({ type: String, attribute: 'end-offset' })
    endOffset = 'end start';

    @property({ type: Number, attribute: 'duration' })
    duration = 1;

    @property({ type: Number, attribute: 'delay' })
    delay = 0;

    @property({ type: String, attribute: 'times' })
    times?: string;

    @property({ type: Number, attribute: 'at' })
    at?: number;

    render() {
      return html`<slot></slot>`;
    }
  }
  return BaseElement as Constructor<BaseElementInterface> & T;
};
