<template>
  <div class="main boxes">
    <div class="box">
    </div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

    .main {
      display: flex;
      height: 450px;
      margin: 30px;
  
  
      .box {
        flex: 1;
        border: 1px solid red;
        margin: 0 30px;
        display: flex;
        flex-direction: column;
      }
    }
</style>