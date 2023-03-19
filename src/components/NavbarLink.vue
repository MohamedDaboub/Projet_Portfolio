<template>
  <header class="bg-Default/me/back border-b-2 border-b-white border-solid sticky top-0 z-10">
    <a href="#Accueil" class="sr-only focus:not-sr-only text-lg text-text"> Passez au contenu </a>
    <nav class="lg:flex items-center lg:justify-center lg:py-8 mx-7 py-[18px] ">
      <div class="items-center md:py-[18px] flex justify-end">
        <span class="text-3xl cursor-pointer lg:hidden block w-8 h-8 text-white z-20">
        <MenuIcon class=" text-text"  aria-controls="menu"
          :aria-expanded="menuOuvert"
          @click="menuOuvert = !menuOuvert">
        </MenuIcon>
        <span class="sr-only ">Menu</span>
        </span>
      </div>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
      <ul v-if="menuOuvert" id="menu" class="lg:hidden text-xl mx-6 text-center text-white font-Iceberg ">
        <li v-for="item in menuItems" :key="item.id" class="">
          <a @click="scroll(item.id)">{{ item.title }}</a>
        </li>
      </ul>
      </transition>
      <ul class="lg:flex gap-6 lg:items-center text-xl text-white mx-6 py-[1.4px] hidden cursor-pointer font-Iceberg">
        <li v-for="item in menuItems" :key="item.id" class="Barlink">
          <a @click="scroll(item.id)">{{ item.title }}</a>
        </li>
      </ul>
    </nav>
  </header>   
</template>
<script>
import { MenuIcon, } from "@heroicons/vue/solid";

export default {
  methods: {
      scroll: function (id) {
        if (this.$route.path === "/") {
          document.getElementById(id).scrollIntoView({ behavior: "smooth" });
        } else {
          this.$router.push({ path: "/",   });
        }
      },
    },
  components: {MenuIcon},
  data() {
    return {
      menuOuvert: false,
      menuItems: [
        { id: 'Accueil', title: 'Accueil' },
        { id: 'APropos', title: 'À Propos' },
        { id: 'Portfolio', title: 'Projets' },
        { id: 'Experience', title: 'Compétences' },
        { id: 'Contact', title: 'Contact' },
      ],
    };
  },
  beforeMount(){
    this.$router.afterEach(() => (this.menuOuvert = false));
  },
};
</script>

<style scoped>
.Barlink {
position: relative;
padding: 0 0;
margin: 0 0.5rem;
color: white;
text-decoration: none;
}
.Barlink::after {
content: '';
position: absolute;
left: 50%;
bottom: 0;
transform: translateX(-50%) scaleX(0);
transform-origin: 50% 50%;
width: 100%;
height: 2px;
background-color: rgba(255,255,255,0.8);
transition: transform 250ms;
}
.Barlink:hover::after {
transform: translateX(-50%) scaleX(1);
}
</style>