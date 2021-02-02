<template>
  <section class="work">
    <h2 class="work__title">Work</h2>
  </section>
</template>

<style scoped>
section {
  background-color: var(--background-color--lighter);
}

.work {
  padding: 100px 20px;
  min-height: 300vh;
}

.work__title {
  font-size: 2rem;
}

@media only screen and (min-width: 992px) {
  .work {
    padding: 100px 12%;
  }
}
</style>
