<template>
  <section id="Accueil">
    <div class="md:py-4 py-8 md:px-10 px-4">
      <h1 class="md:w-1/3 lg:text-4xl text-2xl py-2">
        Mohamed <span>Daboub</span>
      </h1>
      <h3 class="md:w-1/2 w-full text-xl md:text-2xl py-1">Webdesigner & Développeur front-end & Développeur jeux vidéo</h3>
      <p class="md:py-1 py-4">étudiant passionné par la création de sites Web et les technologies de développement. 
        Actuellement en deuxième année de MMI (Métiers du Multimédia et de l'Internet).</p>
      <div class="flex justify-center">
        <a href="#aPropos" class="flex text-center m-auto my-12 fill-white light:fill-black  motion-safe:animate-bounce">
          <flech class="flex text-center m-auto my-12 fill-white light:fill-black  motion-safe:animate-bounce" />
        </a>
      </div>
    </div>
    
  </section>
</template>  
<script>
import flech from "@/components/icon/Flechbas.vue"

export default {
    name: "App",
    components: { flech, },
};
</script>