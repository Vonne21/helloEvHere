<template>
  <div class="font-Silkscreen flex items-center">
    <i class="">
      <slot name="icon"></slot>
    </i>
    <div class="ml-2">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>
