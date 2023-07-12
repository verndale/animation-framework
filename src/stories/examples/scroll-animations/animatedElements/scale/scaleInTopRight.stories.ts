import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../../../html/animated-elements/scale/scale-in-top-right.hbs';

export type ScaleInTopRightProps = {
  scrub?: boolean;
  content: string;
};

const meta: Meta<ScaleInTopRightProps> = {
  title: 'Examples/Scroll Animations/ScaleInTopRight',
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
type Story = StoryObj<ScaleInTopRightProps>;

export const ScaleInTopRight: Story = {
  args: {
    content: '<h1>Scale In Top Right test</h1>'
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const ScaleInTopRightScroll: Story = {
  args: {
    content: '<h1>scroll scale-in-Top-right test</h1>',
    scrub: true
  },
  parameters: {
    layout: 'fullscreen'
  }
};
