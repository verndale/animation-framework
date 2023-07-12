import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../../../html/animated-elements/scale/scale-in-up.hbs';

export type ScaleInUpProps = {
  scrub?: boolean;
  content: string;
};

const meta: Meta<ScaleInUpProps> = {
  title: 'Examples/Scroll Animations/ScaleInUp',
  render: template,
  argTypes: {
    content: { control: 'text' }
  },
  decorators: [
    (story, context) => {
      if (context.args.scrub)
        return `<div style="height: 100vh"></div>${story()}<div style="height: 100vh"></div>`;
      return story();
    }
  ]
};

export default meta;
type Story = StoryObj<ScaleInUpProps>;

export const ScaleInUp: Story = {
  args: {
    content: '<h1>Scale In Up test</h1>'
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const ScaleInUpScroll: Story = {
  args: {
    content: '<h1>scroll scale-in-up test</h1>',
    scrub: true
  },
  parameters: {
    layout: 'fullscreen'
  }
};
