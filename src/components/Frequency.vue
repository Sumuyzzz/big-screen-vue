<template>
  <div class="box">
    <div class="demo-progress">
      <div class="header">
        <div class="title">{{ '设备使用频率' }}</div>
      </div>
      <el-progress class="progress" :text-inside="true" :stroke-width="16" :percentage="70" stroke-linecap="square" />
      <el-progress class="progress" :text-inside="true" :stroke-width="16" :percentage="100" status="success" />
      <el-progress class="progress" :text-inside="true" :stroke-width="16" :percentage="80" status="warning" />
      <el-progress class="progress" :text-inside="true" :stroke-width="16" :percentage="65" status="warning" />
      <el-progress class="progress" :text-inside="true" :stroke-width="16" :percentage="50" status="exception" />
    </div>

    <div class="switches">
      <div class="header">
        <div class="left">
          {{ "开关次数" }}
        </div>
        <img src="../assets/switch.png" alt="" class="switch">
        <div class="right">
          <div class="number"> {{ "15" }}</div>
          <div class="string">{{ "次" }}</div>
        </div>
      </div>
      <div class="main">
        <img src="../assets/map.png" alt="" class="map">
      </div>
      <div class="footer">
        <div class="pngs-top pngs">
          <div class="png">
            <div class="title">{{ "温度" }}</div>
            <div class="text">{{ "23°" }}</div>
            <img src="../assets/g.png" alt="">
          </div>
          <div class="png">
            <div class="title">{{ "湿度" }}</div>
            <div class="text">{{ "56RH" }}</div>
            <img src="../assets/j.png" alt="">
          </div>
        </div>
        <div class="pngs-bottom pngs">
          <div class="png">
            <div class="title">{{ "信号" }}</div>
            <div class="text">{{ "-90dBm" }}</div>
            <img src="../assets/s.png" alt="">
          </div>
          <div class="png">
            <div class="title">{{ "光线" }}</div>
            <div class="text">{{ "250LX" }}</div>
            <img src="../assets/t.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup >
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>

<style lang="scss" scoped>


.box {
  color: white;
  flex: 1;
  display: flex;
    font-size:1px;

    .header{
      height:120px;
    }
  .demo-progress {
    display: flex;
    flex-direction: column;
    flex: 1;

    .progress {
      flex: 1;
      width: 80%;
      height: 30px;
    }
  }

  .switches {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;

    .header {
      display: flex;
      align-items:center;
      border-bottom: 1px dashed #f0ff00;
      height: 120px;
      justify-content: space-around;
      .switch {
        width: 10%;
      }
      .left{
        font-size:16px;
      }
      .right{
        display: flex;
        align-items: end;
        .number{
          color:#f0f000;
          font-size:40px;
        }
        .string{
          color:#0072ff;
          font-size: 20px;
          
        }
      }
    }

    .main {
      .map {
        width: 100%;
      }
    }

    .footer {
      flex: 1;
      display: flex;
      .pngs {

        width: 50%;
        display: flex;
        flex-direction: column;
        font-size: 1px;

        .png {
          border: 1px dashed #f0ff00;
          width: 130px;
          height: 56px;
          margin: 16px;
        }
      }
    }
  }
}
</style>