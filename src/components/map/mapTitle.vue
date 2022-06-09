<template>
  <div class="header">
    <div class="little-box">
      <div class="key">{{ "设备数" }}</div>
      <div class="value">{{ "500" }}</div>
    </div>
    <div class="little-box">
      <div class="key">{{ "上月设备增加数" }}</div>
      <div class="value">{{ "30" }}</div>
    </div>
    <div class="little-box">
      <div class="key">{{ "增值率" }}</div>
      <div class="value">{{ "75%" }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

.header {
  flex: 1;
  display: flex;

  .little-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .key {
      color: #1a84ae
    }

    .value {
      color: rgb(255, 255, 255);
      font-size: 3px;
    }
  }
}
</style>