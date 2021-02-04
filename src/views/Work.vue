<template>
  <section class="work">
    <div class="work__content">
      <h2 class="work__content__title">Work</h2>
      <div class="work__content__cards">
        <div
          :class="
            `work__content__cards__item ${
              currentProject === project.name
                ? 'work__content__cards__item--active'
                : ''
            }`
          "
          @click="currentProject = project.name"
          v-for="project in projects"
          :key="project.name"
        >
          <img :src="require(`../assets/projects/${project.img}`)" :alt="project.alt" />
        </div>
      </div>
      <Sled v-if="currentProject === 'sled'" />
      <Elliottro v-else-if="currentProject === 'elliottro'" />
      <Vanna v-else-if="currentProject === 'vanna'" />
      <Appetize v-else-if="currentProject === 'appetize'" />
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

import Sled from "@/views/projects/Sled.vue";
import Vanna from "@/views/projects/Vanna.vue";
import Elliottro from "@/views/projects/Elliottro.vue";
import Appetize from "@/views/projects/Appetize.vue";

const projects = [
  {
    name: "sled",
    img: "sled-logo.svg",
    alt: "Sled logo",
  },
  {
    name: "elliottro",
    img: "elliottro-logo.svg",
    alt: "Elliottro logo",
  },
  {
    name: "vanna",
    img: "vanna-logo.png",
    alt: "Vanna logo",
  },
  {
    name: "appetize",
    img: "appetize-logo.png",
    alt: "Appetize logo",
  },
];

export default {
  components: { Sled, Vanna, Elliottro, Appetize },
  setup() {
    const currentProject = ref("sled");
    return { currentProject, projects };
  },
};
</script>

<style scoped>
.work {
  position: relative;
  padding: 100px 20px 40px;
  background-color: var(--background-color--lighter);
  display: flex;
  justify-content: center;
}

.work__content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
}

.work__content__cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  margin-top: 5rem;
}

.work__content__cards__item {
  background-color: var(--background-color--contrast);
  border-radius: 10px;
  padding: 30px 40px;
  opacity: 0.6;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.work__content__cards__item:hover,
.work__content__cards__item--active {
  opacity: 1;
}

.work__content__cards__item img {
  max-width: 100%;
  max-height: 40px;
}

@media only screen and (min-width: 992px) {
  .work {
    padding: 200px 12% 100px;
  }

  .work__content__cards {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
