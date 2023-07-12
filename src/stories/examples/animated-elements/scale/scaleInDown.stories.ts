import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../../html/animated-elements/scale/scale-in-down.hbs';

export type ScaleInDownProps = {
  scrub?: boolean;
  content: string;
};

const meta: Meta<ScaleInDownProps> = {
  title: 'Examples/Scroll Animations/ScaleInDown',
  render: template,
  argTypes: {
    content: { control: 'text' }
  },
  decorators: [
    (story, context) => {
      if (context.args.scrub)
        return `<div style="height: 100vh"></div>${story()}<div style="height: 100vh"></div>`;
      return story();
    }
  ]
};

export default meta;
type Story = StoryObj<ScaleInDownProps>;

export const ScaleInDown: Story = {
  args: {
    content: '<h1>Scale In Down test</h1>'
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const ScaleInDownScroll: Story = {
  args: {
    content: '<h1>scroll scale-in-down test</h1>',
    scrub: true
  },
  parameters: {
    layout: 'fullscreen'
  }
};
