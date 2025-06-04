<script setup lang="ts">
import { Box, Button, Product, FilterChip } from 'ui';
import { ArrowIcon, SearchIcon, Sort, Products } from 'icons';
import Sidebar from '../components/Sidebar.vue';
import { reactive, ref } from 'vue';
import { useGetProducts } from '../hooks/services/products';
const sidebarRef = ref<InstanceType<typeof Sidebar>>();
const filterState = reactive({
  isAvailable: false,
  selectedSort: ``,
  selectedCategories: {
    home: false,
    health: false,
    industry: false,
  },
  textSearch: ``,
});
const openSidebar = () => {
  sidebarRef.value?.open();
};
const removeText = () => {
  filterState.textSearch = ``;
};
const removeSort = () => {
  filterState.selectedSort = ``;
};
const removeCategory = (key: string) => {
  filterState.selectedCategories[key] = false;
};
const { push } = useRouter()
const { data } = useGetProducts();
</script>
<template>
  <div class="flex gap-x-6 lg:px-[164px] md:px-20 px-4 relative md:static">
    <Sidebar ref="sidebarRef" :filterState="filterState" />
    <div class="flex flex-col w-full">
      <div class="flex gap-x-2 w-full">
        <Button
          @click="openSidebar"
          variant="outlined"
          class="bg-white h-16 w-16 md:hidden"
        >
          <ArrowIcon class="stroke-gray-700 rotate-90 z-10" />
        </Button>
        <Box class="flex justify-between items-center w-full px-3 md:px-6 h-16">
          <p class="text-blue-700 text-xs md:text-sm">فیلتر های اعمال شده</p>
          <div class="w-auto flex gap-3 justify-end">
            <FilterChip
              v-if="filterState.textSearch"
              :title="filterState.textSearch"
              :icon="SearchIcon"
              :onClick="removeText"
            />
            <FilterChip
              v-if="filterState.selectedSort"
              :title="filterState.selectedSort"
              :icon="Sort"
              :onClick="removeSort"
            />
            <template
              v-for="(value, key) in filterState.selectedCategories"
              :key="key"
            >
              <FilterChip
                v-if="value"
                :title="key"
                :icon="Products"
                :onClick="() => removeCategory(key)"
              />
            </template>
          </div>
        </Box>
      </div>
      <div class="flex w-full flex-wrap gap-x-4 gap-y-6 mt-6 justify-center">
        <Product
          v-for="product in data?.data"
          :title="product?.title"
          :img="product?.image"
          :key="product.id"
          :onClick="() => push(`/product/${product.id}`)"
        />
      </div>
    </div>
  </div>
</template>
