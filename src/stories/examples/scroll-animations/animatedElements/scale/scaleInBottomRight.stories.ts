import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../../../html/animated-elements/scale/scale-in-bottom-right.hbs';

export type ScaleInBottomRightProps = {
  scrub?: boolean;
  content: string;
};

const meta: Meta<ScaleInBottomRightProps> = {
  title: 'Examples/Scroll Animations/ScaleInBottomRight',
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
type Story = StoryObj<ScaleInBottomRightProps>;

export const ScaleInBottomRight: Story = {
  args: {
    content: '<h1>Scale In Bottom Right test</h1>'
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const ScaleInBottomRightScroll: Story = {
  args: {
    content: '<h1>scroll scale-in-bottom-right test</h1>',
    scrub: true
  },
  parameters: {
    layout: 'fullscreen'
  }
};
