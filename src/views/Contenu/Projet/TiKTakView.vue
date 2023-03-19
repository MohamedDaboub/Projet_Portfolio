<template>
    <section class="max-w-screen-xl m-auto py-10 px-2">
        <div class="flex flex-wrap justify-between items-center">
            <div>
                <h1 class="text-xl md:text-[50px]">TiK•Tak</h1>
            </div>
            <div class="flex items-center gap-4">
                <p>Site en Ligne </p>
                <a href="http://tik-tak.daboub.fr/">
                    <World class="hover:rotate-180 duration-1000 border-2 p-2 rounded-full"/>
                </a>
            </div>
        </div>
        <div class="py-10">
            <h2 class="text-xl md:text-[36px] py-4">Description</h2>
            <p class="text-lg py-4 ">
                TiK•Tak est un site web dédié à la création de montres personnalisées pour ceux qui cherchent à ajouter une touche unique à leur style.
                 Tout comme le Rap Feast, TiK•Tak est un projet ambitieux réalisé dans le cadre d'une Situation d'Apprentissage et d'Évaluation (SAÉ) du programme MMI.
                  Le site offre un outil de personnalisation facile à utiliser qui vous permet de choisir parmi une variété de cadrans, de bracelets, de couleurs
                   et de designs pour créer la montre de vos rêves. Tout comme le site web du festival, le site TiK•Tak est conçu de A à Z en utilisant 
                   les dernières technologies en matière de conception web pour offrir une expérience utilisateur fluide et esthétiquement agréable. Si vous 
                   cherchez une montre qui reflète votre style personnel, ne cherchez plus que TiK•Tak!
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
                <img class="w-1/3 m-auto " src="@/assets/TikTak/Logo-Site-TikTak.webp" alt="">
                <img class="w-full " src="@/assets/TikTak/PageAc.webp" alt="">
            </div>
        </div>
    </section>
</template>

<script>
import World from '@/components/icon/World.vue';
import Figma from "@/assets/Figma.webp";
import Illustrator from "@/assets/illustrator.webp";
import Vuejs from "@/assets/Vuejs.webp";
import SupaBase from "@/assets/SupaBase.webp";

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
          src: SupaBase,
          title: "SupaBase",
          style: "shadow-green-400",
          style1: "mb-10",
    },
    ];
    return { techs };
  },
}
</script>

<style>

</style>