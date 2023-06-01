import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../html/templates/parallax.hbs';

export type ParallaxProps = {
  pictures: {
    srcset: Required<{
      [key: number]: string;
    }>;
    src: string;
    width: string;
    height: string;
    description: string;
  }[];
};

const meta: Meta<ParallaxProps> = {
  title: 'Examples/Scroll Animations/Parallax',
  tags: ['autodocs'],
  render: template,
  argTypes: {
    pictures: { control: 'object' }
  }
};

export default meta;
type Story = StoryObj<ParallaxProps>;

export const Default: Story = {
  args: {
    pictures: Array(6).fill({
      srcset: {
        639: 'https://verndale-image-tools.azurewebsites.net/id/Bkci_8qcdvQ?w=639&h=300',
        1023: 'https://verndale-image-tools.azurewebsites.net/id/Bkci_8qcdvQ?w=1023&h=500'
      },
      src: 'https://verndale-image-tools.azurewebsites.net/id/Bkci_8qcdvQ?w=1280&h=500',
      width: '1280px',
      height: '500px',
      description: 'Image Description'
    })
  }
};
