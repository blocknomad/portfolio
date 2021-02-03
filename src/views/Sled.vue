<template>
  <Project>
    <template v-slot:title>
      Sled
    </template>
    <template v-slot:description>
      Lorem ipsum
    </template>
    <template v-slot:medias>
      <img src="../assets/work/sled-1.png" />
    </template>
  </Project>
</template>

<script>
import Project from "@/views/Project.vue";

export default {
  components: { Project },
};
</script>
