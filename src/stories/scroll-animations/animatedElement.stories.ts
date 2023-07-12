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
        'scale-in-bottom-right',
        'scale-out',
        'scale-out-up',
        'scale-out-down',
        'scale-out-left',
        'scale-out-right',
        'scale-out-top-left',
        'scale-out-top-right',
        'scale-out-bottom-left',
        'scale-out-bottom-right',
        'blur-in',
        'blur-out'
      ]
    },
    content: { name: 'Content', control: 'text' },
    scrub: { name: 'Scrub', control: 'boolean' }
  },
  decorators: [
    (story, context) => {
      if (context.args.scrub)
        return `<div class="scroll-container-top">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.4 122.88">
            <path d="M24.94,67.88A14.66,14.66,0,0,1,4.38,47L47.83,4.21a14.66,14.66,0,0,1,20.56,0L111,46.15A14.66,14.66,0,0,1,90.46,67.06l-18-17.69-.29,59.17c-.1,19.28-29.42,19-29.33-.25L43.14,50,24.94,67.88Z"/>
          </svg>
        Scroll Up
        </div>
        ${story()}
        <div class="scroll-container-bottom"></div>`;
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
