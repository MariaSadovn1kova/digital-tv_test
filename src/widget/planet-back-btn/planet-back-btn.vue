<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';

import { Arrow } from '@/assets';

const { t } = useI18n();
</script>

<template>
  <RouterLink class="planet-back-btn" to="/">
    <Arrow />
    <span>{{ $t('btn.back') }}</span>
  </RouterLink>
</template>

<style lang="postcss">
  @import './planet-back-btn.pcss';
</style>