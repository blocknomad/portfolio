<template>
  <Project :medias="['elliottro-1.png', 'elliottro-2.png', 'elliottro-3.png']">
    <template v-slot:title>
      Elliottro
    </template>
    <template v-slot:summary>
      Cryptocurrency charts screener.
    </template>
    <template v-slot:about>
      This is my first <i>indiependent</i> project. Its aim is to help
      cryptocurrency traders find good trading opportunities offering them the
      ability to screen all trading pairs from their exchanges in search for
      specific chart patterns that are known for statistically reversing or
      continuing price action trends. The project is currently undergoing
      improvements on the pattern-matching algorithm and soon is going to be
      launched.
      <br />
      <br />
      As it's an independent project, I've been responsible for all the
      development, design and research associated to it.
    </template>
    <template v-slot:technologies>
      <li>Meteor.js</li>
      <li>Python</li>
      <li>MongoDB</li>
      <li>React.js</li>
      <li>Material Design</li>
      <li>HTML Canvas</li>
      <li>Dynamic Time Warping</li>
    </template>
  </Project>
</template>

<script>
import Project from "@/views/Project.vue";

export default {
  components: { Project },
};
</script>
