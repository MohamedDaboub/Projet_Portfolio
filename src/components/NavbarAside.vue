<template>
    <aside class="bg-Default/me/head border-r-2 border-solid border-white ">
        <header class="border-b-2 border-solid border-white p-4  sticky top-0 z-10 ">
          <div class="flex items-center  w-10 md:w-20">
            <RouterLink to="/">
              <img src="../../public/icon/Logo_Site.svg" class="md:w-20" alt="Logo du site">
            </RouterLink>
          </div>
        </header>
        <nav class="p-2 text-center sticky top-[15%]  z-10 ">
          <ul>
            <li class="hover:animate-[spin_1000ms_1] ">
              <a href="https://www.linkedin.com/in/mohamed-daboub/" class=""><Linkdin class="py-3 w-8 md:w-10 m-auto "/></a>
            </li>
            <li class="hover:animate-[spin_1000ms_1]">
              <a href="https://github.com/MohamedDaboub" class=""><Github class="py-3 w-8 md:w-10 m-auto"/></a>
            </li>
            <li class="hover:animate-[spin_1000ms_1]">
              <a href="https://www.instagram.com/daboub.dev/" class=""><Instagram class="py-3 w-8 md:w-10 m-auto"/></a>
            </li>
            <li class="hover:animate-[spin_1000ms_1]">
              <a href="https://discord.com/channels/Mohamed.D#6373" class=""><Discord class="py-3 w-8 md:w-10 m-auto"/></a>
            </li>
            <li class="hover:animate-[spin_1000ms_1]">
              <a href="mailto:contact@daboub.fr" class=""><Mail class="py-3 w-8 md:w-10 m-auto"/></a>
            </li>
            <li class="hover:animate-[spin_1000ms_1]">
              <a href="/CV.pdf" download="Mohamed_Daboub_CV" class=""><User class="py-3 w-8 md:w-10 m-auto"/></a>
            </li>
          </ul>
        </nav>
    </aside>
</template>
<script>
export default {
  components: {Linkdin,Discord,Github,Mail,User,Instagram},
}
import Linkdin from "./icon/Linkdin.vue" 
import Github from "./icon/Github.vue" 
import Discord from "./icon/Discord.vue" 
import Mail from "./icon/Mail.vue" 
import User from "./icon/User.vue"  
import Instagram from "./icon/Instagram.vue" 
</script>
<style>
</style>