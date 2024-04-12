<template>
  <v-card>
    <v-img :src="product.data.image" class="white--text align-end" :height="200">
      <v-card-title>{{ product.data.name }}</v-card-title>
    </v-img>
    <v-card-text>
      <div>{{ product.data.description }}</div>
      <div>${{ product.data.price.toFixed(2) }}</div>
      <v-rating
        :value="product.data.rating"
        :readonly="true"
        color="amber"
        dense
      ></v-rating>
      <div>Stock: {{ product.data.stock }}</div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { ProductDoc } from '../types/product';

// Define the props with their types
defineProps<{
  product: ProductDoc;
}>();
</script>


