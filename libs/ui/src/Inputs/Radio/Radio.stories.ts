import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Radio from './Radio.vue';

const meta = {
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => ({
  components: { Radio },
  setup() {
    const selected = ref('option1');
    return { selected };
  },
  template: `
    <div class="flex flex-col gap-4">
      <Radio v-model="selected" name="group" value="option1">Option 1</Radio>
      <Radio v-model="selected" name="group" value="option2">Option 2</Radio>
    </div>
  `,
});
