<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-8">
        <h1 class="font-title font-bold text-3xl text-gray-900 mb-2">Contact</h1>
        <p class="text-gray-600">Une question ? N'hésitez pas à nous contacter</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white p-8 rounded-xl shadow-sm">
          <h2 class="font-title font-semibold text-xl mb-6">Envoyez-nous un message</h2>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Prénom *
                </label>
                <input 
                  v-model="form.firstName"
                  type="text" 
                  required
                  class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary"
                  placeholder="Votre prénom"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Nom *
                </label>
                <input 
                  v-model="form.lastName"
                  type="text" 
                  required
                  class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary"
                  placeholder="Votre nom"
                >
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary"
                placeholder="votre@email.com"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Téléphone
              </label>
              <input 
                v-model="form.phone"
                type="tel" 
                class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary"
                placeholder="06 12 34 56 78"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Sujet *
              </label>
              <select 
                v-model="form.subject"
                required
                class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary"
              >
                <option value="">Choisir un sujet</option>
                <option value="consultation">Consultation nutritionnelle</option>
                <option value="products">Questions sur les produits</option>
                <option value="partnership">Partenariat</option>
                <option value="support">Support technique</option>
                <option value="other">Autre</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea 
                v-model="form.message"
                rows="5"
                required
                class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary"
                placeholder="Décrivez votre demande en détail..."
              ></textarea>
            </div>

            <button 
              type="submit"
              class="w-full btn-primary"
            >
              Envoyer le message
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-8">
          <!-- Contact Details -->
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <h3 class="font-title font-semibold text-lg mb-4">Nos coordonnées</h3>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <MapPinIcon class="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p class="font-medium">Adresse</p>
                  <p class="text-gray-600">123 Rue de la Santé<br>75001 Paris, France</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <PhoneIcon class="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p class="font-medium">Téléphone</p>
                  <p class="text-gray-600">01 23 45 67 89</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <EnvelopeIcon class="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p class="font-medium">Email</p>
                  <p class="text-gray-600">contact@merrysfood.fr</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Opening Hours -->
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <h3 class="font-title font-semibold text-lg mb-4">Horaires d'ouverture</h3>
            <div class="space-y-2">
              <div class="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span class="text-gray-600">9h00 - 18h00</span>
              </div>
              <div class="flex justify-between">
                <span>Samedi</span>
                <span class="text-gray-600">9h00 - 13h00</span>
              </div>
              <div class="flex justify-between">
                <span>Dimanche</span>
                <span class="text-gray-600">Fermé</span>
              </div>
            </div>
          </div>

          <!-- FAQ Quick Links -->
          <div class="bg-primary/10 p-6 rounded-xl">
            <h3 class="font-title font-semibold text-lg mb-4">Questions fréquentes</h3>
            <div class="space-y-3">
              <div>
                <p class="font-medium text-sm">Comment prendre rendez-vous ?</p>
                <p class="text-gray-600 text-sm">Utilisez notre système de réservation en ligne ou appelez-nous directement.</p>
              </div>
              <div>
                <p class="font-medium text-sm">Délai de livraison ?</p>
                <p class="text-gray-600 text-sm">2-3 jours ouvrés pour la France métropolitaine.</p>
              </div>
              <div>
                <p class="font-medium text-sm">Remboursement consultations ?</p>
                <p class="text-gray-600 text-sm">Certaines mutuelles remboursent nos consultations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // Form submission logic would go here
  alert('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.')
  
  // Reset form
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
}
</script>