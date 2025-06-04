import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Switch from './Switch.vue';

const meta = {
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => ({
  components: { Switch },
  setup() {
    const isOn = ref(false);
    return { isOn };
  },
  template: `
    <Switch v-model="isOn" name="switch" />
  `,
});
