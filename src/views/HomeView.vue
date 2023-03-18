<template>
  <div class="px-4 pb-5">
    <div id="Accueil">
        <Accueil  />
    </div>
    <div id="APropos" >
        <Apropos />
    </div>
    <div id="Portfolio">
        <Portfolio />
    </div>
    <div id="Experience" >
        <Experience />
    </div>
    <div id="Contact">
        <Contact />
    </div>
  </div>
</template>

<script>
import Accueil from "./Contenu/AccueilView.vue"
import Apropos from "./Contenu/AProposView.vue"
import Portfolio from "./Contenu/PortfolioView.vue"
import Experience from "./Contenu/ExperienceView.vue"
import Contact from "./Contenu/ContactView.vue"

export default {
    components: {Accueil,Apropos,Portfolio,Experience,Contact,},
}
</script>

<style>

</style>