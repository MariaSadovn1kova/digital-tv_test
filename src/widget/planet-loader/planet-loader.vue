<script lang="ts" setup>
import { ref, onMounted } from 'vue';


const loaderSize = ref(50);
const loaderColor = ref('#00B2FF');

onMounted(() => {
  const loader = document.querySelector('.loader__spin') as HTMLElement;
  loader.style.border = `4px solid ${loaderColor.value}`;
  loader.style.borderTopColor = 'transparent';
  loader.style.width = `${loaderSize.value}px`;
  loader.style.height = `${loaderSize.value}px`;

  const rotateLoader = () => {
    loader.style.transform = `rotate(${loaderSize.value / 2}px)`;
  };

  setInterval(rotateLoader, 1000 / 60);
});
</script>

<template>
  <div class="loader">
    <div class="loader__spin"></div>
  </div>
</template>

<style scoped lang="postcss">
  @import './planet-loader.pcss';
</style>