<script setup lang="ts">
import { useAttrs, computed } from 'vue';

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: `update:modelValue`, val: boolean): void;
}>();

const attrs = useAttrs();

const isChecked = computed(() => props.modelValue);
const isDisabled = computed(
  () => attrs.disabled === `` || attrs.disabled === true,
);
</script>

<template>
  <label
    class="inline-flex items-center w-8 h-4 rounded-md cursor-pointer transition-all duration-300 px-[1.78px]"
    :class="[isChecked ? 'bg-pink-700' : 'bg-gray-300']"
  >
    <input
      type="checkbox"
      class="hidden peer"
      :checked="isChecked"
      @change="emit('update:modelValue', !isChecked)"
      v-bind="attrs"
    />
    <div
      class="w-[12.44px] h-[12.44px] bg-white border-[1.07px] border-green-50 rounded-[5px] transition-all duration-300 flex flex-col items-center justify-center gap-[1.53px]"
      :class="[isChecked ? '-translate-x-4' : 'translate-x-0']"
    >
      <div class="flex gap-[1.53px] w-full justify-center">
        <div class="w-[2px] h-[2px] bg-blue-200 rounded-full" />
        <div class="w-[2px] h-[2px] bg-blue-200 rounded-full" />
      </div>
      <div class="flex gap-[1.53px] w-full justify-center">
        <div class="w-[2px] h-[2px] bg-blue-200 rounded-full" />
        <div class="w-[2px] h-[2px] bg-blue-200 rounded-full" />
      </div>
    </div>
  </label>
</template>
