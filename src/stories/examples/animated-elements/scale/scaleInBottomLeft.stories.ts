import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../../html/animated-elements/scale/scale-in-bottom-left.hbs';

export type ScaleInBottomLeftProps = {
  scrub?: boolean;
  content: string;
};

const meta: Meta<ScaleInBottomLeftProps> = {
  title: 'Examples/Scroll Animations/ScaleInBottomLeft',
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
type Story = StoryObj<ScaleInBottomLeftProps>;

export const ScaleInBottomLeft: Story = {
  args: {
    content: '<h1>Scale In Bottom Left test</h1>'
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const ScaleInBottomLeftScroll: Story = {
  args: {
    content: '<h1>scroll scale-in-bottom-left test</h1>',
    scrub: true
  },
  parameters: {
    layout: 'fullscreen'
  }
};
