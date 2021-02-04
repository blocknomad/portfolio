<template>
  <Project
    :medias="[
      { path: 'sled-1.png', alt: 'Sled website hero' },
      { path: 'sled-2.png', alt: 'Sled motto video' },
      { path: 'sled-3.png', alt: 'Sled blog posts cards' },
      { path: 'sled-4.png', alt: 'Sled blog' },
    ]"
  >
    <template v-slot:title>
      Sled
    </template>
    <template v-slot:summary>
      Website and blog developed for the launch of the new brand of a fintech
      startup.
    </template>
    <template v-slot:about>
      These projects were developed as a Front End engineer at Sled. I acted
      closely to marketing and product teams to assess the technical viability
      of features and help them fill up UI gaps left by the designer, besides
      effectively implementing the website and blog.
      <br />
      <br />
      Our major goals were to deliver a highly performant website and to
      bootstrap the company's design system building it using Web Components
      with Bit powering its distribution. We reached those goals by achieving a
      95 Lighthouse speed score and conceiving the basic UI components that were
      used to rebuild one of the company's dashboard later on.
    </template>
    <template v-slot:technologies>
      <li>Vue.js</li>
      <li>Web Components</li>
      <li>Design system</li>
      <li>Responsive Web Development</li>
      <li>A/B Testing</li>
      <li>SEO</li>
      <li>Bit</li>
      <li>TypeScript</li>
      <li>Node.js</li>
      <li>FaunaDB</li>
      <li>Ghost CMS</li>
      <li>Lighthouse</li>
      <li>Webpack</li>
      <li>Nginx</li>
      <li>Docker</li>
      <li>Gitlab CI/CD</li>
    </template>
  </Project>
</template>

<script>
import Project from "@/views/Project.vue";

export default {
  components: { Project },
};
</script>
