<script setup lang="ts">
import { defineProps } from 'vue';
import { Home, ArrowIcon } from 'icons';
import { IBreadCrumbProps } from './interface';
const { levels } = defineProps<IBreadCrumbProps>();
</script>
<template>
  <div class="flex items-center gap-2">
    <Home />
    <div class="flex items-center gap-2" v-for="level in levels" :key="level">
      <ArrowIcon class="stroke-blue-300 rotate-90 scale-75" />
      <p class="text-sm text-blue-300">{{ level }}</p>
    </div>
  </div>
</template>
