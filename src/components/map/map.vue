<template>
  <div class="maps ">
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
    <div class="map">
      <v-chart :option="map" autoresize />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import VChart from "vue-echarts";
import { options } from "./option.js"
const map = ref(options)
</script>

<style scoped lang="scss">
.maps {
  flex: 1;
  margin: 0 30px;
  display: flex;
  flex-direction: column;

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

  .map {
    flex: 2;
  }
}
</style>