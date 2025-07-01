<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 py-8">
      <h1 class="font-title font-bold text-3xl mb-8">Panier</h1>

      <div v-if="cartStore.items.length === 0" class="text-center py-16">
        <div class="mb-8">
          <ShoppingBagIcon class="h-24 w-24 text-gray-300 mx-auto" />
        </div>
        <h2 class="font-title font-semibold text-xl text-gray-900 mb-4">
          Votre panier est vide
        </h2>
        <p class="text-gray-600 mb-8">
          Découvrez nos produits et ajoutez-les à votre panier
        </p>
        <router-link to="/shop" class="btn-primary">
          Continuer mes achats
        </router-link>
      </div>

      <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-2 space-y-4">
          <div 
            v-for="item in cartStore.items" 
            :key="item.id"
            class="bg-white p-6 rounded-xl shadow-sm"
          >
            <div class="flex items-center space-x-4">
              <img 
                :src="item.image" 
                :alt="item.name"
                class="w-20 h-20 object-cover rounded-lg"
              >
              <div class="flex-1">
                <h3 class="font-title font-semibold text-lg">{{ item.name }}</h3>
                <p class="text-gray-600 text-sm">{{ item.description }}</p>
                <p class="text-primary font-semibold mt-2">{{ item.price.toFixed(2) }}€</p>
              </div>
              <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-2">
                  <button 
                    @click="updateQuantity(item.id, item.quantity - 1)"
                    class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span class="w-8 text-center">{{ item.quantity }}</span>
                  <button 
                    @click="updateQuantity(item.id, item.quantity + 1)"
                    class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
                <button 
                  @click="removeItem(item.id)"
                  class="text-red-500 hover:text-red-700 p-1"
                >
                  <TrashIcon class="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="bg-white p-6 rounded-xl shadow-sm h-fit">
          <h3 class="font-title font-semibold text-lg mb-4">Résumé de commande</h3>
          
          <div class="space-y-3 mb-6">
            <div class="flex justify-between">
              <span>Sous-total ({{ cartStore.totalItems }} articles)</span>
              <span>{{ cartStore.totalPrice.toFixed(2) }}€</span>
            </div>
            <div class="flex justify-between">
              <span>Livraison</span>
              <span>{{ shipping.toFixed(2) }}€</span>
            </div>
            <div class="border-t pt-3">
              <div class="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span class="text-primary">{{ total.toFixed(2) }}€</span>
              </div>
            </div>
          </div>

          <button 
            @click="checkout"
            class="w-full btn-primary mb-4"
          >
            Passer commande
          </button>

          <router-link 
            to="/shop" 
            class="block text-center text-gray-600 hover:text-primary transition-colors"
          >
            Continuer mes achats
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ShoppingBagIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
const shipping = computed(() => cartStore.totalPrice > 50 ? 0 : 4.90)
const total = computed(() => cartStore.totalPrice + shipping.value)

const updateQuantity = (productId: string, quantity: number) => {
  cartStore.updateQuantity(productId, quantity)
}

const removeItem = (productId: string) => {
  cartStore.removeFromCart(productId)
}

const checkout = () => {
  // Integration with payment system (Stripe) would go here
  alert('Fonctionnalité de paiement à intégrer avec Stripe')
}
</script>