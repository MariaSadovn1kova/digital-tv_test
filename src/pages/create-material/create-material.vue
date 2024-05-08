<script setup lang="ts">
import { ref} from 'vue';
import { useI18n } from 'vue-i18n';

import { PlanetBackBtn, PlanetEditor } from '@/widget';

const { t } = useI18n();

const materialText = ref('');
</script>

<template>
   <div class="container">
    <div class="create-material">

      <div class="create-material__header">
       <PlanetBackBtn />
       <h2 class="create-material__title">{{ $t('create_material') }}</h2>
      </div>
      {{materialText}}
      <div class="create-material__card">
        <PlanetEditor v-model="materialText"/>
      </div>

    </div>
  </div>
</template>

<style scoped lang="postcss">
  @import './create-material.pcss';
</style>