<template>
  <div :class="color" class="box1">
    <v-icon :name="names" color="#fff" class="icon" animation="pulse" />
    <div class="message">
      <span>{{ text }}</span>
      <h2>{{ value }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  text: string,
  value: string,
  color: string,
  names: string,
}>()

</script>

<style lang="scss" scoped>
.box1 {
  width: 294px;
  height: 124px;
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  .message {
    color: #fff;
    font-size: 0.2rem;
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
</style>