import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../../html/animated-elements/slide/slide-out-down.hbs';

export type SlideOutDownProps = {
  scrub?: boolean;
  content: string;
};

const meta: Meta<SlideOutDownProps> = {
  title: 'Examples/Scroll Animations/SlideOutDown',
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
type Story = StoryObj<SlideOutDownProps>;

export const SlideOutDown: Story = {
  args: {
    content: '<h1>Slide Out Down test</h1>'
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const SlideOutDownScroll: Story = {
  args: {
    content: '<h1>scroll slide-out-down test</h1>',
    scrub: true
  },
  parameters: {
    layout: 'fullscreen'
  }
};
