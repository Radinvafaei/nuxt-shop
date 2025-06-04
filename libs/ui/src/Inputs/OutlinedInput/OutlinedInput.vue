<script setup lang="ts">
import { ref, useAttrs, defineProps, defineEmits, watch } from 'vue';
import { CloseIcon } from 'icons';
import { IOutlinedInputProps } from './interface';

const props = defineProps<IOutlinedInputProps>();
const emit = defineEmits<{
  (e: `update:modelValue`, value: string): void;
}>();

const inputRef = ref<HTMLInputElement | null>(null);
const attrs = useAttrs();
const inputValue = ref(props.modelValue || ``);
const isFocused = ref<boolean>(false);

watch(
  () => props.modelValue,
  (val) => {
    inputValue.value = val;
  },
);

watch(inputValue, (val) => {
  emit(`update:modelValue`, val);
});

function focusInput() {
  inputRef.value?.focus();
}

function clearInput() {
  inputValue.value = ``;
  focusInput();
}
</script>
<template>
  <div
    @click="focusInput"
    :class="[
      'w-[234px] h-10 border-[1px]  flex items-center rounded-xl  px-4 justify-between hover:cursor-pointer',
      isFocused ? 'border-pink-700 bg-pink-100/20' : 'border-blue-400',
    ]"
  >
    <div class="flex w-full items-center">
      <component :is="icon" class="stroke-pink-700" />
      <div class="w-px h-6 bg-gray-300 mr-[13px] ml-4" />
      <input
        v-bind="attrs"
        v-model="inputValue"
        ref="inputRef"
        class="appearance-none focus:outline-none focus:ring-0 focus:border-none pointer-events-auto bg-transparent w-full"
        dir="auto"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
    </div>
    <CloseIcon
      class="hover:cursor-pointer"
      v-if="inputValue"
      @click.stop="clearInput"
    />
  </div>
</template>
