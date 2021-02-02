<template>
  <Intro />
  <Work />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Intro from "@/views/Intro.vue";
import Work from "@/views/Work.vue";

export default defineComponent({
  name: "Home",
  components: {
    Intro,
    Work,
  }
});
</script>
