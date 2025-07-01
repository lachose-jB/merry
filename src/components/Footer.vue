<template>
  <footer class="bg-nature-800 text-white">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-lg">M</span>
            </div>
            <span class="font-title font-bold text-xl">Merry's Food et nutrition</span>
          </div>
          <p class="text-gray-300">
            Votre partenaire santé pour une nutrition équilibrée et un mode de vie sain.
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="font-title font-semibold mb-4">Navigation</h3>
          <ul class="space-y-2">
            <li v-for="item in navigation" :key="item.name">
              <router-link 
                :to="item.href" 
                class="text-gray-300 hover:text-white transition-colors"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="font-title font-semibold mb-4">Services</h3>
          <ul class="space-y-2 text-gray-300">
            <li>Consultation personnalisée</li>
            <li>Programmes nutrition</li>
            <li>Suppléments naturels</li>
            <li>Guides et e-books</li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-title font-semibold mb-4">Contact</h3>
          <div class="space-y-2 text-gray-300">
            <p>📧 contact@merrysfood.fr</p>
            <p>📞 01 23 45 67 89</p>
            <p>📍 123 Rue de la Santé, 75001 Paris</p>
          </div>
        </div>
      </div>

      <div class="border-t border-nature-700 mt-8 pt-8 text-center text-gray-300">
        <p>&copy; 2025 Merry's Food et nutrition. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Boutique', href: '/shop' },
  { name: 'Consultation', href: '/consultation' },
  { name: 'À propos', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
]
</script>