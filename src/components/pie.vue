<template>
  <v-chart :option="options" autoresize />
</template>

<script setup lang="ts">
import VChart from "vue-echarts";

const  options = {
  title: {
    text: '本月状态统计',
    left: 'center',
    color:'#fff'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 89.29, name: '正常' },
        { value:10.71, name: '故障' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};



</script>

<style lang="scss" scoped>

</style>