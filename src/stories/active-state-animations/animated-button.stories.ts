import type { Meta, StoryObj } from '@storybook/html';
import template from '../../html/components/animated-button.hbs';

export type AnimatedButtonProps = {
  label: string;
  animationClass: string;
  customClass: string;
  icon?: {
    name: string;
  };
};

const meta: Meta<AnimatedButtonProps> = {
  title: 'Active State Animations/Animated Button',
  tags: ['autodocs'],
  render: template,
  argTypes: {
    label: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<AnimatedButtonProps>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    customClass: 'btn--primary'
  }
};

export const Grow: Story = {
  args: {
    label: 'Grow',
    animationClass: 'grow-anim',
    customClass: ''
  }
};

export const Wobble: Story = {
  args: {
    label: 'Wobble',
    animationClass: 'wobble-anim',
    customClass: ''
  }
};

export const Buzz: Story = {
  args: {
    label: 'Buzz',
    animationClass: 'buzz-anim',
    customClass: ''
  }
};

export const Sweep: Story = {
  args: {
    label: 'Sweep',
    animationClass: 'sweep-anim',
    customClass: ''
  }
};

export const Radial: Story = {
  args: {
    label: 'Radial',
    animationClass: 'radial-anim',
    customClass: ''
  }
};

export const Outline: Story = {
  args: {
    label: 'Outline',
    animationClass: 'outline-anim',
    customClass: ''
  }
};

export const Underline: Story = {
  args: {
    label: 'Underline',
    animationClass: 'underline-anim',
    customClass: ''
  }
};

export const IconForward: Story = {
  args: {
    label: 'Icon Forward',
    animationClass: 'icon-forward-anim',
    customClass: '',
    icon: {
      name: 'plus'
    }
  }
};

export const IconUp: Story = {
  args: {
    label: 'Icon Up',
    animationClass: 'icon-up-anim',
    customClass: '',
    icon: {
      name: 'file-pdf'
    }
  }
};
