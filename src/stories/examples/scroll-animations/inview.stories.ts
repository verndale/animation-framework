import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../html/templates/inview.hbs';

export type InviewProps = {
  items: {
    container?: {
      className?: string;
    };
    animatedElement: {
      as: string;
      title: string;
      className?: string;
      opacity?: string;
      translateX?: string;
      translateY?: string;
      scale?: string;
    };
  }[];
};

const meta: Meta<InviewProps> = {
  title: 'Examples/Scroll Animations/InView',
  render: template,
  argTypes: {
    items: { control: 'object' }
  }
};

export default meta;
type Story = StoryObj<InviewProps>;

export const InView: Story = {
  args: {
    items: [
      {
        container: {
          className: 'inview-section gold'
        },
        animatedElement: {
          as: 'h2',
          title: 'Item 1',
          opacity: '0, 1',
          translateX: '-100, 0'
        }
      },
      {
        container: {
          className: 'inview-section purple'
        },
        animatedElement: {
          as: 'h2',
          title: 'Item 2',
          opacity: '0, 1',
          translateX: '-100, 0'
        }
      },
      {
        container: {
          className: 'inview-section gold'
        },
        animatedElement: {
          as: 'h2',
          className: 'fit-content',
          title: 'Item 3',
          scale: '1.5'
        }
      }
    ]
  }
};
