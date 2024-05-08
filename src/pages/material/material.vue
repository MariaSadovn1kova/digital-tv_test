<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';

import { type TMaterial } from '@/shared/api/material/models';
import { MaterialAPI } from '@/shared';
import { PlanetDateTag, PlanetBackBtn, PlanetLoader } from '@/widget';

const route = useRoute();

const material = ref<TMaterial.IMaterial>();
const materialID = computed(() => route.params.materialID as string);

onMounted(async () => {
  material.value = await MaterialAPI.getMaterial(materialID.value);
});
</script>

<template>
  <div class="container">
    <div class="material">

      <div class="material__header">
       <PlanetBackBtn />
      </div>

      <div class="material__card" v-if="material">
        <PlanetDateTag :date="material.datetime"/>
        <h1 class="material__title">{{ material.title }}</h1>
        <p class="material__short-descr">{{ material.short_description }}</p>
        <div class="material__text" v-html="material.description_html" />
      </div>

      <PlanetLoader v-else/>

    </div>
  </div>
</template>

<style scoped lang="postcss">
  @import './material.pcss';
</style>