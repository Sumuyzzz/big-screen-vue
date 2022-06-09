<template>
  <div class="box">
    <Progress></Progress>
    <div class="switches">
      <div class="header">
        <div class="left">
          {{ "开关次数" }}
        </div>
        <img src="../../assets/switch.png" alt="" class="switch">
        <div class="right">
          <div class="number"> {{ "15" }}</div>
          <div class="string">{{ "次" }}</div>
        </div>
      </div>
      <div class="main">
        <img src="../../assets/map.png" alt="" class="map">
      </div>
    <Physicalunits/>
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

  .header {
    height: 120px;
  }


  .switches {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;

    .header {
      display: flex;
      align-items: center;
      border-bottom: 1px dashed #f0ff00;
      height: 120px;
      justify-content: space-around;

      .switch {
        width: 10%;
      }

      .left {
        font-size: 16px;
      }

      .right {
        display: flex;
        align-items: end;

        .number {
          color: #f0f000;
          font-size: 40px;
        }

        .string {
          color: #0072ff;
          font-size: 20px;

        }
      }
    }

    .main {
      .map {
        width: 100%;
      }
    }


  }
}
</style>