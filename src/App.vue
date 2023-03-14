<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>

    <Router-View />

</template>

<script>
import { MenuIcon, } from "@heroicons/vue/solid";


export default {
  name: "App",
  components: { MenuIcon,},
};

</script>


