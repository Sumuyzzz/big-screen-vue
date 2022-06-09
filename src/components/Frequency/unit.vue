<template>
  <div class="png">
    <div class="png-left">
      <div class="title">{{ title }}</div>
      <img src="../../assets/g.png" alt="" class="img">
    </div>
    <div class="png-right">
      <div class="text">{{ text }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  title?: string
  text?: number
}>()


</script>

<style lang="scss" scoped>
        .png {
          border: 1px dashed #f0ff00;
          width: 130px;
          height: 56px;
          margin: 16px;
          display: flex;
          align-items: center;
          justify-content: space-around;
    
          .png-left {
            display: flex;
            flex-direction: column;
    
            .img {
              width: 20px;
              height: 20px;
              align-self: center;
            }
          }
    
          .png-right {
            align-self: center;
            font-size: 20px;
          }
        }
</style>