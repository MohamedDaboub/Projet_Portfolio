<template>
    <section class="max-w-screen-xl m-auto py-10 px-2">
        <div class="flex flex-wrap justify-between items-center">
            <div>
                <h1 class="text-xl md:text-[50px]">PMB Plast</h1>
            </div>
            <div class="flex items-center gap-4">
                <p>Site en Ligne </p>
                <a href="https://pmbplast.fr/">
                    <World class="hover:rotate-180 duration-1000 border-2 p-2 rounded-full"/>
                </a>
            </div>
        </div>
        <div class="py-10">
            <h2 class="text-xl md:text-[36px] py-4">Description</h2>
            <p class="text-lg py-4 ">
                Pendant mon stage de deuxième année en MMI, mon objectif principal était d'entreprendre une refonte complète du site. Cela impliquait non seulement une refonte esthétique en revisitant le design, mais également une intégration harmonieuse des nouvelles fonctionnalités pour améliorer l'expérience utilisateur. Mon engagement dans ce projet m'a permis d'acquérir une expertise approfondie dans la création et l'implémentation de solutions web modernes, renforçant ainsi mes compétences en matière de conception et de développement.
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
                <img class="w-1/2 m-auto " src="@/assets/PMBPlast/Logo_PMB_Plast.svg" alt="Logo PMB Plast">
                <img class="w-1/2 m-auto " src="@/assets/PMBPlast/Couleur.png" alt="Logo PMB Plast">
            </div>
        </div>
    </section>
</template>

<script>
import World from '@/components/icon/World.vue';
import Figma from "@/assets/Figma.webp";
import Illustrator from "@/assets/illustrator.webp";
import WordPress from "@/assets/WordPressFinale.webp"



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
          src: WordPress,
          title: "WordPress",
          style: "shadow-blue-400",
          style1: "mb-12",
    },
    ];
    return { techs };
  },
}
</script>

<style>

</style>
