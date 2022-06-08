<template>
  <v-chart :option="options" autoresize />
</template>

<script setup >

import VChart from "vue-echarts";



const data = {
  id: 'multipleBarsLines',
  title: '2018年前半年检测统计',
  legendBar: ['正面占比', '中立占比', '负面占比'],
  symbol: '', //数值是否带百分号        --默认为空 ''
  legendLine: ['同期对比'],
  xAxis: ['一月', '二月', '三月', '四月', '五月', '六月'],
  yAxis: [
    [8, 10, 10, 11, 4, 13]
  ],
  lines: [
    [10, 10, 9, 11, 7, 4]
  ],
  barColor: ['#3FA7DC', '#7091C4', '#5170A2'], //柱子颜色 必填参数
  lineColor: ['#D9523F'], // 折线颜色

};
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