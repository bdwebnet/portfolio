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
  transition: all 0.5s;
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
