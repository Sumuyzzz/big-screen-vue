<template>
  <div class="little-box">
    <div class="key">{{ text }}</div>
    <div class="value">{{ value }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<
  {
    text: string,
    value: string
  }>()


</script>

<style lang="scss" scoped>
.little-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px;
  border: 1px dashed #044493;

  .key {
    color: #1a84ae
  }

  .value {
    color: rgb(255, 255, 255);
    font-size: 3px;
  }
}
</style>