<template>
  <section>
    <div class="profile">
      <img src="../assets/profile.jpg" class="profile__picture" alt="Me" />
      <div class="profile__description">
        <h1>Yuri Jean Fabris</h1>
        <p>
          Full Stack JavaScript Engineer
        </p>
      </div>
      <div class="profile__links">
        <a
          href="mailto:yuri.fabris@gmail.com"
          class="profile__links__item"
          title="Email"
        >
          <img src="../assets/email.svg" alt="Email icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/yuri-jean-fabris/"
          class="profile__links__item"
          title="LinkedIn"
        >
          <img src="../assets/linkedin.svg" alt="LinkedIn icon" />
        </a>
        <a
          href="https://github.com/yurijean"
          class="profile__links__item"
          title="GitHub"
        >
          <img src="../assets/github.svg" alt="GitHub icon" />
        </a>
        <a
          href="https://twitter.com/_yurijean"
          class="profile__links__item"
          title="Twitter"
        >
          <img src="../assets/twitter.svg" alt="Twitter icon" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 7vh 0;
  position: relative;
  background-color: var(--background-color);
}

section::after {
  content: " ";
  display: block;
  background-image: url(../assets/shape-divider.svg);
  background-size: 1920px 800px;
  background-position-x: -200px;
  width: 100%;
  height: 800px;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  padding: 0 20px;
}

.profile__picture {
  width: 270px;
  height: 270px;
  max-width: 60vw;
  max-height: 60vw;
  border-radius: 50%;
  overflow: hidden;
  border: 22px solid var(--background-color--lighter);
}

.profile__description h1 {
  margin: 2.5rem 0 1.5rem;
}

.profile__description p {
  margin: 0 0 3rem;
}

.profile__links {
  display: flex;
  background-color: var(--background-color--lighter);
  padding: 14px 28px;
  border-radius: 6px;
}

.profile__links__item {
  opacity: 0.7;
  transition: opacity 0.2s;
}

.profile__links__item:not(:first-child) {
  margin-left: 40px;
}

.profile__links__item:hover {
  opacity: 1;
}

.profile__links__item img {
  width: 24px;
}

@media only screen and (min-width: 992px) {
  section::after {
    top: 60%;
    background-position-x: 0px;
  }
}

@media only screen and (min-width: 1921px) {
  section::after {
    background-size: cover;
    height: 41.66vw;
    top: calc(100% - 17vw);
  }
}
</style>
