import { createApp } from 'vue'
import App from './App.vue'
import './normalize.scss'
import ECharts from 'vue-echarts'
import { use } from "echarts/core";
import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart,
  PieChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
} from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  PieChart,
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
]);








const app = createApp(App)
app.component('v-chart', ECharts)
app.mount('#app')
  
