import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../html/templates/inview.hbs';
import { SideNavigation, ToogleElementProps } from '../scroll-animations/sideNav.stories';
import { Default as Accordion, AccordionProps } from '../../components/accordion.stories';

export type InviewProps = {
  accordion: AccordionProps;
  sideNav: ToogleElementProps;
  items: {
    container?: {
      className?: string;
    };
    animatedElement: {
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
  title: 'Examples/Scroll Animations/Demo',
  render: template,
  argTypes: {
    accordion: { control: 'object' },
    sideNav: { control: 'object' },
    items: { control: 'object' }
  }
};

export default meta;
type Story = StoryObj<InviewProps>;

export const InView: Story = {
  args: {
    accordion: Accordion.args as AccordionProps,
    sideNav: SideNavigation.args as ToogleElementProps,
    items: [
      {
        container: {
          className: 'inview-section gold'
        },
        animatedElement: {
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
          className: 'fit-content',
          title: 'Item 3',
          scale: '1.5'
        }
      }
    ]
  }
};
