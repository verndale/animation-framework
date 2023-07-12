import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../../html/animated-elements/slide/slide-out-up.hbs';

export type SlideOutUpProps = {
  scrub?: boolean;
  content: string;
};

const meta: Meta<SlideOutUpProps> = {
  title: 'Examples/Scroll Animations/SlideOutUp',
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
type Story = StoryObj<SlideOutUpProps>;

export const SlideOutUp: Story = {
  args: {
    content: '<h1>Slide Out Up test</h1>'
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const SlideOutUpScroll: Story = {
  args: {
    content: '<h1>scroll slide-out-up test</h1>',
    scrub: true
  },
  parameters: {
    layout: 'fullscreen'
  }
};
