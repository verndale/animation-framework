import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../html/templates/animejs.hbs';

export type InviewProps = {
  items: {
    className?: string;
    timelineItems?: {
      className?: string;
      translateX?: string;
      translateY?: string;
      scale?: string;
      opacity?: string;
    }[];
    opacity?: string;
    translateX?: string;
    translateY?: string;
    scale?: string;
  }[];
};

const meta: Meta<InviewProps> = {
  title: 'Examples/Scroll Animations/AnimeJS',
  render: template,
  argTypes: {
    items: { control: 'object' }
  },
  decorators: [
    Story =>
      `<div style="border: 4px dashed #000; text-align: center; min-height: 75vh; display: grid; place-content:center;">scroll</div>
      ${Story()}
      <div style="border: 4px dashed #000; text-align: center; min-height: 50vh; display: grid; place-content:center;">scroll</div>`
  ]
};

export default meta;
type Story = StoryObj<InviewProps>;

export const AnimeJS: Story = {
  args: {
    items: [
      {
        className: 'square',
        translateX: '250px'
      },
      {
        className: 'square',
        translateX: '250px'
      },
      {
        className: 'square',
        scale: '2'
      },
      {
        timelineItems: [
          {
            className: 'square',
            translateX: '50px'
          },
          {
            className: 'square',
            scale: '2'
          },
          {
            className: 'square',
            translateY: '50px'
          }
        ]
      }
    ]
  }
};
