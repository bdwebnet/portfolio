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

  a {
    background-image: none;
  }

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

      @media (min-width: $md) {
        a {
          display: inline-block;
          padding-bottom: calc($space / 10);
          background-image: linear-gradient(0deg, $primary, $primary);
          background-position: 50% 100%;
          background-size: 0 1px;
          background-repeat: no-repeat;
          transition:
              background-size $transitionDuration,
              background-position 0s $transitionDuration;

          &:hover {
            background-position: 50% 100%;
            background-size: 100% 1px;
          }
        }
      }
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
</style>
