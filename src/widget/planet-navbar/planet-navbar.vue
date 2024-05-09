<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, useRouter, useRoute } from 'vue-router';

import { useMaterialStore } from '@/store/material';
import { Logo, AddMaterial, Share } from '@/assets';
import { PlanetBtn } from '@/widget';

const materialStore = useMaterialStore();
const route = useRoute();
const router = useRouter();

const routeName = computed(() => route.name as string);

const createMaterial = (): void => {
  materialStore.createMaterial();
  router.push('/');
}
</script>

<template>
  <header>
    <div class="planet-navbar">
      <nav class="planet-navbar__menu">

        <RouterLink 
          class="planet-navbar__link" 
          to="/"
        >
          <Logo />
        </RouterLink>

        <RouterLink 
          class="planet-navbar__link" 
          v-if="routeName != 'material-create'"
          to="/create"
        >
          <PlanetBtn 
            :text="`btn.${routeName}`"
          >
            <AddMaterial />
          </PlanetBtn>
        </RouterLink>
        
        <PlanetBtn 
          v-else
          :text="`btn.${routeName}`"
          @click="createMaterial()"
        >
          <Share />
        </PlanetBtn>
        
      </nav>
    </div>
  </header>
</template>

<style lang="postcss">
  @import './planet-navbar.pcss';
</style>