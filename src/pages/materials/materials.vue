<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import { type TMaterial } from '@/shared/api/material/models';
import { MaterialAPI } from '@/shared';
import { PlanetMaterialCard, PlanetLoader } from '@/widget';

const { t } = useI18n();

const materialList = ref<TMaterial.IMaterial[]>([]);
const isLoading = ref<boolean>(true);

onMounted(async () => {
  materialList.value = await MaterialAPI.getMaterials();
  isLoading.value = false;
});
</script>

<template>
  <div class="materials">

    <h1 class="materials__header">{{ $t('materials') }}</h1>

    <div
      v-if="!isLoading" 
      class="materials__content"
    >
      <PlanetMaterialCard 
        v-for="material in materialList"
        :key="material.id"
        :material="material"
      />
    </div>

    <PlanetLoader v-else/>

  </div>
</template>

<style scoped lang="postcss">
  @import './materials.pcss';
</style>