<script setup lang="ts">
import TheHeroSection from '~/components/TheHeroSection.vue'

useHead({ title: null })
</script>

<template>
  <div class="container">
    <section>
      <TheHeroSection />
    </section>

    <section class="content-section">
      <div class="title">
        <h2 id="about">
          <a href="#about">
            Über mich
          </a>
        </h2>
      </div>

      <TheAboutSection class="content" />
    </section>

    <section class="content-section">
      <div class="title">
        <h2 id="skills">
          <a href="#skills">
            Fähigkeiten
          </a>
        </h2>
      </div>

      <TheSkillSection class="content" />
    </section>

    <section class="content-section">
      <div class="title">
        <h2 id="projects">
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

  .title h2 {
    margin-top: 0;
    text-transform: uppercase;
  }

  .content {
    padding-left: calc($space * 2);
    display: flex;
    flex-direction: column;
    gap: calc($space / 2);
  }
}

@media (min-width: $lg) {
  .content-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .title {
      text-align: right;
    }

    .content {
      grid-column-start: 2;
      grid-column-end: 4;
    }
  }
}

</style>
