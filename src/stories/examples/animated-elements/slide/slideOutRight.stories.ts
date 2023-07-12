import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../../html/animated-elements/slide/slide-out-right.hbs';

export type SlideOutRightProps = {
  scrub?: boolean;
  content: string;
};

const meta: Meta<SlideOutRightProps> = {
  title: 'Examples/Scroll Animations/SlideOutRight',
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
type Story = StoryObj<SlideOutRightProps>;

export const SlideOutRight: Story = {
  args: {
    content: '<h1>Slide Out Right test</h1>'
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const SlideOutRightScroll: Story = {
  args: {
    content: '<h1>scroll slide-out-right test</h1>',
    scrub: true
  },
  parameters: {
    layout: 'fullscreen'
  }
};
