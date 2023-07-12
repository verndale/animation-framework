import type { Meta, StoryObj } from '@storybook/html';
import template from '../../../../html/animated-elements/scale/scale-in.hbs';

export type ScaleInProps = {
  scrub?: boolean;
  content: string;
};

const meta: Meta<ScaleInProps> = {
  title: 'Examples/Scroll Animations/ScaleIn',
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
type Story = StoryObj<ScaleInProps>;

export const ScaleIn: Story = {
  args: {
    content: '<h1>Scale In test</h1>'
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const ScaleInScroll: Story = {
  args: {
    content: '<h1>scroll fade-in test</h1>',
    scrub: true
  },
  parameters: {
    layout: 'fullscreen'
  }
};
