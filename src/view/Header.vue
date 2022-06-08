<template>

    <div class="header">
      <img src="../assets/linx.png" alt="" class="logo">
      <div class="title">{{ '设备环境检测平台' }}</div>
    </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

    .header {
      .logo {
        width: 100%;
      }
  
      .title {
        color: white;
        position: absolute;
        top: 0;
        transform: translateY(50%);
        font-size: 34px;
        left: 150px;
      }
    }
</style>