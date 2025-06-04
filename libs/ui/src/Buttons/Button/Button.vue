<script setup lang="ts">
import { IButtonProps } from './interface';
import { computed } from 'vue';
const { variant = `outlined`, rounded = `xs` } = defineProps<IButtonProps>();
const roundedClass = computed(() =>
  rounded === `sm` ? `rounded-2xl` : `rounded-xl`,
);
</script>

<template>
  <button
    :class="[
      'h-10 flex justify-center items-center text-sm',
      variant === `outlined` && `border-gray-200 border-[1.5px]`,
      variant === `filled` && `bg-pink-700 text-white`,
      variant === `secondary-outlined` && `border-pink-700 border-[1.5px]`,
      roundedClass,
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
