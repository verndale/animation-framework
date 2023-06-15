import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../html/templates/parallax.hbs';

export type ParallaxProps = {
  inviewOffset: string;
  pictures: {
    className?: string;
    opacity?: string;
    scale?: string;
    translateX?: string;
    translateY?: string;
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
  render: template,
  argTypes: {
    pictures: { control: 'object' }
  },
  decorators: [
    Story =>
      `<div style="border: 4px dashed #000; text-align: center; min-height: 50vh; display: grid; place-content:center;">scroll</div>
      ${Story()}
      <div style="border: 4px dashed #000; text-align: center; min-height: 50vh; display: grid; place-content:center;">scroll</div>`
  ]
};

export default meta;
type Story = StoryObj<ParallaxProps>;

export const Parallax: Story = {
  args: {
    inviewOffset: "['start end', 'end end']",
    pictures: [
      {
        className: 'parallax__image--translate',
        translateX: '-20%, 20%',
        srcset: {
          639: 'https://verndale-image-tools.azurewebsites.net/id/ACt8ycSzpdE?w=540&h=720'
        },
        src: 'https://verndale-image-tools.azurewebsites.net/id/ACt8ycSzpdE?w=540&h=720',
        width: '540px',
        height: '720px',
        description: 'Image Description'
      },
      {
        scale: '1.5',
        srcset: {
          639: 'https://verndale-image-tools.azurewebsites.net/id/N2zk9yXjmLA?w=540&h=720'
        },
        src: 'https://verndale-image-tools.azurewebsites.net/id/N2zk9yXjmLA?w=540&h=720',
        width: '540px',
        height: '720px',
        description: 'Image Description'
      },
      {
        className: 'parallax__image--translate',
        translateY: '-100px, 100px',
        srcset: {
          639: 'https://verndale-image-tools.azurewebsites.net/id/dqXiw7nCb9Q?w=540&h=720'
        },
        src: 'https://verndale-image-tools.azurewebsites.net/id/dqXiw7nCb9Q?w=540&h=720',
        width: '540px',
        height: '720px',
        description: 'Image Description'
      }
    ]
  }
};
