<script setup lang="ts">
import { defineProps } from 'vue';
import { IProductProps } from './interface';
import Button from '../../Buttons/Button/Button.vue';
import { ArrowIcon } from 'icons';
const { title, img, onClick } = defineProps<IProductProps>();
</script>

<template>
  <div
    class="flex flex-col w-[182px] gap-y-4 bg-white lg:w-[263.33px] pt-2 px-2 pb-3 rounded-3xl shadow-[0_10px_40px_0_rgba(0,0,0,0.05)]"
  >
    <img :src="img" :alt="title" class="w-[166px] h-[170px] lg:w-[247px]" />
    <p
      class="text-blue-900 text-sm truncate overflow-hidden whitespace-nowrap max-w-[141px] lg:max-w-[220px]"
    >
      {{ title }}
    </p>
    <Button
      @click="onClick"
      variant="outlined"
      class="stroke-pink-700 text-pink-700 text-sm gap-x-2 font-bold"
    >
      مشاهده جزیات
      <ArrowIcon class="rotate-90" />
    </Button>
  </div>
</template>
