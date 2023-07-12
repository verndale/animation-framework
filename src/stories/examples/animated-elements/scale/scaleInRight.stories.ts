import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../../html/animated-elements/scale/scale-in-right.hbs';

export type ScaleInRightProps = {
  scrub?: boolean;
  content: string;
};

const meta: Meta<ScaleInRightProps> = {
  title: 'Examples/Scroll Animations/ScaleInRight',
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
type Story = StoryObj<ScaleInRightProps>;

export const ScaleInRight: Story = {
  args: {
    content: '<h1>Scale In Right test</h1>'
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const ScaleInRightScroll: Story = {
  args: {
    content: '<h1>scroll scale-in-right test</h1>',
    scrub: true
  },
  parameters: {
    layout: 'fullscreen'
  }
};
