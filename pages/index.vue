<script setup lang="ts">
import TheHeroSection from '~/components/TheHeroSection.vue'

useHead({ title: null })
</script>

<template>
  <div class="container">
    <section id="hero-section">
      <TheHeroSection />
    </section>

    <section id="about" class="content-section">
      <div class="title">
        <h2>
          <a href="#about">
            Über mich
          </a>
        </h2>
      </div>

      <TheAboutSection class="content" />
    </section>

    <section id="skills" class="content-section">
      <div class="title">
        <h2>
          <a href="#skills">
            Fähigkeiten
          </a>
        </h2>
      </div>

      <TheSkillSection class="content" />
    </section>

    <section id="projects" class="content-section">
      <div class="title">
        <h2>
          <a href="#projects">
            Projekte
          </a>
        </h2>
      </div>

      <TheProjectSection class="content" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: $sectionGap;
}

.content-section {
  display: flex;
  flex-direction: column;
  gap: $space;
  position: relative;

  .title {
    position: sticky;
    top: 0;
    padding: $space 0;
    background-color: $secondary;
    margin: 0 -#{$space};
    z-index: 1;
    text-align: center;

    h2 {
      margin-top: 0;
      margin-bottom: 0;
      text-transform: uppercase;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: calc($space / 2);
  }
}

@media (min-width: $lg) {
  .content-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: calc($space * 2);

    .title {
      text-align: right;
      position: relative;
      padding: 0;
      margin: 0;

      h2 {
        position: sticky;
        position: -webkit-sticky;
        top: $space;
        margin-bottom: $space;
      }
    }

    .content {
      grid-column-start: 2;
      grid-column-end: 4;
    }
  }
}

</style>
