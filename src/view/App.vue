<script setup lang="ts">
import Header from './header.vue'
import Main from './main.vue'
import Footer from './footer.vue'
import { onMounted, ref } from 'vue';
import dayjs from 'dayjs'

let timer = ref(0)

let datetime = ref('')

onMounted(() => {
  timer.value = setInterval(() => {
    datetime.value = dayjs().format("YYYY-MM-DD HH:mm:ss")
    console.log(datetime)
  }, 1000)
});
</script>
<template>
  <div class="container">
    <Header></Header>
    <div class="date">{{ datetime }}</div>
    <div class="wrapper">
      <Main></Main>
      <Footer></Footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('http://fonts.cdnfonts.com/css/led-digital-7');

.container {
  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .date {
    color: #5aa6ee;
    font-size:22px;
    font-family: 'LED Digital 7', sans-serif;
  }
}
</style>
