import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../html/templates/animejs.hbs';

export type InviewProps = {
  items: {
    animation: string;
    stagger?: number | boolean;
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
        animation: '{"translateX":"250px"}'
      },
      {
        animation: '{"translateX":"250px", "rotate":"180deg", "scale":"2"}'
      },
      {
        animation: '{"translateX":"250px"}',
        stagger: 0.25
      },
      {
        animation: '{"translateX":"250px", "scale":"2", "borderRadius":"50%"}'
      }
    ]
  }
};
