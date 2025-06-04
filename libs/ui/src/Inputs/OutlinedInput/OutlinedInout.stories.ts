import type { Meta, StoryObj } from '@storybook/vue3';
import OutlinedInput from './OutlinedInput.vue';
import { SearchIcon } from 'icons';

const meta = {
  component: OutlinedInput,
  args: {
    icon: SearchIcon,
  },
} satisfies Meta<typeof OutlinedInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  render: (args) => ({
    components: { OutlinedInput },
    setup() {
      return { args };
    },
    template: '<OutlinedInput placeholder="Search" class="w-[253px]"/>',
  }),
};
