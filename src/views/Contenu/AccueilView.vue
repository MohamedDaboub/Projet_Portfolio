<template>
  <section class="h-screen    py-8">
    <div id="Accueil" class=" m-auto  ">
      <div class="text-white w-full  pr-10">
        <h1 class="md:text-4xl text-2xl font-Iceberg mb-4">Mohamed <span>Daboub</span></h1>
        <div class="m-auto flex  justify-center ">
          <p>est un étudiant passionné par la création de sites Web et les technologies de développement. Actuellement en deuxième année de MMI (Métiers du Multimédia et de l'Internet), il se spécialise en développement</p>
          <h4 class="text-2xl font-poppins mb-6"><span class="typing  "></span></h4>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
  import Typed from 'typed.js';
  export default {
    name: "Accueil",
    mounted() {
      const typed = new Typed('.typing', {
        strings: ['Webdesigner', 'Développeur front-end', 'Développeur jeux vidéo'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
      });
    }
  }
  </script>
  
  