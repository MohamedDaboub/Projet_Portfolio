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
              <a href=""><Linkdin/></a>
            </li>
            <li >
              <a href="" ><Github/></a>
            </li>
            <li >
              <a href=""><Instagram/></a>
            </li>
            <li >
              <a href=""><Discord/></a>
            </li>
            <li >
              <a href=""><Mail/></a>
            </li>
            <li >
              <a href="" download="" ><User/></a>
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