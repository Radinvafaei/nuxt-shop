import type { Meta, StoryObj } from '@storybook/vue3';
import CollapsibleBox from './CollapsibleBox.vue';

const meta = {
  component: CollapsibleBox,
} satisfies Meta<typeof CollapsibleBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => ({
  components: { CollapsibleBox },
  setup() {
    return {};
  },
  template: `
    <div style="background-color: black; width: 300px; height: 300px;padding: 10px">
        <CollapsibleBox title="TEST">TEST</CollapsibleBox>
    </div>
  `,
});
