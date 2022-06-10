<template>
  <div class="charts">
    <slot />
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.charts {
  background: linear-gradient(to left, #044494, #044494) left top no-repeat,
    linear-gradient(to bottom, #044494, #044494) left top no-repeat,
    linear-gradient(to left, #044494, #044494) right top no-repeat,
    linear-gradient(to bottom, #044494, #044494) right top no-repeat,
    linear-gradient(to left, #044494, #044494) left bottom no-repeat,
    linear-gradient(to bottom, #044494, #044494) left bottom no-repeat,
    linear-gradient(to left, #044494, #044494) right bottom no-repeat,
    linear-gradient(to left, #044494, #044494) right bottom no-repeat;
  background-size: 5px 20px, 20px 5px, 5px 20px, 20px 5px;
  border: 1px solid #044494;
  box-shadow: inset 0 0 30px rgba(51, 170, 255, 0.7);

}
</style>