import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../../html/animated-elements/slide/slide-in-down.hbs';

export type SlideInDownProps = {
  scrub?: boolean;
  content: string;
};

const meta: Meta<SlideInDownProps> = {
  title: 'Examples/Scroll Animations/SlideInDown',
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
type Story = StoryObj<SlideInDownProps>;

export const SlideInDown: Story = {
  args: {
    content: '<h1>Slide In Down test</h1>'
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const SlideInDownScroll: Story = {
  args: {
    content: '<h1>scroll slide-in-down test</h1>',
    scrub: true
  },
  parameters: {
    layout: 'fullscreen'
  }
};
