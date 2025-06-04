<script setup lang="ts">
import { ref } from 'vue';
import { ArrowIcon } from 'icons';
const { title } = defineProps<{ title: string }>();
const isOpen = ref<boolean>(false);
</script>

<template>
  <div class="w-full border rounded-3xl overflow-hidden shadow">
    <button
      @click="isOpen = !isOpen"
      class="w-full p-4 bg-white text-[13px] text-gray-700 stroke-blue-300 font-medium flex justify-between items-center"
    >
      <span>{{ title }}</span>
      <ArrowIcon
        :class="[isOpen ? 'rotate-0' : 'rotate-180']"
        class="duration-300 transition-all"
      />
    </button>

    <transition name="fade">
      <div v-if="isOpen" class="px-4 py-3 bg-white text-gray-700 text-sm">
        <slot />
      </div>
    </transition>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
