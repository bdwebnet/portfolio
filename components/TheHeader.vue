<script setup lang="ts">
const items = [
  { title: 'Zurück zur Startseite', link: '/' }
]
</script>

<template>
  <header>
    <div class="container">
      <NuxtLink v-for="item in items" :key="item.title" :to="item.link">
        {{ item.title }}
      </NuxtLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 10px 0;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
}

a {
  text-decoration: none;
}
</style>
