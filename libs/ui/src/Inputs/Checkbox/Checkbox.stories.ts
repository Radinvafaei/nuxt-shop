import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Checkbox from './Checkbox.vue';

const meta = {
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => ({
  components: { Checkbox },
  setup() {
    const isOn = ref(false);
    return { isOn };
  },
  template: `
    <Checkbox v-model="isOn" name="switch" />
  `,
});
