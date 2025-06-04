import type { Meta, StoryObj } from '@storybook/vue3';
import FilterChip from './FilterChip.vue';
import { action } from '@storybook/addon-actions';
import { Sort } from 'icons';

const meta = {
  component: FilterChip,
  args: {
    icon: Sort,
    title: 'تعداد',
    onClick: action('chip-clicked'),
  },
} satisfies Meta<typeof FilterChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  render: (args) => ({
    components: { FilterChip },
    setup() {
      return { args };
    },
    template: '<FilterChip v-bind="args" />',
  }),
};
