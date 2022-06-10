<template>
  <div class="little-box">
    <div class="key">{{ title_text }}</div>
    <div class="value">{{ title_value }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<
  {
    title_text: string,
    title_value: string
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