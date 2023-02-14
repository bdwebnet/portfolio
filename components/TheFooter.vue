<script setup lang="ts">
const items = [
  { title: 'Startseite', link: '/' },
  { title: 'Impressum', link: '/impressum' },
  { title: 'Datenschutz', link: '/datenschutz' }
]
</script>

<template>
  <footer>
    <div class="container">
      <div class="social-icons">
        <div v-for="(social, index) in socials" :key="index">
          <a
            v-if="social.link"
            :href="social.link"
            target="_blank"
            :title="social.title"
          >
            <div class="icon" :style="`fill: ${social.color}`" v-html="social.icon" />
          </a>
        </div>
      </div>

      <nav>
        <NuxtLink v-for="item in items" :key="item.title" :to="item.link">
          {{ item.title }}
        </NuxtLink>
      </nav>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  margin-top: auto;
  padding: $space 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: $space;

    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: $space;
      width: 100%;
    }

    .social-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: $space;
      width: 100%;

      .icon {
        width: 1.5em;
        filter: saturate(0) brightness(0);
        opacity: 0.7;
        transition: $transition;

        svg {
          width: 100%;
          height: auto;
        }

        &:hover {
          filter: none;
          opacity: 1;
          cursor: pointer;
        }
      }
    }

    @media (min-width: $md) {
      justify-content: space-between;

      nav {
        width: auto;
        order: 1;
      }

      .social-icons {
        width: auto;
        order: 2;
      }
    }
  }
}

a {
  text-decoration: none;
}
</style>
