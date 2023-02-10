<script setup>
import projects from '~/utils/projects'
</script>

<template>
  <div id="projects">
    <div v-for="(project, index) in projects" :key="index">
      <a :href="project.link" target="_blank">
        <h3>{{ project.title }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-double-right"
            viewBox="0 0 16 16"
            role="img"
          >
            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
          </svg></h3>

        <p>{{ project.description }}</p>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#projects {
  a {
    text-decoration: none;
    color: inherit;

    h3 svg {
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      h3 svg {
        margin-left: 0.4em;
      }
    }
  }
}
</style>
