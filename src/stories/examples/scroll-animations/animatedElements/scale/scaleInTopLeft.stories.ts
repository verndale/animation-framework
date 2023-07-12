import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../../../html/animated-elements/scale/scale-in-top-left.hbs';

export type ScaleInTopLeftProps = {
  scrub?: boolean;
  content: string;
};

const meta: Meta<ScaleInTopLeftProps> = {
  title: 'Examples/Scroll Animations/ScaleInTopLeft',
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
type Story = StoryObj<ScaleInTopLeftProps>;

export const ScaleInTopLeft: Story = {
  args: {
    content: '<h1>Scale In Top Left test</h1>'
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const ScaleInTopLeftScroll: Story = {
  args: {
    content: '<h1>scroll scale-in-top-left test</h1>',
    scrub: true
  },
  parameters: {
    layout: 'fullscreen'
  }
};
