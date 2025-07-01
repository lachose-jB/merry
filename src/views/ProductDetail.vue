<template>
  <div v-if="product" class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <!-- Breadcrumb -->
      <nav class="mb-8">
        <ol class="flex items-center space-x-2 text-sm">
          <li><router-link to="/" class="text-gray-500 hover:text-primary">Accueil</router-link></li>
          <li class="text-gray-300">/</li>
          <li><router-link to="/shop" class="text-gray-500 hover:text-primary">Boutique</router-link></li>
          <li class="text-gray-300">/</li>
          <li class="text-gray-900">{{ product.name }}</li>
        </ol>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Product Image -->
        <div class="space-y-4">
          <div class="aspect-square bg-white rounded-xl overflow-hidden shadow-sm">
            <img 
              :src="product.image" 
              :alt="product.name"
              class="w-full h-full object-cover"
            >
          </div>
        </div>

        <!-- Product Info -->
        <div class="space-y-6">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span 
                v-if="product.category === 'supplement'" 
                class="bg-primary text-white text-xs px-2 py-1 rounded-full"
              >
                Complément alimentaire
              </span>
              <span 
                v-else-if="product.category === 'ebook'" 
                class="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
              >
                E-book numérique
              </span>
              <span 
                v-else-if="product.category === 'program'" 
                class="bg-purple-500 text-white text-xs px-2 py-1 rounded-full"
              >
                Programme complet
              </span>
            </div>
            <h1 class="font-title font-bold text-3xl text-gray-900">
              {{ product.name }}
            </h1>
          </div>

          <div v-if="product.rating" class="flex items-center space-x-2">
            <div class="flex items-center">
              <span class="text-yellow-400">★★★★★</span>
              <span class="ml-2 text-gray-600">{{ product.rating }}/5</span>
            </div>
            <span class="text-gray-400">•</span>
            <span class="text-gray-600">{{ product.reviews }} avis</span>
          </div>

          <p class="text-gray-600 text-lg leading-relaxed">
            {{ product.description }}
          </p>

          <!-- Extended description based on category -->
          <div class="prose prose-sm max-w-none">
            <div v-if="product.category === 'supplement'">
              <h3 class="font-title font-semibold text-lg">Conseils d'utilisation</h3>
              <p>Prendre 1 capsule par jour avec un verre d'eau, de préférence pendant les repas.</p>
              
              <h3 class="font-title font-semibold text-lg">Ingrédients</h3>
              <p>Extrait naturel de haute qualité, certifié biologique et sans additifs artificiels.</p>
            </div>
            
            <div v-else-if="product.category === 'ebook'">
              <h3 class="font-title font-semibold text-lg">Contenu du guide</h3>
              <ul class="list-disc list-inside space-y-1">
                <li>50+ recettes équilibrées et savoureuses</li>
                <li>Plans de repas personnalisables</li>
                <li>Conseils nutritionnels d'experts</li>
                <li>Guide des superaliments</li>
              </ul>
            </div>
            
            <div v-else-if="product.category === 'program'">
              <h3 class="font-title font-semibold text-lg">Programme complet</h3>
              <ul class="list-disc list-inside space-y-1">
                <li>21 jours de menus détaillés</li>
                <li>Liste de courses hebdomadaires</li>
                <li>Exercices et activités quotidiennes</li>
                <li>Suivi personnalisé avec notre équipe</li>
              </ul>
            </div>
          </div>

          <!-- Price and Add to Cart -->
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div class="text-3xl font-bold text-primary">
                {{ product.price.toFixed(2) }}€
              </div>
              <div class="text-sm text-gray-500">
                {{ product.inStock ? 'En stock' : 'Rupture de stock' }}
              </div>
            </div>

            <div class="flex items-center space-x-4 mb-4">
              <label class="text-sm font-medium">Quantité:</label>
              <div class="flex items-center space-x-2">
                <button 
                  @click="quantity > 1 && quantity--"
                  class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  :disabled="quantity <= 1"
                >
                  -
                </button>
                <span class="w-8 text-center">{{ quantity }}</span>
                <button 
                  @click="quantity++"
                  class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            <button 
              @click="addToCart"
              class="w-full btn-primary"
              :disabled="!product.inStock"
            >
              {{ product.inStock ? 'Ajouter au panier' : 'Produit indisponible' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="min-h-screen flex items-center justify-center">
    <p class="text-gray-500">Produit non trouvé</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCartStore } from '../stores/cart'
import { products } from '../data/products'

interface Props {
  id: string
}

const props = defineProps<Props>()
const cartStore = useCartStore()
const quantity = ref(1)

const product = computed(() => 
  products.find(p => p.id === props.id)
)

const addToCart = () => {
  if (product.value && product.value.inStock) {
    cartStore.addToCart(product.value, quantity.value)
    quantity.value = 1
  }
}
</script>