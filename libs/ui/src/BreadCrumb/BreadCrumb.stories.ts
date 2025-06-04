import type { Meta, StoryObj } from '@storybook/vue3';
import BreadCrumb from './BreadCrumb.vue';

const meta = {
  component: BreadCrumb,
  args: {
    levels: ['دسته‌بندی', 'محصولات'],
  },
} satisfies Meta<typeof BreadCrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  render: (args) => ({
    components: { BreadCrumb },
    setup() {
      return { args };
    },
    template: '<BreadCrumb v-bind="args" />',
  }),
};
