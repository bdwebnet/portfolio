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
:deep(a) {
  text-decoration: none;
  color: inherit;
}
</style>
