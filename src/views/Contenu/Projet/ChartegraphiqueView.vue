<template>
    <section class="max-w-screen-xl m-auto py-10 px-2">
        <div class="flex flex-wrap justify-between items-center">
            <div>
                <h1 class="text-xl md:text-[50px]">Charte graphique UNSS</h1>
            </div>
            <div class="flex items-center gap-4">
                <p>Voir le Dossier </p>
                <a href="/Chart_graphique_UNSS.pdf" target="_blank" class="">
                    <World class="hover:rotate-180 duration-1000 border-2 p-2 rounded-full"/>
                </a>
            </div>
        </div>
        <div class="py-10">
            <h2 class="text-xl md:text-[36px] py-4">Description</h2>
            <p class="text-lg py-4 ">
                Il s'agit d'un projet fictif qui vise à réaliser la charte graphique de l'UNSS,
                une fédération sportive française. Le projet a été réalisé sur le logiciel InDesign, le Logo à été réalisé sur Illustrator.
                Cette version a été développée autour d’un logo dont l’esprit collectif est celui de tous les sports. 
                le graphisme représente 4 personnes autour de l’association UNSS.
                Pour créer ce logo je me suis basés sur le U de UNSS qui signifie union,union de plusieurs personnes donc 
                nous avons pensé à représenter les personnes autour de cette association.
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
                <img class="w-3/5 m-auto " src="/img/Logo-UNSS.webp" alt="Logo-UNSS">
                <img class="w-full m-auto " src="/img/UNSS-Charte-Graphique.webp" alt="UNSS-Charte-Graphique">
                <img class="w-full m-auto " src="/img/Modeles-UNSS.webp" alt="Modeles-UNSS">
            </div>
        </div>
    </section>
</template>

<script>
import World from '@/components/icon/World.vue';

import Illustrator from "@/assets/illustrator.webp";
import indesign from "@/assets/indesign.webp";
import Figma from "@/assets/Figma.webp";


export default {
  components: {World},
  setup() {
    const techs = [
      {
          id: 1,
          src: Illustrator,
          title: "Illustrator",
          style: "shadow-orange-400",
          style1: "w-20 h-20 mb-10",
    },
    {
          id: 2,
          src: indesign,
          title: "InDesign",
          style: "shadow-red-400",
          style1: "w-20 h-20 mb-10",
        },
        {
          id: 3,
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