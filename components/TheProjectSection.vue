<script setup>
import projects from '~/utils/projects'
import ArrowRight from '~/components/icons/ArrowRight.vue'
import animation from 'assets/js/animation.js'

onMounted(() => {
  animation()
})
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

      <div v-if="project.tags" class="tags">
        <div v-for="(tag, index) in project.tags" :key="index" class="tag">
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  background-image: none;
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

.tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5em 1em;
}

.tags .tag {
  border: $primary $borderWidth solid;
  border-radius: $borderRadius;
  padding: 0.25em 0.75em;
  display: inline-block;
}
</style>
