<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
  <div class=" flex ">
    <NavbarAside/>
    <main class="flex-1">
    <RouterView />
    </main>
  </div>
</template>

<script>

import NavbarAside from "./components/NavbarAside.vue"


export default {
  name: "App",
  components: { NavbarAside,},
};

</script>


