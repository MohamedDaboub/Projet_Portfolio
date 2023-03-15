<template>
  <div name="portfolio">
    <div class="max-w-screen-xl mx-auto py-10 flex flex-col justify-center  text-white">
      <div>
        <h2 class="font-Iceberg text-3xl mb-4">Portfolio</h2>
        <p></p>
      </div>
    </div>
    <Tab v-model="selectedTab">
      <div v-for="(items, category) in categories" :key="category">
        <TabList :key="category">
          <Tab :class="{ '': true }">{{ category }}</Tab>
        </TabList>
        <TabPanels :key="category">
          <TabPanel :key="idx" v-for="(item, idx) in items">
            <ul>
              <li :key="item.id">
                <div>
                  <div>
                    <img :src="item.src" alt="" />
                    <div>
                      <h1>{{ item.title }}</h1>
                      <p>{{ item.description }}</p>
                    </div>
                    <div>
                      <div>
                        <div>
                          <span>{{ item.Language }}</span>
                          <span>{{ item.anne }}</span>
                        </div>
                        <span>{{ item.FaceRealisation }}</span>
                      </div>
                      <div>
                        <a :href="item.lien"><img :src="World" alt="" /></a> 
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </TabPanel>
        </TabPanels>
      </div>
    </Tab>
  </div>
</template>
<script>
import { Tab, TabList, TabPanel, TabPanels } from '@headlessui/vue';
import { ref } from 'vue';
// import Project1 from "../assets/portfolio/1stproject.png";
  
  export default {
    components: {
      Tab,
      TabList,
      TabPanel,
      TabPanels,
    },
    data() {
      return {
        selectedTab: 'Développement',
        categories: {
          Développement: [
            {
              id: 1,
              src: 'Project1',
              title: "L'évolution du féminisme",
              lien: 'https://evofeminisme.daboub.fr/', 
              Language: 'HTML/CSS',
              description: "Site web réalisé l film Black Panther",
              FaceRealisation: "Projet S1 - BUT MMI ",
              anne: '1er année de BUT MMI',
            },
          ],
          Design: [
            {
              id: 1,
              src: 'Project1',
              title: "L'évolution du féminisme",
              lien: 'https://evofeminisme.daboub.fr/', 
              Language: 'HTML/CSS',
              description: "Site web réalisé l film Black Panther",
              FaceRealisation: "Projet S1 - BUT MMI ",
              anne: '1er année de BUT MMI',
            },
          ],
        },
        // World: 'https://cdn.onlinewebfonts.com/svg/img_304097.svg',
      };
    },
  };
</script>