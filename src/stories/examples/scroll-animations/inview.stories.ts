import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../html/templates/inview.hbs';

export type InviewProps = {
  items: {
    title: string;
    className: string;
  }[];
};

const meta: Meta<InviewProps> = {
  title: 'Examples/Scroll Animations/InView',
  tags: ['autodocs'],
  render: template,
  argTypes: {
    items: { control: 'object' }
  }
};

export default meta;
type Story = StoryObj<InviewProps>;

export const Default: Story = {
  args: {
    items: [
      {
        title: 'Item 1',
        className: 'inview-section gold'
      },
      {
        title: 'Item 2',
        className: 'inview-section purple'
      }
    ]
  }
};
