<template>
  <div class="main">
    <Charts class="order">
      <Order />
    </Charts>

      <Charts class="maps">
        <map-title />
        <Map class="map"/>
      </Charts>

    <Charts class="box">
      <Frequency />
    </Charts>
  </div>
</template>

<script   setup>



</script>

<style scoped lang="scss">
.main {
  display: flex;
  height: 450px;
  margin: 30px;

  .box {
    flex: 1;
    margin: 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
.order{
  width: 330px;
}

  .maps {

    flex: 1;
    margin: 0 30px;
    display: flex;
    flex-direction: column;

    .map {
      flex: 2;
      padding:30px;
      width:90%;
    }
  }
}
</style>