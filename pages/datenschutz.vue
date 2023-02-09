<script setup>
definePageMeta({
  layout: 'subpage'
})
</script>

<template>
  <div class="container">
    <ContentDoc path="/datenschutz">
      <template #empty>
        <h1>Datenschutzerklärung</h1>
      </template>
    </ContentDoc>
  </div>
</template>

<style lang="scss" scoped>
:deep(a) {
  text-decoration: none;
  color: inherit;
}
</style>
