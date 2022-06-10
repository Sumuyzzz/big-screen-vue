<template>
  <v-chart :option="options" autoresize class='progress' />
</template>

<script setup >
import VChart from "vue-echarts";

const data = [];
const randomArray = () => {
  for (let i = 0;i < 5;i++) {
    data.push(Math.floor(Math.random() * 100))
  }
}

randomArray()


const titleName = ['1号机', '2号机', '3号机', '4号机', '5号机'];

const myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
const options = {
  title: {
    text: '设备使用频率',
    x: 'center',
    textStyle: {
      color: '#FFF'
    },
    left: '6%',
    top: '10%'
  },
  grid: {
    top: '20%',
    left: '32%'
  },
  xAxis: {
    show: false
  },
  yAxis: [{
    show: true,
    data: titleName,
    inverse: true,
    axisLine: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#fff',
      formatter: (value, index) => {
        return [
          `{lg|${index + 1}}  ` + '{title|' + value + '} '
        ].join('\n')
      },
      rich: {
        lg: {
          backgroundColor: '#339911',
          color: '#fff',
          borderRadius: 15,
          align: 'center',
          width: 15,
          height: 15
        },
      }
    },
  }, {
    show: true,
    inverse: true,
    data: [1,2,2,3,5],
    axisLabel: {
      textStyle: {
        fontSize: 12,
        color: '#fff',
      },
    },
    axisLine: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },

  }],
  series: [{
    name: '条',
    type: 'bar',
    yAxisIndex: 0,
    data: data,
    barWidth: 10,
    itemStyle: {
      normal: {
        barBorderRadius: 20,
        color: function (params) {
          const num = myColor.length;
          return myColor[params.dataIndex % num]
        },
      }
    },
    label: {
      normal: {
        show: true,
        position: 'inside',
        formatter: '{c}%'
      }
    },
  }, {
    name: '框',
    type: 'bar',
    yAxisIndex: 1,
    barGap: '-100%',
    data: [100, 100, 100, 100, 100],
    barWidth: 15,
    itemStyle: {
      normal: {
        color: 'none',
        borderColor: '#00c1de',
        borderWidth: 3,
        barBorderRadius: 15,
      }
    }
  },]
};

</script>

<style scoped lang="scss">
</style>