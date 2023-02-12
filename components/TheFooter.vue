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
      <NuxtLink v-for="item in items" :key="item.title" :to="item.link">
        {{ item.title }}
      </NuxtLink>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  margin-top: auto;
  padding: $space 0;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: $space;
  }
}

a {
  text-decoration: none;
}
</style>
