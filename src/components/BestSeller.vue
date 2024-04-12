<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="4"
        v-for="product in bestSellerProducts"
        :key="product.id"
      >
        <StoreItem :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import StoreItem from './StoreItem.vue';
import { useProductStore } from '../stores/ProductStore';

const store = useProductStore();
const bestSellerProducts = store.filterByRating(4.5);
</script>
