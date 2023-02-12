<script setup>
import skills from '~/utils/skills'
</script>

<template>
  <div id="skill-wrapper">
    <div v-for="(skill, index) in skills" :key="index" class="fade-in-left">
      <a
        v-if="skill.link"
        :href="skill.link"
        target="_blank"
        :title="skill.title"
        class="skill-content"
      >
        <div class="icon" :style="`fill: ${skill.color}`" v-html="skill.icon" />
        <p>{{ skill.title }}</p>
      </a>
      <div v-else class="skill-content">
        <div class="icon" :style="`fill: ${skill.color}`" v-html="skill.icon" />
        <p>{{ skill.title }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#skill-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc($space * 1.5);

  .skill-content {
    text-decoration: none;
    padding: 0;
    background-color: inherit;
    color: inherit;
    filter: saturate(0) brightness(0);
    opacity: 0.7;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: calc($space / 3);

    p {
      margin: 0;
    }

    .icon {
      width: 2.5em;

      svg {
        width: 100%;
        height: auto;
      }
    }
  }
}

@media (min-width: $md) {
  #skill-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    .skill-content {
      transition: $transition;

      .icon {
        width: 3em;
      }

      &:hover {
        filter: none;
        opacity: 1;
        transform: scale(110%);
        cursor: pointer;
      }
    }
  }
}
</style>
