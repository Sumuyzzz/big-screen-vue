<template>
  <v-chart autoresize :option="option" :update-options="{ notMerge: true }" :init-options="initOption" />
  <button @click="update"></button>
</template>
<script setup >





import { onUpdated } from "vue";
import VChart from "vue-echarts";





let initData = [{
  value: 1,
  name: '故障',
  label: {
    color: '#e72325'
  }
},
{
  value: 2,
  name: '正常',
  selected: true,
  label: {
    color: '#98e002'
  }
}]



let option = {
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
    data: initData
  }]
}


let update = () => { }

onUpdated(() => {
  update = () => {
    initData = [{
      value: 59,
      name: '故障',
      label: {
        color: '#e72325'
      }
    },
    {
      value: 69,
      name: '正常',
      selected: true,
      label: {
        color: '#98e002'
      }
    }]
    console.log(initData);
  }
})















</script>

<style lang="scss" scoped>
</style>