

<template>
  <div class="members">
    <div class="box1 red">
      <v-icon name="hi-solid-clipboard-list" color="#fff" class="icon" />
      <div class="message">
        <span>{{ '本月订单数 ' }}</span>
        <span>{{ '18000' }}</span>
      </div>
    </div>
    <div class="box1 green">
      <v-icon name="fa-crown" color="#fff" class="icon" />
      <div class="message">
        <span>{{ '本月订单数 ' }}</span>
        <span>{{ '18000' }}</span>
      </div>
    </div>
    <div class="box1 yellow">
      <v-icon name="ri-money-cny-circle-fill" color="#fff" class="icon" />
      <div class="message">
        <span>{{ '本月订单数 ' }}</span>
        <span>{{ '18000' }}</span>
      </div>
    </div>
  </div>
</template>
<script setup >

</script>


<style scoped lang="scss">
.members {
  width: 330px;
  border: 1px solid yellow;

  .box1 {
    width: 294px;
    height: 124px;
    margin: 16px;
    border: 1px solid rgb(38, 0, 255);
    display: flex;
    align-items: center;
    justify-content: center;

    .message {
      color: #fff;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      align-items: baseline;
    }

    .icon {
      height: 50px;
      width: 50px;
    }
  }

  .red {
    background: #d9523f;
  }

  .green {
    background: #13d0b2;
  }

  .yellow {
    background: #f6a645;
  }
}
</style>