<script setup>
definePageMeta({
  layout: 'subpage'
})
</script>

<template>
  <div class="container">
    <ContentDoc path="/impressum">
      <template #empty>
        <h1>Impressum</h1>
      </template>
    </ContentDoc>
  </div>
</template>

<style lang="scss" scoped>

:deep(h1), :deep(h2) {
  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
