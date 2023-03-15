<template>
  <section class="h-screen flex flex-wrap justify-center m-auto py-8">
    <section id="Accueil" class="flex justify-center m-auto items-center flex-wrap">
      <div class="text-white w-full lg:w-1/2 pr-10">
        <h1 class="md:text-4xl text-2xl font-Iceberg mb-4">Mohamed Daboub</h1>
        <h4 class="text-2xl font-poppins mb-6"><span class="typing text-red-500"></span></h4>
      </div>
      <div class="w-full lg:w-1/2 flex justify-center">
        <img class="w-3/4 shadow-lg" src="../../assets/image149.webp" alt="">
      </div>
    </section>
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
  
  