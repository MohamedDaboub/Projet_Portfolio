<template>
    <div name="experience" class="md:my-16">
      <div class="max-w-screen-xl mx-auto py-10 flex flex-col justify-center  text-white">
        <div>
          <p class="md:text-3xl text-xl  font-bold font-Iceberg">
            Les technologies que j'utilise
          </p>
          <p class="py-6 ">Voici les technologies avec lesquelles j'ai travaillé</p>
        </div>
  
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
    </div>
  </template>
  
<script>
import html from "../../assets/html.webp";
import css from "../../assets/css.webp";
import reactImage from "../../assets/react.webp";
import github from "../../assets/github.webp";
import FireBase from "../../assets/FirebaseFinale.webp";
import tailwind from "../../assets/tailwind.webp";
import Vuejs from "../../assets/Vuejs.webp";
import SupaBase from "../../assets/SupaBase.webp";
import openstreetmap from "../../assets/OpenStreetMap.webp";
import Figma from "../../assets/Figma.webp";
import Illustrator from "../../assets/Illustrator.webp";
import WordPress from "../../assets/WordPressFinale.webp";
import Unreal_Engine from "../../assets/UnrealEngineFinale.webp";

export default {
  name: "Experience",
  data() {
    return {
      techs: [
        {
          id: 1,
          src: Figma,
          title: "Figma",
          style: "shadow-red-400",
          
        },
        {
          id: 2,
          src: html,
          title: "HTML",
          style: "shadow-orange-800",
          style1: "w-20 h-20 mb-10",
        },
        {
          id: 3,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
          style1: "w-20 h-20 mb-10",
        },
        {
          id: 4,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
          style1: "w-20 h-20 mb-10",
        },
        {
          id: 5,
          src: WordPress,
          title: "WordPress",
          style: "shadow-blue-400",
          style1: "w-20 h-20 mb-10",
        },
        {
          id: 6,
          src: Illustrator,
          title: "Illustrator",
          style: "shadow-orange-400",
          style1: "w-20 h-20 mb-10",
        },
        {
          id: 7,
          src: Vuejs,
          title: "VueJs",
          style: "shadow-green-400",
          style1: "mb-12",
        },
        {
          id: 8,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
          style1: "w-20 h-20 mb-10",
        },
        {
          id: 9,
          src: FireBase,
          title: "FireBase",
          style: "shadow-orange-400",
          style1: "mb-4",
        },
        {
          id: 10,
          src: reactImage,
          title: "React",
          style: "shadow-blue-600",
          style1: "w-20 h-20 mb-10",
        },
        {
          id: 11,
          src: SupaBase,
          title: "SupaBase",
          style: "shadow-green-400",
          style1: "mb-10",
        },
        {
          id: 12,
          src: openstreetmap,
          title: "Open Street Map",
          style: "shadow-green-400",
          style1: "mb-10",
        },
        {
          id: 13,
          src: Unreal_Engine,
          title: "Unreal Engine",
          style: "shadow-white",
          style1: "w-20 h-20 mb-10",
        },
      ],
    };
  },
};
</script>