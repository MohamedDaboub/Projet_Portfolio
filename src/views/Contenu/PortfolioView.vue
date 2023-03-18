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
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-black py-6">
                <div v-for="project in projects" :key="project.id" :to="'/Projet/' + project.id" class="bg-slate-100 p-5 rounded-2xl sm:w-[360px] w-full border-2 border-black" style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);">
                <img :src="project.src" alt="" class="w-full h-64 object-cover object-center border-2 border-black">
                <div class="px-1 py-4">
                  <h2 class="font-bold text-xl mb-2 font-Iceberg ">{{ project.title }}</h2>
                  <p class="text-gray-700 text-base">{{ project.description }}</p>
                </div>
                <div class="px-1 py-4">
                  <div class="flex justify-between">
                    <div class="flex flex-col">
                      <span class="text-gray-700 font-bold">{{ project.Language }}</span>
                      <span class="text-gray-700">{{ project.année }}</span>
                    </div>
                    <span class="text-gray-700">{{ project.FaceRealisation }}</span>
                  </div>
                  <div class="flex justify-end mt-4">
                    <a :href="project.lien" class="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full">Voir le projet</a>                 
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
      title: 'Does drinking coffee make you smarter?',
      date: '5h ago',
      commentCount: 5,
      shareCount: 2,
      ron: 'ron',
      src: '/src/assets/css.png',
      description: 'Lorem ipsum dolor si',
      année: '2021',
      Language: 'React',
      FaceRealisation: 'Front-end',
      lien: 'Projet'

    },
    {
      id: 2,
      title: "So you've bought coffee... now what?",
      date: '2h ago',
      commentCount: 3,
      shareCount: 2,
      ron: 'ron',
      description: 'Lorem ipsum dolor si',
      année: '2021',
      Language: 'React',
      FaceRealisation: 'Front-end',
      lien: 'Projet2'
    },
    {
      id: 3,
      title: "So you've bought coffee... now what?",
      date: '2h ago',
      commentCount: 3,
      shareCount: 2,
      ron: 'ron',
      description: 'Lorem ipsum dolor si',
      année: '2021',
      Language: 'React',
      FaceRealisation: 'Front-end',
      lien: 'Projet3'
    },
  ],
  Design: [
    {
      id: 1,
      title: 'Is tech making coffee better or worse?',
      date: 'Jan 7',
      commentCount: 29,
      shareCount: 16,
      ron: 'ron',
      description: 'Lorem ipsum dolor si',
      année: '2021',
      Language: 'React',
      FaceRealisation: 'Front-end',
      lien: 'Projet'
    },
    {
      id: 2,
      title: 'The most innovative things happening in coffee',
      date: 'Mar 19',
      commentCount: 24,
      shareCount: 12,
      ron: 'ron',
      description: 'Lorem ipsum dolor si',
      année: '2021',
      Language: 'React',
      FaceRealisation: 'Front-end',
      lien: 'Projet'
    },
  ],
  'Travaux personnels': [
    {
      id: 1,
      title: 'Ask Me Anything: 10 answers to your questions about coffee',
      date: '2d ago',
      commentCount: 9,
      shareCount: 5,
      ron: 'ron',
      description: 'Lorem ipsum dolor si',
      année: '2021',
      Language: 'React',
      FaceRealisation: 'Front-end',
      lien: 'Projet'
    },
  ],
})
</script>
        