import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../../html/animated-elements/slide/slide-in-up.hbs';

export type SlideInUpProps = {
  scrub?: boolean;
  content: string;
};

const meta: Meta<SlideInUpProps> = {
  title: 'Examples/Scroll Animations/SlideInUp',
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
type Story = StoryObj<SlideInUpProps>;

export const SlideInUp: Story = {
  args: {
    content: '<h1>Slide In Up test</h1>'
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const SlideInUpScroll: Story = {
  args: {
    content: '<h1>scroll slide-in-up test</h1>',
    scrub: true
  },
  parameters: {
    layout: 'fullscreen'
  }
};
