<script setup>
import gsap from "gsap";
import { onMounted } from "vue";
const bricks = [1, 2, 3, 4, 5];
onMounted(() => {
  window.addEventListener("load", function () {
    const tl = gsap.timeline();
    tl.to(".brick", {
      height: 0,
      stagger: 0.1,
    });
    tl.to(".loader", {
      display: "none",
    });
  });
});
</script>
<template>
  <div class="loader fixed top-0 left-0 w-full h-full z-99 flex">
    <div
      v-for="(brick, idx) in bricks"
      :key="idx"
      class="brick bg-zinc-900 dark:bg-white w-[20%] h-full"
    ></div>
  </div>
</template>
