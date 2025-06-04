import type { Meta, StoryObj } from '@storybook/vue3';
import Box from './Box.vue';

const meta = {
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => ({
  components: { Box },
  setup() {
    return {};
  },
  template: `
    <div style="background-color: black; width: 300px; height: 300px;padding: 10px">
        <Box>TEST</Box>
    </div>
  `,
});
