<script setup lang="ts">
import {
  TelegramIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'icons';
</script>
<template>
  <footer class="flex flex-col">
    <div
      class="flex flex-col bg-white gap-y-[68px] gap-x-20 sm:flex-row rounded-t-2xl pr-9 md:pr-20 pt-[159px] pb-11 sm:pb-[52px] shadow-[0px_-2px_2px_0px_rgba(0,0,0,0.04)]"
    >
      <div class="hidden md:flex items-end ml-11">
        <p class="text-[13px] text-gray-700">
          هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو هستیم
        </p>
      </div>
      <div class="flex gap-x-[65px] sm:gap-x-20">
        <div class="flex flex-col">
          <p class="text-xl">دسترسی سریع</p>
          <ul class="text-[13px] mt-6 space-y-3">
            <li>درباره ما</li>
            <li>بلاگ</li>
            <li>تماس با ما</li>
            <li>خدمات پس از فروش</li>
          </ul>
        </div>
        <div class="flex flex-col">
          <p class="text-xl">راهنمای سایت</p>
          <ul class="text-[13px] mt-6 space-y-3">
            <li>قوانین و مقررات</li>
            <li>دریافت مشاوره</li>
            <li>انتقادات و پیشنهادات</li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col">
        <p class="text-xl">شبکه‌های اجتماعی</p>
        <ul class="text-[13px] mt-6 space-y-4">
          <li>تلگرام</li>
          <li>اینستاگرام</li>
          <li>لینکدین</li>
        </ul>
      </div>
    </div>
    <div
      class="w-full relative bg-gray-100 flex flex-col md:flex-row justify-center md:justify-center pt-[29px] items-center px-5 gap-y-4 pb-[41px] md:pb-[30px]"
    >
      <div class="flex flex-col gap-y-4">
        <p class="text-gray-700 text-[13px] text-center max-w-[320px]">
          تمامی حقوق مادی و معنوی این وبسایت متعلق به می‌باشد و هر گونه کپی
          برداری پیگرد قانونی دارد.
        </p>
        <div class="flex justify-center gap-x-4">
          <TelegramIcon />
          <InstagramIcon />
          <LinkedinIcon />
          <TwitterIcon />
          <YoutubeIcon />
        </div>
      </div>
      <div
        class="flex md:absolute md:left-16 lg:left-[168px] justify-center gap-x-4"
      >
        <img
          src="/assets/cert/samandehi.png"
          alt="Samandehi"
          class="w-[72px] h-[72px]"
        />
        <img
          src="/assets/cert/enamad.png"
          alt="Enamad"
          class="w-[72px] h-[72px]"
        />
      </div>
    </div>
  </footer>
</template>
