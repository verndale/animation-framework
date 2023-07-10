import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../../html/animated-elements/fade-in.hbs';

export type FadeInProps = {
  scrub?: boolean;
  content: string;
};

const meta: Meta<FadeInProps> = {
  title: 'Examples/Scroll Animations/FadeIn',
  render: template,
  argTypes: {
    content: { control: 'text' }
  },
  decorators: [
    (story, context) => {
      if (context.args.scrub)
        return `<div style="height: 90vh"></div>${story()}<div style="height: 100vh"></div>`;
      return story();
    }
  ]
};

export default meta;
type Story = StoryObj<FadeInProps>;

export const FadeIn: Story = {
  args: {
    content: '<h1>Fade In test</h1>'
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const FadeInScroll: Story = {
  args: {
    content: '<h1>scroll fade-in test</h1>',
    scrub: true
  },
  parameters: {
    layout: 'fullscreen'
  }
};
