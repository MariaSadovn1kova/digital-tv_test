<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';

import { Logo } from '@/assets';
import { PlanetBtn } from '@/widget';

const route = useRoute();

const routeName = computed(() => route.name as string);
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
          to="/create"
        >
          <PlanetBtn 
            :text="`btn.${routeName}`"
          />
        </RouterLink>
        
      </nav>
    </div>
  </header>
</template>

<style lang="postcss">
  @import './planet-navbar.pcss';
</style>