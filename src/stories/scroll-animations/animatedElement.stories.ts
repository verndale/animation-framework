import type { Meta, StoryObj } from '@storybook/html';
import template from '../../html/scroll-animations/animated-element.hbs';

export type AnimatedElelentProps = {
  animation?: string;
  scrub?: boolean;
  content: string;
};

const meta: Meta<AnimatedElelentProps> = {
  title: 'Scroll Animations/Animated Elelent',
  render: template,
  argTypes: {
    animation: {
      name: 'Animation',
      control: 'select',
      options: [
        'fade-in',
        'slide-in-up',
        'slide-in-down',
        'slide-in-left',
        'slide-in-right',
        'slide-out-up',
        'slide-out-down',
        'slide-out-left',
        'slide-out-right',
        'scale-in',
        'scale-in-up',
        'scale-in-down',
        'scale-in-left',
        'scale-in-right',
        'scale-in-top-left',
        'scale-in-top-right',
        'scale-in-bottom-left',
        'scale-in-bottom-right'
      ]
    },
    content: { name: 'Content', control: 'text' },
    scrub: { name: 'Scrub', control: 'boolean' }
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
type Story = StoryObj<AnimatedElelentProps>;

export const AnimatedElelent: Story = {
  args: {
    animation: 'fade-in',
    content: '<h1>Animated Element</h1>',
    scrub: false
  }
};
