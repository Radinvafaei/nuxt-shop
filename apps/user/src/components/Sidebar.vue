<script setup lang="ts">
import { ref, watch, defineExpose, toRefs } from 'vue';
import {
  Button,
  Box,
  OutlinedInput,
  CollapsibleBox,
  Radio,
  Checkbox,
  Switch,
} from 'ui';
import { CloseIcon, SearchIcon } from 'icons';
import useBreakpointLargerThan from '../hooks/useBreakpointLargerThan';
const isSidebarOpen = ref<boolean>(false);
const text = ref<string>(``);
const isMdUp = useBreakpointLargerThan(`md`);
const props = defineProps<{
  filterState: {
    isAvailable: boolean;
    selectedSort: string;
    selectedCategories: { [key: string]: boolean };
    textSearch: string;
  };
}>();
const { isAvailable, selectedSort, selectedCategories, textSearch } = toRefs(
  props.filterState,
);
watch(
  () => textSearch.value,
  (newVal) => {
    console.log({ newVal });
    text.value = newVal;
  },
);
const submitTextSearch = () => {
  if (text.value) {
    textSearch.value = text.value;
  }
};
watch(isMdUp, (newVal) => {
  if (newVal) {
    isSidebarOpen.value = false;
  }
});

const open = () => {
  isSidebarOpen.value = true;
};

const close = () => {
  isSidebarOpen.value = false;
};

const toggle = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
defineExpose({
  open,
  close,
  toggle,
});
</script>

<template>
  <aside
    class="w-[275px] items-center gap-y-4 md:w-[266px] z-[500] min-h-[572px] p-4 md:p-0 bg-gray-200 md:bg-transparent rounded-3xl shadow-[0_10px_10px_0_rgba(0,0,0,0.1)] md:shadow-none flex flex-col transition-all duration-300 absolute md:static"
    :class="[
      isSidebarOpen
        ? 'translate-x-[0px]'
        : 'translate-x-[350px] md:translate-x-0',
    ]"
  >
    <div class="md:hidden w-full flex items-center justify-end">
      <Button @click="close" variant="secondary-outlined" class="w-10 bg-white">
        <CloseIcon />
      </Button>
    </div>
    <Box class="mt-4 md:mt-0 flex flex-col w-[266px] gap-4 p-4">
      <p class="text-[13px] text-gray-700">فیلتر جست و جو</p>
      <OutlinedInput v-model="text" :icon="SearchIcon" />
      <Button
        @click="submitTextSearch"
        class="w-[234px] text-xs"
        variant="filled"
      >
        جست و جو
      </Button>
    </Box>
    <Box class="w-full h-12 px-4 flex items-center justify-between">
      <p class="text-sm text-gray-700">درب‌های موجود</p>
      <Switch v-model="isAvailable" />
    </Box>
    <CollapsibleBox title="مرتب سازی">
      <div class="flex flex-col gap-y-5">
        <Radio v-model="selectedSort" name="sort" value="count-asc"
          >تعداد: کم به زیاد</Radio
        >
        <Radio v-model="selectedSort" name="sort" value="count-desc"
          >تعداد: زیاد به کم</Radio
        >
        <Radio v-model="selectedSort" name="sort" value="rate-desc"
          >رتبه: زیاد به کم</Radio
        >
        <Radio v-model="selectedSort" name="sort" value="rate-asc"
          >رتبه: کم به زیاد</Radio
        >
      </div>
    </CollapsibleBox>
    <CollapsibleBox title="دسته بندی">
      <div class="flex flex-col gap-y-5">
        <div class="flex justify-between items-center">
          <Checkbox v-model="selectedCategories.home" name="home"
            >مسکن و ساختمان</Checkbox
          >
          <div
            :class="[
              'w-6 h-6 flex items-center justify-center rounded-md text-white transition-all duration-300 text-xs',
              selectedCategories.home ? 'bg-pink-700' : 'bg-blue-800',
            ]"
          >
            ۱۲
          </div>
        </div>
        <div class="flex justify-between items-center">
          <Checkbox v-model="selectedCategories.health" name="health"
            >بهداشت و درمان</Checkbox
          >
          <div
            :class="[
              'w-6 h-6 flex items-center justify-center rounded-md text-white transition-all duration-300 text-xs',
              selectedCategories.health ? 'bg-pink-700' : 'bg-blue-800',
            ]"
          >
            ۲۳
          </div>
        </div>
        <div class="flex justify-between items-center">
          <Checkbox v-model="selectedCategories.industrial" name="industrial"
            >صنعتی و کارخانه</Checkbox
          >
          <div
            :class="[
              'w-6 h-6 flex items-center justify-center rounded-md text-white transition-all duration-300 text-xs',
              selectedCategories.industrial ? 'bg-pink-700' : 'bg-blue-800',
            ]"
          >
            ۴
          </div>
        </div>
      </div>
    </CollapsibleBox>
  </aside>
</template>
