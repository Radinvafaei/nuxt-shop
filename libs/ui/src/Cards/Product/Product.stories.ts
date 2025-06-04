import type { Meta, StoryObj } from '@storybook/vue3';
import Product from './Product.vue';

const meta = {
  component: Product,
} satisfies Meta<typeof Product>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => ({
  components: { Product },
  setup() {
    return {};
  },
  template: `
    <Product title="درب اتوماتیک بازویی Face مدل SW2" img="../../../assets/sample.png" />
  `,
});
