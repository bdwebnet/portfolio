<script setup>
import skills from '~/utils/skills'
import animation from 'assets/js/animation.js'

onMounted(() => {
  animation()
})
</script>

<template>
  <div id="skill-wrapper">
    <div v-for="(skill, index) in skills" :key="index" class="fade-in-left" :class="{'hide-on-mobile': skill.hideOnMobile}">
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

  a {
    background-image: none;
  }

  .hide-on-mobile {
    display: none;
  }

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

    .hide-on-mobile {
      display: inline-block;
    }

    div.skill-content {
      cursor: not-allowed;
    }

    a.skill-content {
      cursor: pointer;
    }

    .skill-content {
      transition: $transition;

      .icon {
        width: 3em;
      }

      &:hover {
        filter: none;
        opacity: 1;
        transform: scale(110%);
      }
    }
  }
}
</style>
