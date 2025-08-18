<script setup>
import Footer from './ui/Footer.vue';
import Navbar from './ui/Navbar.vue';

</script>

<template>
  <div class="flex w-full">
    <div class="fixed inset-0 flex justify-center sm:px-8">
      <div class="flex w-full max-w-7xl lg:px-8">
        <div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
      </div>
    </div>
    <div class="relative flex w-full flex-col">
      <div class="flex-none" style="height: var(--content-offset);"></div>
      <Navbar />
      <router-view />
      <Footer />
    </div>
  </div>
</template>