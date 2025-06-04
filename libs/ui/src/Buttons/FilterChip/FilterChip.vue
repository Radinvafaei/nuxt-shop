<script setup lang="ts">
import { defineProps } from 'vue';
import type { IFilterChipProps } from './interface';
import { CloseIcon } from 'icons';

const { icon, title, onClick } = defineProps<IFilterChipProps>();
</script>
<template>
  <div
    class="inline-flex h-8 items-center gap-2.5 rounded-full bg-pink-100 px-2"
  >
    <component :is="icon" class="stroke-blue-900" />
    <span class="text-sm text-gray-900">{{ title }}</span>
    <button v-if="onClick" @click="onClick">
      <CloseIcon />
    </button>
  </div>
</template>
