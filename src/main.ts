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
  VisualMapComponent,
} from 'echarts/components'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiSolidClipboardList, FaCrown, RiMoneyCnyCircleFill } from "oh-vue-icons/icons"; 


/* add font awesome icon component */




addIcons(HiSolidClipboardList, FaCrown, RiMoneyCnyCircleFill);





use([
  CanvasRenderer,
  BarChart,
  PieChart,
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  VisualMapComponent,
]);








const app = createApp(App)




app.component('v-chart', ECharts)
app.component("v-icon", OhVueIcon);
app.mount('#app')
  
