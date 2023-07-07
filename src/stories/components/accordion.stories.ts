import type { Meta, StoryObj } from '@storybook/html';
import { v4 as uuidv4 } from 'uuid';
import template from '../../html/components/accordion.hbs';

export type AccordionProps = {
  collapsable?: boolean;
  items: {
    id: string;
    title: string;
    content: string;
  }[];
};

const meta: Meta<AccordionProps> = {
  title: 'Components/Accordion',
  tags: ['autodocs'],
  render: template,
  argTypes: {
    collapsable: { control: 'boolean' },
    items: { control: 'object' }
  }
};

export default meta;
type Story = StoryObj<AccordionProps>;

export const Default: Story = {
  args: {
    items: [
      {
        id: uuidv4(),
        title: 'Accordion Item 1',
        content:
          'Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.'
      },
      {
        id: uuidv4(),
        title: 'Accordion Item 2',
        content:
          'Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.'
      }
    ]
  }
};

export const Collapsable: Story = {
  args: {
    ...Default.args,
    collapsable: true
  }
};
