<template>
  <NuxtLayout name="subpage">
    <div class="container">
      <div v-if="error.statusCode === '404'">
        <h1>Seite nicht gefunden</h1>
      </div>
      <div v-else>
        <h1>Es ist ein Fehler aufgetreten</h1>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
defineProps({ error: Object })
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
</style>
