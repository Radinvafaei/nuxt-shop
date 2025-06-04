import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './Button.vue';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template:
      '<Button class="w-[253px]" v-bind="args"><p class="text-sm">CLick Me!</p></Button>',
  }),
};

export const Filled: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template:
      '<Button variant="filled" class="w-[253px]" v-bind="args"><p class="text-sm">CLick Me!</p></Button>',
  }),
};
