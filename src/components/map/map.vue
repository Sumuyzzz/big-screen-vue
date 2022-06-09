<template>
        <v-chart :option="map" autoresize />
</template>

<script setup lang="ts">
import { ref } from "vue";
import VChart from "vue-echarts";
import { options } from "./option.js"
const map = ref(options)
</script>

<style scoped lang="scss">

</style>