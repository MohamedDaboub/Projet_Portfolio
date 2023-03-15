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
  <FooterView/>
</template>

<script>

import NavbarAside from "./components/NavbarAside.vue"
import FooterView from "./components/FooterView.vue"


export default {
  name: "App",
  components: { NavbarAside,FooterView},
};

</script>


