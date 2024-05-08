<script setup lang="ts">
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

import { MaterialAPI } from '@/shared';
import { PlanetMaterialCard } from '@/widget';

const { t } = useI18n();
onMounted(async () => {
  const test = await MaterialAPI.getMaterials();
});

const materials = [
    {
        id: "1",
        title: "Как у сов получается поворачивать голову на 270 градусов?",
        datetime: "2024-05-06 00:00:00",
        short_description: "Известно, что совы — превосходные хищники. Причем они одинаково видят как днем, так и ночью. Известно, что совы — превосходные хищники. Причем они одинаково видят как днем, так и ночью. ",
        description_html: "<p>Сова &mdash; хищная птица из отряда &laquo;Совообразные&raquo;. Он включает более двух сотен видов пернатых. Совы распространены по всему земному шару, они обитают в горах, лесах, степях, на морских побережьях и даже на Крайнем Севере. Большая часть из них ведет ночной образ жизни и охотится в темное время суток. В статье подробно узнаем об образе жизни сов, что они едят, особенностях размножения и правилах содержания в доме или квартире.</p>\n<p>Совиное меню в основном включает пищу животного происхождения. Эти хищники долгое время могут обходиться без воды, так как поддерживают водный баланс с помощью крови убитых животных. Филины и некоторые совы больших размеров могут схватить и убить зайца.</p>",
        description_json: {
           
        }
    }
]
</script>

<template>
  <div class="materials">

    <h1 class="materials__header">{{ $t('materials') }}</h1>

    <div class="materials__content">
      <PlanetMaterialCard 
        v-for="material in materials"
        :key="material.id"
        :material="material"
      />
    </div>

  </div>
</template>

<style scoped lang="postcss">
  @import './materials.pcss';
</style>