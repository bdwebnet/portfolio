<script setup lang="ts">
const items = [
  { title: 'Zurück zur Startseite', link: '/' }
]
</script>

<template>
  <header>
    <div class="container">
      <NuxtLink v-for="item in items" :key="item.title" :to="item.link">
        <button>
          {{ item.title }}
        </button>
      </NuxtLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: $space 0;

  .container {
    display: flex;
    justify-content: center;
  }
}
</style>
