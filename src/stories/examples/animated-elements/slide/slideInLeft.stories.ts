import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../../html/animated-elements/slide/slide-in-left.hbs';

export type SlideInLeftProps = {
  scrub?: boolean;
  content: string;
};

const meta: Meta<SlideInLeftProps> = {
  title: 'Examples/Scroll Animations/SlideInLeft',
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
type Story = StoryObj<SlideInLeftProps>;

export const SlideInLeft: Story = {
  args: {
    content: '<h1>Slide In Left test</h1>'
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const SlideInLeftScroll: Story = {
  args: {
    content: '<h1>scroll slide-in-left test</h1>',
    scrub: true
  },
  parameters: {
    layout: 'fullscreen'
  }
};
