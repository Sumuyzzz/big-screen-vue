<template>
  <div class="switches">
    <div class="header">
      <div class="left">
        {{ "开关次数" }}
      </div>
        <img src="../../assets/switch.png" alt="" class="switch" @click="count++">


      <div class="right">
        <div class="number"> {{ count }}</div>
        <div class="string">{{ "次" }}</div>
      </div>
    </div>
    <div class="main">
      <img src="../../assets/map.png" alt="" class="map">
    </div>
    <Physicalunits />
  </div>
</template>

<script setup>
import { ref } from "vue"

const count = ref(0)



</script>

<style lang="scss" scoped>

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
      cursor:pointer
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
</style>