<template>
  <Project
    :medias="[
      { path: 'sled-1.png', type: 'image' },
      { path: 'sled-2.png', type: 'image' },
    ]"
  >
    <template v-slot:title>
      Sled
    </template>
    <template v-slot:summary>
      Lorem ipsum
    </template>
    <template v-slot:medias>
      <img src="../assets/work/sled-1.png" />
    </template>
    <template v-slot:about>
      Lorem ipsum
    </template>
    <template v-slot:technologies>
      Lorem ipsum
    </template>
  </Project>
</template>

<script>
import Project from "@/views/Project.vue";

export default {
  components: { Project },
};
</script>
