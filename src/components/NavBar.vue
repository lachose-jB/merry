<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-lg">M</span>
          </div>
          <span class="font-title font-bold text-xl text-gray-900">Merry's Food et nutrition</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            class="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            :class="{ 'text-primary': $route.path === item.href }"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Cart & Mobile Menu -->
        <div class="flex items-center space-x-4">
          <router-link 
            to="/cart" 
            class="relative p-2 text-gray-700 hover:text-primary transition-colors"
          >
            <ShoppingBagIcon class="h-6 w-6" />
            <span 
              v-if="cartStore.totalItems > 0"
              class="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
            >
              {{ cartStore.totalItems }}
            </span>
          </router-link>

          <!-- Mobile menu button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 text-gray-700 hover:text-primary"
          >
            <Bars3Icon v-if="!mobileMenuOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t">
      <div class="px-4 py-2 space-y-1">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          @click="mobileMenuOpen = false"
          class="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
          :class="{ 'text-primary bg-gray-50': $route.path === item.href }"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShoppingBagIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Boutique', href: '/shop' },
  { name: 'Consultation', href: '/consultation' },
  { name: 'À propos', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
]
</script>