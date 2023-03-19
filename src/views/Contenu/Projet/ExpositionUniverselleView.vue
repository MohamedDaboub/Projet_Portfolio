<template>
    <section class="max-w-screen-xl m-auto py-10 px-2">
        <div class="flex flex-wrap justify-between items-center">
            <div class="text-center m-auto">
                <h1 class="text-xl md:text-[50px]">Exposition Universelle 2025</h1>
            </div>
        </div>
        <div class="py-10">
            <h2 class="text-xl md:text-[36px] py-4">Description</h2>
            <p class="text-lg py-4 ">
                Ces réalisations ont été produite lors d'un exercice pédagogique. Ces affiches répondent à l'offre de l'Exposition Universelle 2025
                L'objectif de ce projet était d'imaginer un concept, de définir une iconographie et de mettre en page une affiche et une carte postale
                pour l'Exposition Universelle 2025.
                pour faire cet affiche on a choisi le thème de la Réalité augmentée et le thème de la Medcine.
                pour réaliser cette affiche on a utilisé le logiciel Figma.
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
                <div>
                    <img class="w-full m-auto " src="/img/Exposition-Universelle-2025-Carte-Postal.webp" alt="Carte postale Exposition-Universelle-2025">
                    <p class="text-center py-5">Carte postale</p>
                </div>
                <div>
                    <img class="w-4/5 m-auto " src="/img/Exposition-Universelle-2025-Affiche.webp" alt="Affiche Exposition-Universelle-2025">
                    <p class="text-center py-5">Affiche</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import World from '@/components/icon/World.vue';
import Figma from "@/assets/Figma.webp";

export default {
  components: {World},
  setup() {
    const techs = [
      {
          id: 1,
          src: Figma,
          title: "Figma",
          style: "shadow-red-400",
          
      },
    ];
    return { techs };
  },
}
</script>

<style>

</style>