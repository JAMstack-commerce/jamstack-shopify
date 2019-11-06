<template>
  <div class="grid__item">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
class GridItem extends Vue {}
export default GridItem;
</script>
