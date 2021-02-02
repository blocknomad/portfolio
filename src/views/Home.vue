<template>
  <Intro />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Intro from "@/views/Intro.vue";

export default defineComponent({
  name: "Home",
  components: {
    Intro
  }
});
</script>
