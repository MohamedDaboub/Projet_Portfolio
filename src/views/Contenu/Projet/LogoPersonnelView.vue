<template>
    <section class="max-w-screen-xl m-auto py-10 px-2">
        <div class="flex flex-wrap justify-between items-center">
            <div class="text-center m-auto ">
                <h1 class="text-xl  md:text-[50px]">Logo Mohamed Daboub</h1>
            </div>
        </div>
        <div class="py-10">
            <h2 class="text-xl md:text-[36px] py-4">Description</h2>
            <p class="text-lg py-4 ">
                Pour mon Projet de Portfolio, j'ai décidé de créer un logo personnel.
                pour cree ce logo je me suis basé sur mes initiales M et D qui signifie mon nom et mon prénom.
            </p>
        </div>
        <div class="py-10">
            <h2 class="text-xl md:text-[36px] py-4">Technologies utilisées</h2>
            <div class="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-6 sm:px-0 font-p">
            <div
                v-for="tech in techs"
                :key="tech.id"
                :class="`shadow-md hover:scale-105 duration-500 py-6 rounded-xs ${tech.style}`"
                >
                <img :src="tech.src" :alt="tech.title" :class="`w-20 mx-auto ${tech.style1}`" />
                <p class="my-1 font-poppins text-base">{{ tech.title }}</p>
            </div>
            </div>
        </div>
        <div class="py-10">
            <h2 class="text-xl md:text-[36px] py-4">Galerie d'images</h2>
            <div class="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-6 sm:px-0 items-center">
                <img class="w-4/5 m-auto " src="/img/Logo_Site.svg" alt="Logo Site Web">
            </div>
        </div>
    </section>
</template>

<script>
import World from '@/components/icon/World.vue';

import Illustrator from "@/assets/illustrator.webp";


export default {
  components: {World},
  setup() {
    const techs = [
      {
          id: 2,
          src: Illustrator,
          title: "Illustrator",
          style: "shadow-orange-400",
          style1: "w-20 h-20 mb-10",
    },
    ];
    return { techs };
  },
}
</script>

<style>

</style>