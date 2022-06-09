<template>
  <div class="footer ">
    <Charts class="box">
      <LineBar />
    </Charts>
    <Charts class="box">
      <Pie />
    </Charts>
    <Charts class="box">
      <Table />
    </Charts>
  </div>
</template>

<script setup >

</script>

<style scoped lang="scss">
.footer {
  display: flex;
  height: 340px;
  margin: 30px;
  .box {
    flex: 1;
    margin: 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
}
</style>