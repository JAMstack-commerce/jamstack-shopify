<template>
  <grid-item class="small--one-half medium-up--one-quarter">
    <product-card :product="$props.product" />
  </grid-item>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import ProductCard from './ProductCard.vue';
import GridItem from './GridItem.vue';
import { GridProduct } from '@/interfaces/product';

@Component({
  components: { ProductCard, GridItem },
})
class ProductGridItem extends Vue {
    @Prop({ type: Object })
    readonly product!: GridProduct
}
export default ProductGridItem;
</script>
