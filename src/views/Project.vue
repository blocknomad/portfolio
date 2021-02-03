<template>
  <div class="project">
    <div class="project__heading">
      <h3>
        <slot name="title"></slot>
      </h3>
      <p>
        <slot name="description"></slot>
      </p>
    </div>
    <div class="project__medias">
      <slot name="medias"></slot>
    </div>
    <h4>About this project</h4>
    <h4>Technical set</h4>
  </div>
</template>

<style>
.project {
  margin-top: 40px;
  padding: 20px 25px;
  border-radius: 20px;
  background-color: var(--background-color);
  text-align: left;
}

.project__heading {
  margin-bottom: 40px;
}

.project__medias img,
.project__medias video {
  max-width: 100%;
  border-radius: 15px;
}

.project__medias {
  margin-bottom: 40px;
}

@media only screen and (min-width: 992px) {
  .project {
    padding: 40px 50px;
  }
}
</style>
