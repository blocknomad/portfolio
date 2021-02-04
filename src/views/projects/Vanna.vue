<template>
  <Project
    :medias="[
      { path: 'vanna-1.png', alt: 'Vanna dashboard home' },
      { path: 'vanna-2.png', alt: 'Vanna subscription creation modal' },
      {
        path: 'vanna-3.png',
        alt: 'Vanna earnings and expenses heatmap calendar',
      },
      { path: 'vanna-4.png', alt: 'Vanna settings page' },
    ]"
  >
    <template v-slot:title>
      Vanna
    </template>
    <template v-slot:summary>
      Subscriptions management and automatic electronic invoices issuance app.
      <a href="https://vanna.app/">See it online.</a>
    </template>
    <template v-slot:about>
      As a Full Stack engineer, I participated actively on new architectural and
      strategical decisions together with the company’s managers, implemented
      the initial set of features and managed the onboarding of new team members
      on the project. Despite it goes beyong my area of expertise, I have also
      designed the app's UI.
    </template>
    <template v-slot:technologies>
      <li>Meteor.js</li>
      <li>MongoDB</li>
      <li>React.js</li>
      <li>TypeScript</li>
      <li>Styled Components</li>
      <li>Cypress</li>
      <li>Sentry</li>
    </template>
  </Project>
</template>

<script>
import Project from "@/views/Project.vue";

export default {
  components: { Project },
};
</script>
