import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../html/templates/timeline.hbs';

export type InviewProps = {
  items: {
    animatedTimeline?: {
      as?: string;
      className?: string;
    };
    animatedElements: {
      as?: string;
      className?: string;
      opacity?: string;
      translateX?: string;
      translateY?: string;
      scale?: string;
    }[];
  }[];
};

const meta: Meta<InviewProps> = {
  title: 'Examples/Scroll Animations/Timeline',
  render: template,
  argTypes: {
    items: { control: 'object' }
  },
  decorators: [
    Story =>
      `<div style="border: 4px dashed #000; text-align: center; min-height: 100vh; display: grid; place-content:center;">scroll</div>
      ${Story()}
      <div style="border: 4px dashed #000; text-align: center; min-height: 50vh; display: grid; place-content:center;">scroll</div>`
  ]
};

export default meta;
type Story = StoryObj<InviewProps>;

export const Timeline: Story = {
  args: {
    items: [
      {
        animatedTimeline: {
          as: 'div',
          className: 'timeline'
        },
        animatedElements: [
          {
            as: 'div',
            className: 'square',
            opacity: '0, 1'
          },
          {
            as: 'div',
            className: 'square',
            scale: '0, 1'
          },
          {
            as: 'div',
            className: 'square',
            translateX: '-100px, 0'
          }
        ]
      }
    ]
  }
};
