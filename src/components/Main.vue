<template>
  <div class="main boxes">
    <Order></Order>
    <div class="box ">
      <div class="header">
        <div class="little-box">
          <div class="key" >{{ "设备数" }}</div>
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
        <v-chart :option="map" autoresize="true" />
      </div>
    </div>
    <div class="box"></div>
  </div>
</template>

<script  setup>
import Order from './Order.vue';
import chinaMap from '../assets/geo/china.json';
import VChart from "vue-echarts";
import { ref } from "vue";
import { registerMap } from 'echarts';
import { data } from './map/data'






registerMap("chinaMap", chinaMap);
const map = ref({

  geo: {
    map: "chinaMap",
    emphasis: {
      label: {
        show: false
      },
      itemStyle: {
        areaColor: "#2a333d"
      }
    },
    itemStyle: {
      areaColor: "#323c48",
      borderColor: "#fff"
    }
  },
  series: {
    backgroundColor: "#132a3d",
    type: 'effectScatter',
    coordinateSystem: 'geo',
    geoIndex: 0,
    symbolSize: function (params) {
      return (params[2] / 100) * 15 + 5;
    },
    itemStyle: {
      color: '#fff'
    },
    encode: {
      tooltip: 2
    },
    data: data
  }
});



</script>

<style scoped lang="scss">
.main {
  display: flex;
  height: 450px;
  margin: 30px;

  .box {
    flex: 1;
    border: 1px solid red;
    margin: 0 30px;
    display: flex;
    flex-direction: column;

    .header {
      border: 1px solid rgb(216, 240, 0);
      flex: 1;
      display: flex;

      .little-box {
        border: 1px solid rgb(38, 255, 0);
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
          font-size:3px;
        }
      }
    }

    .map {
      border: 1px solid rgb(8, 0, 255);
      flex: 2;
    }
  }
}
</style>