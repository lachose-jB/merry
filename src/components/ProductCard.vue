<template>
  <div class="card overflow-hidden group cursor-pointer" @click="goToProduct">
    <div class="relative overflow-hidden">
      <img 
        :src="product.image" 
        :alt="product.name"
        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      >
      <div class="absolute top-3 right-3">
        <span 
          v-if="product.category === 'supplement'" 
          class="bg-primary text-white text-xs px-2 py-1 rounded-full"
        >
          Complément
        </span>
        <span 
          v-else-if="product.category === 'ebook'" 
          class="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
        >
          E-book
        </span>
        <span 
          v-else-if="product.category === 'program'" 
          class="bg-purple-500 text-white text-xs px-2 py-1 rounded-full"
        >
          Programme
        </span>
      </div>
    </div>

    <div class="p-6">
      <h3 class="font-title font-semibold text-lg mb-2 text-gray-900">
        {{ product.name }}
      </h3>
      <p class="text-gray-600 text-sm mb-4 line-clamp-2">
        {{ product.description }}
      </p>

      <div class="flex items-center mb-4" v-if="product.rating">
        <div class="flex items-center">
          <span class="text-yellow-400 text-sm">★</span>
          <span class="ml-1 text-sm text-gray-600">
            {{ product.rating }} ({{ product.reviews }})
          </span>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="text-2xl font-bold text-primary">
          {{ product.price.toFixed(2) }}€
        </div>
        <button 
          @click.stop="addToCart"
          class="btn-primary py-2 px-4 text-sm"
          :disabled="!product.inStock"
        >
          {{ product.inStock ? 'Ajouter' : 'Rupture' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'
import type { Product } from '../types'

interface Props {
  product: Product
}

const props = defineProps<Props>()
const router = useRouter()
const cartStore = useCartStore()

const goToProduct = () => {
  router.push(`/product/${props.product.id}`)
}

const addToCart = () => {
  if (props.product.inStock) {
    cartStore.addToCart(props.product)
  }
}
</script>