<template>
  <section class="work">
    <div class="work__content">
      <h2 class="work__content__title">Work</h2>
      <div class="work__content__cards">
        <div
          :class="
            `work__content__cards__item ${
              currentWork === work.name
                ? 'work__content__cards__item--active'
                : ''
            }`
          "
          @click="currentWork = work.name"
          v-for="work in works"
          :key="work.name"
        >
          <img :src="require(`../assets/work/${work.img}`)" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

const works = [
  {
    name: "sled",
    img: "sled-logo.svg",
  },
  {
    name: "vanna",
    img: "vanna-logo.png",
  },
  {
    name: "elliottro",
    img: "elliottro-logo.svg",
  },
  {
    name: "appetize",
    img: "appetize-logo.png",
  },
];

export default {
  setup() {
    const currentWork = ref("sled");
    return { currentWork, works };
  },
};
</script>

<style scoped>
.work {
  position: relative;
  padding: 100px 20px;
  background-color: var(--background-color--lighter);
  display: flex;
  justify-content: center;
}

.work__content {
  position: relative;
  z-index: 2;
  max-width: 1700px;
}

.work__content__title {
  font-size: 2.4rem;
}

.work__content__cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
  row-gap: 15px;
  margin-top: 5rem;
}

.work__content__cards__item {
  background-color: var(--background-color--contrast);
  border-radius: 10px;
  padding: 20px 40px;
  opacity: 0.5;
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
  max-height: 70px;
}

@media only screen and (min-width: 992px) {
  .work {
    padding: 200px 12%;
  }

  .work__content__cards {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
