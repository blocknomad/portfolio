<template>
  <router-view />
</template>

<style>
body {
  background-color: var(--background-color--lighter);
  color: white;
  scroll-behavior: smooth;
  margin: 0;
  --background-color: #0e2439;
  --background-color--lighter: #23364a;
  --background-color--contrast: white;
}

#app {
  font-family: Roboto, "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  letter-spacing: 0.2rem;
}

@media only screen and (min-width: 992px) {
}
</style>
