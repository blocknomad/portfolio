<template>
  <section>
    <div class="profile">
      <img src="../assets/profile.jpg" class="profile__picture" />
      <div class="profile__description">
        <h1>Yuri Jean Fabris</h1>
        <p>
          Full Stack JavaScript Engineer. Digital nomad at some time in life.
          Indiehacker wannabe.
        </p>
      </div>
      <div class="profile__links">
        <a
          href="mailto:yuri.fabris@gmail.com"
          class="profile__links__item"
          title="LinkedIn"
        >
          <img src="../assets/email.svg" />
        </a>
        <a
          href="https://www.linkedin.com/in/yuri-jean-fabris/"
          class="profile__links__item"
          title="LinkedIn"
        >
          <img src="../assets/linkedin.svg" />
        </a>
        <a
          href="https://github.com/yurijean"
          class="profile__links__item"
          title="GitHub"
        >
          <img src="../assets/github.svg" />
        </a>
        <a
          href="https://twitter.com/_yurijean"
          class="profile__links__item"
          title="Twitter"
        >
          <img src="../assets/twitter.svg" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 7vh 0;
  position: relative;
}

section::after {
  content: " ";
  display: block;
  background-image: url(../assets/shape-divider.svg);
  background-size: 1920px 800px;
  width: 100%;
  height: 800px;
  position: absolute;
  top: calc(100% - 50vw);
  left: 0;
  z-index: 1;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 40px;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  padding: 0 20px;
}

.profile__picture {
  width: 300px;
  max-width: 70vw;
  border-radius: 50%;
  overflow: hidden;
  border: 22px solid var(--background-color--lighter);
}

.profile__description h1 {
  font-size: 2.8rem;
  margin: 2.5rem 0 1.5rem;
  letter-spacing: 0.2rem;
}

.profile__description p {
  font-size: 1.3rem;
  margin: 0 0 3rem;
}

.profile__links {
  display: flex;
  column-gap: 40px;
  background-color: var(--background-color--lighter);
  padding: 14px 28px;
  border-radius: 6px;
}

.profile__links__item img {
  width: 24px;
}

@media only screen and (min-width: 630px) {
  section::after {
    top: calc(100% - 30vw);
  }
}

@media only screen and (min-width: 992px) {
  section::after {
    top: calc(100% - 10vw);
  }
}

@media only screen and (min-width: 1921px) {
  section::after {
    background-size: cover;
    height: 41.66vw;
    top: calc(100% - 10vw);
  }
}
</style>
