<template>
  <Project
    :medias="[
      { path: 'appetize-1.png', alt: 'Appetize website hero' },
      { path: 'appetize-2.png', alt: 'Appetize contact form' },
      { path: 'appetize-3.png', alt: 'Appetize partners grid' },
      {
        path: 'appetize-4.png',
        alt: 'Appetize interactive infographic that explains its solution',
      },
    ]"
  >
    <template v-slot:title>
      Appetize
    </template>
    <template v-slot:summary>
      Website developed for a digital commerce platform for food, beverage and
      retail company.
    </template>
    <template v-slot:about>
      As a Front End engineer, I have implemented the website's pages using
      Wordpress WYSIWYG features, overriding styles with CSS and using plugins
      when needed.
    </template>
    <template v-slot:technologies>
      <li>Wordpress</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Responsive Web Development</li>
      <li>JQuery</li>
    </template>
  </Project>
</template>

<script>
import Project from "@/views/Project.vue";

export default {
  components: { Project },
};
</script>
