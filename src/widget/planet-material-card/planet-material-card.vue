<script setup lang="ts">
import type { TMaterial } from '@/shared/api/material/models';
import { Calendar } from '@/assets';

const props = defineProps<{
  material: TMaterial.IMaterial;
}>();

const formatMaterialDate = new Date().toLocaleDateString('ru-RU', { day: 'numeric',  month: 'long'});
</script>

<template>
  <div class="material-card">

    <div class="material-card__date-tag">
      <Calendar />
      <span class="material-card__date"> {{ formatMaterialDate }} </span>
    </div>

    <h2 class="material-card__title"> {{ material.title }} </h2>

    <div class="material-card__descr" >
      <span>{{ material.short_description }}</span>
    </div>

  </div>
</template>

<style scoped lang="postcss">
  @import './planet-material-card.pcss';
</style>