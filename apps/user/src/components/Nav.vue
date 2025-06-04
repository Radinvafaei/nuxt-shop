<script setup lang="ts">
import { Button } from 'ui';
import { Phone, Book, Products, FAQ } from 'icons';
import useBreakpointLargerThan from '../hooks/useBreakpointLargerThan';
import { ref, watch } from 'vue';
const isMenuOpen = ref<boolean>(false);
const isMdUp = useBreakpointLargerThan(`md`);
watch(isMdUp, (newVal) => {
  if (newVal) {
    isMenuOpen.value = false;
  }
});
</script>
<template>
  <nav
    class="flex relative items-center bg-white justify-between md:justify-center h-[72px] md:h-[120px] shadow-[0_2px_2px_0_rgba(0,0,0,0.08)] rounded-b-2xl px-4"
  >
    <Button
      class="w-10 flex flex-col gap-y-1 md:hidden"
      variant="secondary-outlined"
      @click="isMenuOpen = !isMenuOpen"
    >
      <div
        class="w-3 h-[1px] rounded-sm bg-pink-700 transition-all duration-300"
        :class="[isMenuOpen && 'rotate-45 translate-y-[5px] w-[18px]']"
      />
      <div
        class="w-3 h-[1px] rounded-sm bg-pink-700 transition-all duration-300"
        :class="[isMenuOpen && 'scale-0']"
      />
      <div
        class="w-3 h-[1px] rounded-sm bg-pink-700 transition-all duration-300"
        :class="[isMenuOpen && '-rotate-45 -translate-y-[5px] w-[18px]']"
      />
    </Button>
    <div
      class="flex gap-6 bg-white z-[100000] md:z-0 top-[75px] p-4 md:p-0 absolute md:static flex-col md:flex-row md:rounded-none rounded-lg duration-300 transition-all"
      :class="[
        isMenuOpen
          ? 'translate-x-[0px] w-[200px] shadow-[0_5px_5px_0_rgba(0,0,0,0.1)]'
          : 'translate-x-[200px] md:translate-x-0',
      ]"
    >
      <div
        class="flex gap-x-2 items-center hover:text-pink-700 hover:stroke-pink-700 stroke-blue-900 text-blue-900 cursor-pointer transition-all duration-300"
      >
        <Products />
        <p class="text-[13px] hover:text-pink-700">لیست محصولات</p>
      </div>
      <div
        class="flex gap-x-2 items-center hover:text-pink-700 hover:stroke-pink-700 stroke-blue-900 text-blue-900 cursor-pointer transition-all duration-300"
      >
        <Book />
        <p class="text-[13px] hover:text-pink-700">دریافت مشاوره</p>
      </div>
      <div
        class="flex gap-x-2 items-center hover:text-pink-700 hover:stroke-pink-700 stroke-blue-900 text-blue-900 cursor-pointer transition-all duration-300"
      >
        <FAQ />
        <p class="text-[13px] hover:text-pink-700">سوالات متداول</p>
      </div>
      <div
        class="flex gap-x-2 items-center hover:text-pink-700 hover:stroke-pink-700 stroke-blue-900 text-blue-900 cursor-pointer transition-all duration-300"
      >
        <Phone />
        <p class="text-[13px]">تماس با ما</p>
      </div>
    </div>
    <Button
      class="w-10 md:w-[107px] gap-2 flex md:absolute md:left-20 lg:left-[164px] md:bg-pink-700 md:text-white"
      variant="secondary-outlined"
    >
      <p class="hidden md:block">تماس</p>
      <Phone class="md:stroke-white stroke-pink-700" />
    </Button>
  </nav>
</template>
