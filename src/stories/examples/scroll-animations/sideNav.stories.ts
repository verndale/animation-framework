import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../html/modules/sidenav.hbs';

export type ToogleElementProps = {
  items: {
    title: string;
    className: string;
    inTranslateY: string;
    outTranslateY: string;
    content?: string;
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
    easing: string;
  };
  mobileAnimatedElement: {
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
    easing: string;
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
        title: 'Smart mailboxes',
        className: 'sidenav__inline-menu-item',
        inTranslateY: '-200px,0',
        outTranslateY: '0,-200px',
        content: '<ul><li>Menu item 1</li><li>Menu item 2</li><li>Menu item 3</li></ul>'
      },
      {
        title: 'How it works',
        className: 'sidenav__inline-menu-item',
        inTranslateY: '-200px,0',
        outTranslateY: '0,-200px',
        content: '<ul><li>Menu item 1</li><li>Menu item 2</li></ul>'
      },
      {
        title: 'The app',
        className: 'sidenav__inline-menu-item',
        inTranslateY: '-200px,0',
        outTranslateY: '0,-200px',
        content: '<ul><li>Menu item 1</li></ul>'
      }
    ],
    animatedElement: {
      as: 'div',
      inTranslateX: '-36vw,0',
      outTranslateX: '0,-36vw',
      content:
        '<div><p>Choose your smart mailbox</p><ul><li>Menu item 1</li><li>Menu item 2</li><li>Menu item 3</li></ul></div>',
      className: 'sidenav__side-menu',
      duration: 0.8,
      easing: '0.77, 0, 0.175, 1'
    },
    mobileAnimatedElement: {
      as: 'div',
      inTranslateX: '100vw,0',
      outTranslateX: '0,100vw',
      content: '',
      className: 'sidenav__mobile-menu',
      duration: 0.8,
      easing: '0.77, 0, 0.175, 1'
    }
  }
};
