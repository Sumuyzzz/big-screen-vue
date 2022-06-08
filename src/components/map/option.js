import { registerMap } from 'echarts';
import Map from '../../assets/geo/guangxi.json';

registerMap("guangxi", Map);



const geoCoordMap = {
  '河池': [108.085179, 24.700488],
  '柳州': [109.412578, 24.354875],
  '梧州': [111.323462, 23.478238],
  '南宁': [108.359656, 22.81328],
  '北海': [109.171374, 21.477419],
  '崇左': [107.347374, 22.377503]
};
const data = [{
  name: '河池',
  value: 100
},
{
  name: '柳州',
  value: 100
},
{
  name: '梧州',
  value: 100
},
{
  name: '北海',
  value: 100
},
{
  name: '崇左',
  value: 100
}
];
const max = 480,
  min = 9;
const maxSize4Pin = 100,
  minSize4Pin = 20;
const convertData = function (data) {
  const res = [];
  for (let i = 0;i < data.length;i++) {
    let geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};


export const options = {
  backgroundColor: "#404a59",
  title: {
    text: "设备分布",
    left: "center",
    textStyle: {
      color: "#fff"
    }
  },
  tooltip: {
    trigger: "item"
  },
  legend: {
    orient: "vertical",
    y: "bottom",
    x: "right",
    data: ["pm2.5"],
    textStyle: {
      color: "#fff"
    }
  },
  geo: {
    map: "guangxi",
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
      borderColor: "#111"
    }
  },
  series: [
    {
      type: "scatter",
      coordinateSystem: "geo",
      data: convertData(data),
      symbolSize: val => val[2] / 10,
      tooltip: {
        formatter: function (val) {
          return val.name + ": " + val.value[2];
        }
      },
      itemStyle: {
        color: "#ddb926"
      }
    },
    {
      name: "Top 5",
      type: "effectScatter",
      coordinateSystem: "geo",
      data: convertData(data.sort((a, b) => b.value - a.value).slice(0, 6)),
      symbolSize: val => val[2] / 10,
      showEffectOn: "render",
      rippleEffect: {
        brushType: "stroke"
      },
      emphasis: {
        scale: true
      },
      tooltip: {
        formatter: function (val) {
          return val.name + ": " + val.value[2];
        }
      },
      label: {
        formatter: "{b}",
        position: "right",
        show: true
      },
      itemStyle: {
        color: "#f4e925",
        shadowBlur: 10,
        shadowColor: "#333"
      },
      zlevel: 1
    }
  ]
};

