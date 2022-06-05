<script setup lang="ts">
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

</script>
<template>
  <div class="container">
    <Header></Header>
    <div class="wrapper">
      <Main></Main>
    <Footer></Footer>
    </div>

  </div>

</template>

<style lang="scss" scoped>
.container {
  .wrapper {
    display: flex;
    flex-direction: column;
  }
}
</style>
