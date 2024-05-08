<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { useMaterialStore } from '@/store/material';
import { PlanetBackBtn, PlanetEditor } from '@/widget';

const materialStore = useMaterialStore();
const { t } = useI18n();

const materialTitle = computed({
  get: () => materialStore.materialTitle,
  set: (value) => materialStore.materialTitle = value
});

const materialDescr = computed({
  get: () => materialStore.materialDescr,
  set: (value) => materialStore.materialDescr = value
});

const materialText = computed({
  get: () => materialStore.materialText,
  set: (value) => materialStore.materialText = value
});
</script>

<template>
   <div class="container">
    <div class="create-material">

      <div class="create-material__header">
       <PlanetBackBtn />
       <h2 class="create-material__title">{{ $t('create_material') }}</h2>
      </div>
      
      <div class="create-material__card">
        <input 
          v-model="materialTitle"
          class="create-material__material-title planet-input"
          type="text"
          :placeholder="$t('input.title')"
          maxlength="80"
        >
        <input 
          v-model="materialDescr"
          class="create-material__material-short-descr planet-input"
          type="text"
          :placeholder="$t('input.descr')"
          maxlength="255"
        >
        <PlanetEditor v-model="materialText"/>
      </div>

    </div>
  </div>
</template>

<style scoped lang="postcss">
  @import './create-material.pcss';
</style>