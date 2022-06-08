<script setup lang="ts">
import Header from './header.vue'
import Main from './main.vue'
import Footer from './footer.vue'
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
