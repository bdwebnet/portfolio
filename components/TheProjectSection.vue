<script setup>
import projects from '~/utils/projects'
import ArrowRight from '~/components/icons/ArrowRight.vue'
</script>

<template>
  <div>
    <div v-for="(project, index) in projects" :key="index" class="fade-in-left">
      <a :href="project.link" target="_blank">
        <h3>
          {{ project.title }}
          <ArrowRight />
        </h3>

        <p>{{ project.description }}</p>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;

  @media (pointer: fine){
    h3 svg {
      transition: $transition;
    }

    &:hover {
      h3 svg {
        margin-left: 0.4em;
      }
    }
  }
}
</style>
