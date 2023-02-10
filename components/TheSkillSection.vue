<script setup>
import skills from '~/utils/skills'
</script>

<template>
  <div>
    <div id="skills">
      <div v-for="(skill, index) in skills" :key="index">
        <a v-if="skill.link" :href="skill.link" target="_blank" :title="skill.title" class="skill-content">
          <div class="icon" :style="`fill: ${skill.color}`" v-html="skill.icon" />
          <h3>{{ skill.title }}</h3>
        </a>
        <div v-else class="skill-content">
          <div class="icon" :style="`fill: ${skill.color}`" v-html="skill.icon" />
          <h3>{{ skill.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#skills {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3em;

  .skill-content {
    text-decoration: none;
    padding: 0;
    background-color: inherit;
    color: inherit;
    filter: saturate(0) brightness(0);
    opacity: 0.6;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.3s ease-in-out;

    .icon {
      width: 3em;

      svg {
        width: 100%;
        height: auto;
      }
    }

    &:hover {
      filter: none;
      opacity: 1;
      transform: scale(110%);
      cursor: pointer;
    }
  }
}
</style>
