import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../../html/animated-elements/scale/scale-in-left.hbs';

export type ScaleInLeftProps = {
  scrub?: boolean;
  content: string;
};

const meta: Meta<ScaleInLeftProps> = {
  title: 'Examples/Scroll Animations/ScaleInLeft',
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
type Story = StoryObj<ScaleInLeftProps>;

export const ScaleInLeft: Story = {
  args: {
    content: '<h1>Scale In Left test</h1>'
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const ScaleInLeftScroll: Story = {
  args: {
    content: '<h1>scroll scale-in-left test</h1>',
    scrub: true
  },
  parameters: {
    layout: 'fullscreen'
  }
};
