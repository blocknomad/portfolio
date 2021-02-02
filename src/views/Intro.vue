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
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 40px;
  margin-top: 7vh;
}

.profile__picture {
  width: 350px;
  max-width: 70vw;
  border-radius: 50%;
  overflow: hidden;
  border: 22px solid #ffffff16;
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
  background-color: #ffffff16;
  padding: 14px 28px;
  border-radius: 6px;
}

.profile__links__item img {
  width: 24px;
}
</style>
