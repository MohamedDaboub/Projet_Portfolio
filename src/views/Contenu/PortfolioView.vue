<template>
  <div id="portfolio" class="max-w-screen-xl mx-auto py-10 flex flex-col-reverse lg:flex-row justify-center items-center text-white">
    <div class="max-w-screen-xl mx-auto py-10 flex flex-col justify-center  text-white">
      <TabGroup>
        <TabList class="flex space-x-1 rounded-xl flex-wrap md:flex-nowrap  m-auto bg-blue-900/20 p-1">
          <Tab
            v-for="category in Object.keys(categories)"
            :key="category"
            as="template"
            v-slot="{ selected }"
            class="font-Iceberg md:text-xl text-lg "
          >
            <button
              :class="[
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black px-4',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
              ]"
            >
              {{ category }}
            </button>
          </Tab>
        </TabList>
        <TabPanels class="mt-2">
          <TabPanel
            v-for="(projects, idx) in Object.values(categories)"
            :key="idx"
            :class="[
              '','',]">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 text-black py-8 ">
                <div v-for="project in projects" :key="project.id" :to="'/Projet/' + project.id" class="bg-[#141f36] text-white p-5 rounded-2xl sm:w-[340px] w-full border-2 border-black">
                <img :src="project.src" alt="" class="w-full md:h-52 h-36  object-cover object-center border-2 border-black">
                <div class="px-1 py-4">
                  <h2 class="font-bold text-xl mb-2 font-Iceberg ">{{ project.title }}</h2>
                  <p class=" text-base">{{ project.description }}</p>
                </div>
                <div class="px-1 py-4">
                  <div class="flex justify-between">
                    <div class="flex flex-col">
                      <span class="">{{ project.année }}</span>
                    </div>
                  </div>
                  <div class="flex justify-end  items-end mt-6">
                    <a :href="project.lien" class="text-black hover:text-white bg-white border-2 border-white hover:bg-transparent font-medium py-2 px-4 rounded-[6px] text-lg">Voir le projet</a>                 
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>       
<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'


const categories = ref({
  Développement: [
    {
      id: 1,
      title: 'Aide à la réussite',  
      src: '/img/Aide-a-la-reussite.webp',
      description: 'Aide à la réussite consiste à faire réussir les étudiants dans leurs études. Ils pourront avoir et demander des conseils grâce à Aide à la réussite.',
      année: 'Réalisé en 2023',
      lien: 'Aidealareussite'
    },
    {
      id: 2,
      title: "TiK•Tak",  
      src: '/img/Tik-Tak.webp',
      description: 'TiK•Tak est une plateforme en ligne fictive qui offre une expérience de personnalisation unique pour la création de montres de main personnalisées.',
      année: 'Réalisé en 2022',
      lien: 'TiKTak'
    },
    {
      id: 3,
      title: "Rap Feast", 
      src: '/img/RapFeast.png',
      description: "Rap Feast est un festival de rap fictif pour lequel un site web a été créé dans le cadre d'un projet. Le projet a été réalisé sur le Framework Vuejs.",
      année: 'Réalisé en 2022',
      lien: 'RapFeast'
    },
  ],
  Design: [
    {
      id: 1,
      title: 'Exposition Universelle 2025',
      src: '/img/Exposition-Universelle-2025-Carte-Postal.webp',
      description: "Réalisation d'une affiche et d'une carte postale pour l'exposition universelle 2025. Le projet a été réalisé sur le logiciel Figma.",
      année: 'Réalisé en 2022',
      lien: 'ExpositionUniverselle'
    },
    {
      id: 2,
      title: 'Charte graphique UNSS',
      src: '/img/UNSS-Charte-Graphique.webp',
      description: "Il s'agit d'un projet fictif qui vise à réaliser la charte graphique de l'UNSS, une fédération sportive française. Le projet a été réalisé sur le logiciel InDesign.",
      année: 'Réalisé en 2022',
      lien: 'Chartegraphique'
    },
  ],
  'Travaux personnels': [
    {
      id: 1,
      title: 'Logo Personnel',
      src: '/img/Logo_Site.svg',
      description: "C'est un logo personnel qui représente mes passions et mes aspirations. J'ai choisi de travailler avec Illustrator pour créer un logo qui associe les lettres M et D.",
      année: 'Réalisé en 2023',
      lien: 'LogoPersonnel'
    },
  ],
})
</script>