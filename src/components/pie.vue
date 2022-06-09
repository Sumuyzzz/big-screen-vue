<template>

    <v-chart :option="options" autoresize />

</template>

<script setup lang="ts">
import VChart from "vue-echarts";

const options = {
  title: {
    text: '本月设备状态统计',
    top: 35,
    left: 20,
    textStyle: {
      fontSize: 18,
      color: '#fff'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)",

  },
  legend: {
    right: 20,
    top: 35,
    data: ['故障', '正常'],
    textStyle: {
      color: '#fff'
    }
  },
  series: [{
    name: '设备状态',
    type: 'pie',
    radius: ['0', '60%'],
    center: ['50%', '60%'],
    color: ['#e72325', '#98e002'],
    label: {
      normal: {
        formatter: '{b}\n{d}%'
      },
      textStyle: {
        color: '#fff'
      },
    },
    data: [{
      value: 6,
      name: '故障',
      label: {
        color:'#e72325'
      }
    },
    {
      value: 50,
      name: '正常',
      selected: true,
      label: {
        color:'#98e002'
      }
    }
    ]
  }]
}



</script>

<style lang="scss" scoped>



</style>