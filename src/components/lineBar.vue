<template>
  <v-chart :option="options" autoresize />
</template>
<script  setup >

import VChart from "vue-echarts";


const getDate = () => {
  let result = []

  for (let i = 0;i < 6;i++){
    result.push(Math.floor(Math.random() * 20))
  }
  return result
}






var yAxis = [getDate(), getDate()];
var xAxis = [getDate(), getDate()];

function test() {

  var legendBar = ['正面占比', '中立占比', '负面占比'];
  var legendLine = ['同期对比', '后期对比'];
  var seriesArr = [];
  var legendArr = [];
  var barColor = ['#bfc',  '#7091C4']
  var lineColor = ['#3FA7DC', '#d9523f']
  yAxis?.forEach((item, index) => {
    legendArr.push({
      name: legendBar?.[index]
    });
    seriesArr.push({
      name: legendBar?.[index],
      type: 'bar',
      barGap: '0.5px',
      data: item,
      barWidth: 12,
      label: {
        normal: {
          show: true,
          formatter: '{c}' + '',
          position: 'top',
          textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            textAlign: 'left',
            fontSize: 11,
          },
        },
      },
      itemStyle: {
        normal: {
          barBorderRadius: 4,
          color: barColor[index]
        },
      }
    });
  });

  xAxis?.forEach((item, index) => {
    legendArr.push({
      name: legendLine?.[index]
    })
    seriesArr.push({
      name: legendLine?.[index],
      type: 'line',
      data: item,
      itemStyle: {
        normal: {
          color: lineColor[index],
          lineStyle: {
            width: 3,
            type: 'solid',
          }
        }
      },
      label: {
        normal: {
          show: false,
          position: 'top',
        }
      },
      symbol: 'circle',
      symbolSize: 10
    });
  });
  return {
    seriesArr,
    legendArr
  };
}


const myData = test()


const options = {
  title: {
    show: true,
    top: '10%',
    left: '3%',
    textStyle: {
      fontSize: 18,
      color: '#fff'
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none'
    },
  },
  legend: {
    right: '30%',
    top: '12%',
    right: '5%',
    itemGap: 16,
    itemWidth: 10,
    itemHeight: 10,
    data: myData.legendArr,
    textStyle: {
      color: '#fff',
      fontStyle: 'normal',
      fontFamily: '微软雅黑',
      fontSize: 12,
    }
  },
  grid: {
    x: 30,
    y: 80,
    x2: 30,
    y2: 60,
  },
  xAxis: {
    type: 'category',
    data: ['一月', '二月', '三月', '四月', '五月', '六月'],
    axisTick: {
      show: false,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#1AA1FD',
      },
      symbol: ['none', 'arrow']
    },
    axisLabel: {
      show: true,
      interval: '0',
      textStyle: {
        lineHeight: 16,
        padding: [2, 2, 0, 2],
        height: 50,
        fontSize: 12,
      },
      rich: {
        Sunny: {
          height: 50,
          padding: [0, 5, 0, 5],
          align: 'center',
        },
      },
      color: '#1AA1FD',
    },

  },
  yAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#1AA1FD',
      },
      symbol: ['none', 'arrow']
    },
    type: 'value',
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: '#1AA1FD',
        type: 'solid'
      },
    }
  },
  series: myData.seriesArr
}

setInterval(() => {
  yAxis.push(getDate())
  xAxis.push(getDate())
}, 1000);
</script>

<style lang="scss" scoped>
</style>