<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
  user-select: none;
}

.page-enter-from {
  transform: translateX(-100px);
  opacity: 0;
  filter: blur(1rem);
}

.page-leave-to {
  transform: translateX(100px);
  opacity: 0;
  filter: blur(1rem);
}

</style>
