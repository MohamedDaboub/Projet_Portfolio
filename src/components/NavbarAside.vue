<template>
    <aside >
        <header >
          <div >
            <RouterLink to="/">
              <img src=""  alt="">
            </RouterLink>
          </div>
        </header>
        <nav >
          <ul>
            <li >
              <a href="https://www.linkedin.com/in/mohamed-daboub/"><Linkdin/></a>
            </li>
            <li >
              <a href="https://github.com/MohamedDaboub" ><Github/></a>
            </li>
            <li >
              <a href="https://www.instagram.com/daboub.dev/"><Instagram/></a>
            </li>
            <li >
              <a href="https://discord.com/channels/Mohamed.D#6373"><Discord/></a>
            </li>
            <li >
              <a href="mailto:mohamed@daboub.fr"><Mail/></a>
            </li>
            <li >
              <a href="/CV.pdf" download="" ><User/></a>
            </li>
          </ul>
        </nav>
    </aside>
</template>
  
<script>
export default {
  components: {Linkdin,Discord,Github,Mail,User,Instagram},
}
import Linkdin from "./icons/Linkdin.vue" 
import Github from "./icons/Github.vue" 
import Discord from "./icons/Discord.vue" 
import Mail from "./icons/Mail.vue" 
import User from "./icons/User.vue" 
import Instagram from "./icons/Instagram.vue" 
</script>
<style>  
</style>