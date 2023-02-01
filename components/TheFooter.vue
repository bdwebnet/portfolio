<script setup lang="ts">
const items = [
  { title: 'Kontakt', link: '/#kontakt' },
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
  padding: 10px 0;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
}
</style>
