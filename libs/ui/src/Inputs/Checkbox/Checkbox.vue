<script setup lang="ts">
import { computed, useAttrs } from 'vue';

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: `update:modelValue`, value: boolean): void;
}>();

const attrs = useAttrs();
const isChecked = computed(() => props.modelValue);
</script>

<template>
  <div
    class="flex items-center gap-x-2"
    :class="[
      isChecked ? 'text-gray-800' : 'text-gray-500',
      'transition-all duration-300',
    ]"
  >
    <label
      class="inline-flex items-center border-[1.5px] w-4 h-4 rounded-md cursor-pointer px-[1.78px]"
      :class="[
        isChecked
          ? 'bg-pink-700 border-pink-700'
          : 'bg-transparent border-gray-250',
      ]"
    >
      <input
        type="checkbox"
        class="hidden peer"
        :checked="isChecked"
        @change="emit('update:modelValue', !isChecked)"
        v-bind="attrs"
      />
      <svg
        v-if="isChecked"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M11.3341 5.5L6.75081 10.0833L4.66748 8"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </label>
    <slot />
  </div>
</template>
