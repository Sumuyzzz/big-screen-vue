<template>
  <v-chart :option="options" autoresize />
</template>

<script setup >

import VChart from "vue-echarts";
const options = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#fff'
      }
    }
  },
  legend: {
    data: ['正画占比', '同期对比'],
    color: '#fff'
  },
  xAxis: [
    {
      type: 'category',
      data: ['一月', '二月', '三月', '四月', '五月', '六月'],
      axisPointer: {
        type: 'shadow'
      },
      color: '#fff'
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'xxx',
    },
    {
      type: 'value',
      name: 'Temperature',
    }
  ],
  series: [
    {
      name: '正画占比',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' ml';
        }
      },
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
      ]
    },
    {
      name: '同期对比',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + ' °C';
        }
      },
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }
  ]
};


</script>

<style lang="scss" scoped>
</style>