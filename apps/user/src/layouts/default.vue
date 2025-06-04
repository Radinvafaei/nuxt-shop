<script setup lang="ts">
import Footer from '../components/Footer.vue';
import Nav from '../components/Nav.vue';
</script>
<template>
  <Nav />
  <main class="pt-6 pb-10">
    <slot />
  </main>
  <Footer />
</template>
