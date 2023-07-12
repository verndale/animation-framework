import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../../html/animated-elements/slide/slide-out-left.hbs';

export type SlideOutLeftProps = {
  scrub?: boolean;
  content: string;
};

const meta: Meta<SlideOutLeftProps> = {
  title: 'Examples/Scroll Animations/SlideOutLeft',
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
type Story = StoryObj<SlideOutLeftProps>;

export const SlideOutLeft: Story = {
  args: {
    content: '<h1>Slide Out Left test</h1>'
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const SlideOutLeftScroll: Story = {
  args: {
    content: '<h1>scroll slide-out-left test</h1>',
    scrub: true
  },
  parameters: {
    layout: 'fullscreen'
  }
};
