import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../../html/animated-elements/slide/slide-in-right.hbs';

export type SlideInRightProps = {
  scrub?: boolean;
  content: string;
};

const meta: Meta<SlideInRightProps> = {
  title: 'Examples/Scroll Animations/SlideInRight',
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
type Story = StoryObj<SlideInRightProps>;

export const SlideInRight: Story = {
  args: {
    content: '<h1>Slide In Right test</h1>'
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const SlideInRightScroll: Story = {
  args: {
    content: '<h1>scroll slide-in-right test</h1>',
    scrub: true
  },
  parameters: {
    layout: 'fullscreen'
  }
};
