<template>
  <div :class="wrapperCSS">
    <a
      class="grid-view-item__link grid-view-item__image-container full-width-link"
      :href="productUrl"
    >
      <span class="visually-hidden">{{ product.title }}</span>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { GridProduct } from '@/interfaces/product';

@Component
class ProductCard extends Vue {
    @Prop({ type: Object })
    readonly product!: GridProduct

    private get productUrl(): string {
      // TODO: Return proper product URL,
      // preferrably within the currently active collection
      return '#';
    }

    private get wrapperCSS(): string[] {
      const css = [
        'grid-view-item',
        'product-card',
      ];

      return this.product.availableForSale ? css : css.concat('grid-view-item--sold-out');
    }
}
export default ProductCard;
</script>
