<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const props = defineProps<{
  text: string;
}>();

const { t } = useI18n();

</script>

<template>
  <button class="planet-btn">
    <span class="planet-btn__content">{{ $t(text) }}</span>
  </button>
</template>

<style scoped lang="postcss">
  @import './planet-btn.pcss';
</style>