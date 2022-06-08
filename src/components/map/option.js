import { registerMap } from 'echarts';
import { data } from './data'
import Map from '../../assets/geo/china.json';

registerMap("Map", Map );
export const options = {
  geo: {
    map: "Map",
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
}
