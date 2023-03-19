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
            <p class="text-lg py-4 ">Aide à la réussite nous a été proposé en tant que projet collectif de troisième semestre dans le cadre du BUT.
                Pour la première fois, nous avions un commanditaire réel et le site a été notre premier projet en ligne : ce fut donc mon premier projet professionel.
                De plus, nous avons dû nous attribuer des rôles bien spécifiques au sein de notre groupe.
                J’ai donc assumé les rôles de développeur avec Ludovic Faye tandis que Maxime Mercier était communiquant et Florentin Demortiere et Fabio Gafforelli sont les designer du projet.
                Nous avons donc travaillé en équipe pour réaliser ce projet.
            </p>
            <p class="text-lg py-4 ">
                Nous devions réaliser une plateforme d'aide à la réussite pour les élèves.
                Nous avions également comme contraintes de développer le site sous le CMS Wordpress afin que notre commanditaire puisse assurer la maintenance après livraison.
                Nous nous sommes appuyés d'un thème Astra.
                Nous avons également dû réaliser un logo et une charte graphique pour le site.
            </p>
            <p class="text-lg py-4 ">
                Le projet s'est achevé le vendredi 13 Janvier lors de notre soutenance finale qui s'est bien déroulée et qui a validée 3 mois de travail. À ce jour,
                ce site reste une grande fierté pour moi, de part le fait que nous avons réussi à 
                développer entièrement le site dans les délais et d'autre part car notre commanditaire en a été très satisfait.
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
                <img class="w-1/3 m-auto " src="@/assets/TikTak/Logo-site-TikTak.webp" alt="">
                <img class="w-full " src="@/assets/TikTak/PageAC.webp" alt="">
            </div>
        </div>
    </section>
</template>

<script>
import World from '@/components/icon/World.vue';
import Figma from "@/assets/Figma.webp";
import Illustrator from "@/assets/Illustrator.webp";
import Vuejs from "@/assets/Vuejs.webp";

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
    ];
    return { techs };
  },
}
</script>

<style>

</style>