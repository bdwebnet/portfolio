<template>
  <div class="page-wrapper">
    <TheHeader id="header" />
    <slot />
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  position: relative;
}

#header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: $secondary;
}
</style>
