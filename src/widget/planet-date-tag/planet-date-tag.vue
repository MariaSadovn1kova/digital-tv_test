<script setup lang="ts">
import { Calendar } from '@/assets';

const props = defineProps<{
  date: string;
}>();

const formatMaterialDate = new Date(props.date).toLocaleDateString('ru-RU', { day: 'numeric',  month: 'long'});
</script>

<template>
  <div class="date-tag">
    <Calendar />
    <span class="date-tag__date"> {{ formatMaterialDate }} </span>
  </div>
</template>

<style scoped lang="postcss">
  @import './planet-date-tag.pcss';
</style>