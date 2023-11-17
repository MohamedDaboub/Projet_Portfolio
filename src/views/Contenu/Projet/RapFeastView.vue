<template>
    <section class="max-w-screen-xl m-auto py-10 px-2">
        <div class="flex flex-wrap justify-between items-center">
            <div>
                <h1 class="text-xl md:text-[50px]">Rap Feast</h1>
            </div>
            <div class="flex items-center gap-4">
                <p>Site en Ligne </p>
                <a href="http://rapfeast.daboub.fr/">
                    <World class="hover:rotate-180 duration-1000 border-2 p-2 rounded-full"/>
                </a>
            </div>
        </div>
        <div class="py-10">
            <h2 class="text-xl md:text-[36px] py-4">Description</h2>
            <p class="text-lg py-4 ">
                Rap Feast est un site web fictif créé dans le cadre d'une Situation d'Apprentissage et d'Évaluation (SAÉ) du programme MMI.
                 Ce site web est dédié à un festival qui se déroule à Besançon et offre une expérience immersive pour tous les amateurs de musique
                  hip-hop et de culture urbaine. Ce projet ambitieux visait à développer les compétences des étudiants en matière de conception web, 
                  en utilisant les technologies apprises en cours. Le résultat final est un site web dynamique, conçu de A à Z, offrant une navigation 
                  facile et une présentation esthétique de toutes les informations liées au festival. Si vous êtes un fan de musique hip-hop et que vous 
                  cherchez une expérience immersive, ne manquez pas le Rap Feast!
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
                <img class="w-1/2 m-auto " src="/img/Logo-RapFeast.webp" alt="Logo RapFeast">
                <img class="w-1/2 " src="/img/Couleur-RapFeast.webp" alt="Couleur RapFeast">
            </div>
        </div>
    </section>
</template>

<script>
import World from '@/components/icon/World.vue';
import Figma from "@/assets/Figma.webp";
import Illustrator from "@/assets/illustrator.webp";
import Vuejs from "@/assets/Vuejs.webp";
import FireBase from "@/assets/FirebaseFinale.webp";

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
      {
          id: 2,
          src: Illustrator,
          title: "Illustrator",
          style: "shadow-orange-400",
          style1: "w-20 h-20 mb-10",
    },
    {
          id: 3,
          src: Vuejs,
          title: "VueJs",
          style: "shadow-green-400",
          style1: "mb-12",
    },
    {
          id: 4,
          src: FireBase,
          title: "FireBase",
          style: "shadow-orange-400",
          style1: "mb-4",
    },
    ];
    return { techs };
  },
}
</script>

<style>

</style>
