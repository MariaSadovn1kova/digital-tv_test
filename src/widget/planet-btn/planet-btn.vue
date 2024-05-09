<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps<{
  text: string;
}>();

const { t } = useI18n();
const windowWidth = ref(window.innerWidth);

onMounted(() => {
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
  });
});
</script>

<template>
  <button class="planet-btn">
    <template v-if="windowWidth > 1014">
      <span class="planet-btn__content">{{ $t(text) }}</span>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </button>
</template>

<style scoped lang="postcss">
  @import './planet-btn.pcss';
</style>