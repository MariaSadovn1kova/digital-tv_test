<script setup lang="ts">
import { RouterLink } from 'vue-router';

import type { TMaterial } from '@/shared/api/material/models';
import { PlanetDateTag } from '@/widget';

const props = defineProps<{
  material: TMaterial.IMaterial;
}>();
</script>

<template>
  <RouterLink class="material-card" :to="`/${material.id}`">

    <PlanetDateTag 
      class="material-card__date-tag"
      :date="material.datetime"
    />

    <h2 class="material-card__title"> {{ material.title }} </h2>

    <p class="material-card__descr" >
      {{ material.short_description }}
    </p>

  </RouterLink>
</template>

<style scoped lang="postcss">
  @import './planet-material-card.pcss';
</style>