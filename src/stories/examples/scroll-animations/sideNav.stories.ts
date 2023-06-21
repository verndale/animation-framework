import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../html/modules/sidenav.hbs';

export type ToogleElementProps = {
  items: {
    title: string;
  }[];
  animatedElement: {
    as: string;
    className?: string;
    stagger?: number | boolean;
    inOpacity?: string;
    outOpacity?: string;
    inTranslateY?: string;
    outTranslateY?: string;
    inTranslateX?: string;
    outTranslateX?: string;
    content: string;
    duration: number;
    easing: string | number[];
  };
};

const meta: Meta<ToogleElementProps> = {
  title: 'Examples/Scroll Animations/Toggle Element/Side Navigation',
  render: template,
  argTypes: {
    items: { control: 'object' }
  }
};

export default meta;
type Story = StoryObj<ToogleElementProps>;

export const SideNavigation: Story = {
  args: {
    items: [
      {
        title: 'Smart mailboxes'
      },
      {
        title: 'How it works'
      },
      {
        title: 'The app'
      }
    ],
    animatedElement: {
      as: 'div',
      inTranslateX: '-36vw,0',
      outTranslateX: '0,-36vw',
      content: 'Choose your smart mailbox.',
      className: 'navigation__menu',
      duration: 0.8,
      easing: [0.77, 0, 0.175, 1]
    }
  }
};
