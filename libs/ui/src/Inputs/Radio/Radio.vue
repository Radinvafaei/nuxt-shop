<script setup lang="ts">
import { useAttrs, defineEmits, computed } from 'vue';

const attrs = useAttrs();
const props = defineProps<{
  modelValue: string;
  value: string;
}>();

const isChecked = computed(() => props.modelValue === props.value);
const isDisabled = computed(
  () => attrs.disabled === `` || attrs.disabled === true,
);
const emit = defineEmits<{
  (e: `update:modelValue`, val: string): void;
}>();
</script>
<template>
  <label
    class="inline-flex items-center gap-2 cursor-pointer select-none text-xs"
    :class="{
      'opacity-50 cursor-not-allowed': isDisabled,
      'text-gray-800': isChecked,
      'text-gray-500': !isChecked,
    }"
  >
    <input
      type="radio"
      v-bind="attrs"
      :value="value"
      :checked="isChecked"
      class="peer hidden"
      @change="emit('update:modelValue', value)"
    />
    <div
      class="w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-150 border-gray-250 peer-checked:border-pink-700"
    >
      <div v-if="isChecked" class="w-2 h-2 rounded-full bg-pink-700" />
    </div>
    <slot />
  </label>
</template>
