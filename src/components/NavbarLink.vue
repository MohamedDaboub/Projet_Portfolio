<template>
    <header class=" bg-Default/me/back  border-b-2 border-b-white border-solid sticky top-0 z-10   ">
        <nav class=" flex items-center justify-end lg:justify-center lg:py-8 mx-7 py-[18px]">
          <div class="">
            <span class="text-3xl cursor-pointer lg:hidden block w-8 h-8 text-white  z-20">
              <MenuIcon class=" text-text"  aria-controls="menu"
                :aria-expanded="menuOuvert"
                @click="menuOuvert = !menuOuvert">
              </MenuIcon>
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
          <ul  id="menu" v-if="menuOuvert" class="lg:hidden text-xl  mx-6  text-center text-white font-Iceberg" >
            <li v-for="item in menuItems" :key="item.id">
              <!-- <RouterLink :to="'#' + item.id">{{ item.title }}</RouterLink> -->
              <a @click="scroll(item.id)">{{ item.title }}</a>
            </li>        
          </ul>  
        </transition>
          <ul class="lg:flex  gap-6 lg:items-center text-xl text-white mx-6 py-[1px] hidden cursor-pointer font-Iceberg" >
            <li v-for="item in menuItems" :key="item.id">
              <!-- <RouterLink :to="'/#' + item.id">{{ item.title }}</RouterLink> -->
                <!-- <a :href="'#' + item.id">{{ item.title }}</a> -->
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
        { id: 'Portfolio', title: 'Portfolio' },
        { id: 'Experience', title: 'Experience' },
        { id: 'Contact', title: 'Contact' },
      ],
    };
  },
  beforeMount(){
    this.$router.afterEach(() => (this.menuOuvert = false));
  },
};
</script>

<style>

</style>