import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../html/modules/navigation.hbs';

export type ToogleElementProps = {
  items: {
    animatedElement: {
      title: string;
      className?: string;
      stagger?: number | boolean;
      inOpacity?: string;
      outOpacity?: string;
      inTranslateY?: string;
      outTranslateY?: string;
      content: string;
    };
  }[];
};

const meta: Meta<ToogleElementProps> = {
  title: 'Examples/Scroll Animations/Toggle Element',
  render: template,
  argTypes: {
    items: { control: 'object' }
  }
};

export default meta;
type Story = StoryObj<ToogleElementProps>;

export const Navigation: Story = {
  args: {
    items: [
      {
        animatedElement: {
          inOpacity: '0,1',
          outOpacity: '1,0',
          inTranslateY: '-30,0',
          outTranslateY: '0,-30',
          title: 'Nav 1',
          content: 'Menu 1',
          className: 'navigation__menu'
        }
      },
      {
        animatedElement: {
          inOpacity: '0,1',
          outOpacity: '1,0',
          inTranslateY: '-30,0',
          outTranslateY: '0,-30',
          title: 'Nav 2',
          content: 'Menu 2',
          className: 'navigation__menu'
        }
      },
      {
        animatedElement: {
          inOpacity: '0,1',
          outOpacity: '1,0',
          inTranslateY: '-30,0',
          outTranslateY: '0,-30',
          title: 'Nav 3',
          content: 'Menu 3',
          className: 'navigation__menu'
        }
      }
    ]
  }
};
