<script setup lang="ts">
import { BreadCrumb, Box } from 'ui';
import { useGetProductByID } from '../../hooks/services/products';
const { params } = useRoute();
const { data } = useGetProductByID(+params.id);
</script>

<template>
  <div class="flex flex-col gap-y-6 px-4 md:px-20 lg:px-[164px]">
    <BreadCrumb :levels="['لیست محصولات‌', data.data?.title]" />
    <Box class="w-full px-4 py-6 flex flex-col gap-y-6 md:pt-8 md:px-6 md:pb-6">
      <p class="font-bold text-lg text-blue-900 md:text-2xl lg:text-lg">
        {{ data.data?.title }}
      </p>
      <img
        class="w-full h-[235px] md:h-[310px]"
        :src="data.data?.image"
        :alt="data.data?.title"
      />
    </Box>
    <Box class="w-full p-6 flex flex-col gap-y-4">
      <p class="text-bold text-[20px] text-blue-900">مشخصات فنی</p>
      <div class="w-full flex flex-col gap-y-2">
        <div class="flex flex-col gap-2 md:flex-row">
          <div
            class="bg-gray-50 flex items-center px-4 h-12 rounded-2xl md:w-[172px] md:rounded-r-2xl md:rounded-l-[4px]"
          >
            <p class="text-blue-400 text-sm">قیمت</p>
          </div>
          <div
            class="bg-gray-50 flex items-center px-4 h-12 rounded-2xl md:w-[calc(100%-172px)] md:rounded-l-2xl md:rounded-r-[4px]"
          >
            <p class="text-blue-600 text-sm font-bold">
              {{ data.data?.price }} تومان
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-2 md:flex-row">
          <div
            class="bg-gray-50 flex items-center px-4 h-12 md:h-auto rounded-2xl md:w-[172px] md:rounded-r-2xl md:rounded-l-[4px]"
          >
            <p class="text-blue-400 text-sm">توضیحات</p>
          </div>
          <div
            class="bg-gray-50 flex items-center px-4 py-3 rounded-2xl md:w-[calc(100%-172px)] md:rounded-l-2xl md:rounded-r-[4px]"
          >
            <p class="text-blue-600 text-sm font-bold max-w-[429px]">
              {{ data.data?.description }}
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-2 md:flex-row">
          <div
            class="bg-gray-50 flex items-center px-4 h-12 rounded-2xl md:w-[172px] md:rounded-r-2xl md:rounded-l-[4px]"
          >
            <p class="text-blue-400 text-sm">دسته بندی</p>
          </div>
          <div
            class="bg-gray-50 flex items-center px-4 h-12 rounded-2xl md:w-[calc(100%-172px)] md:rounded-l-2xl md:rounded-r-[4px]"
          >
            <p class="text-blue-600 text-sm font-bold">
              {{ data.data?.category }}
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-2 md:flex-row">
          <div
            class="bg-gray-50 flex items-center px-4 h-12 rounded-2xl md:w-[172px] md:rounded-r-2xl md:rounded-l-[4px]"
          >
            <p class="text-blue-400 text-sm">رتبه</p>
          </div>
          <div
            class="bg-gray-50 flex items-center px-4 h-12 rounded-2xl md:w-[calc(100%-172px)] md:rounded-l-2xl md:rounded-r-[4px]"
          >
            <p class="text-blue-600 text-sm font-bold">
              {{ data.data?.rating.rate }}
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-2 md:flex-row">
          <div
            class="bg-gray-50 flex items-center px-4 h-12 rounded-2xl md:w-[172px] md:rounded-r-2xl md:rounded-l-[4px]"
          >
            <p class="text-blue-400 text-sm">تعداد</p>
          </div>
          <div
            class="bg-gray-50 flex items-center px-4 h-12 rounded-2xl md:w-[calc(100%-172px)] md:rounded-l-2xl md:rounded-r-[4px]"
          >
            <p class="text-blue-600 text-sm font-bold">
              {{ data.data?.rating.count }}
            </p>
          </div>
        </div>
      </div>
    </Box>
  </div>
</template>
