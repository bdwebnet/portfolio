<script setup>
import meta from './utils/meta'

useHead({
  titleTemplate:
      (titleChunk) => {
        const siteTitle = meta.siteTitle
        return titleChunk ? `${titleChunk} – ${siteTitle}` : siteTitle
      }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">

.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active{
  transition: all 0.4s ease-in-out;
  user-select: none;
}

.page-enter-from,
.layout-enter-from{
  transform: translateX(-100px);
  opacity: 0;
  filter: blur(1rem);
}

.page-leave-to,
.layout-leave-to {
  transform: translateX(100px);
  opacity: 0;
  filter: blur(1rem);
}

</style>
