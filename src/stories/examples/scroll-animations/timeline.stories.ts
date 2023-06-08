import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../html/templates/timeline.hbs';

export type InviewProps = {
  items: {
    timeline: string;
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
      `<div style="border: 4px dashed #000; text-align: center; min-height: 75vh; display: grid; place-content:center;">scroll</div>
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
        timeline: '[{"opacity":[0, 1]}], [{"scale":[1, 2]}]'
      }
    ]
  }
};
