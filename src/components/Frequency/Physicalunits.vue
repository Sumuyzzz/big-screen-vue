<template>
  <div class="footer">
    <div class="pngs-top pngs">
      <Unit title="温度" text="23"></Unit>
      <Unit title="光线" text="250LX"></Unit>
    </div>
    <div class="pngs-bottom pngs">
      <Unit title="温度" text="23"></Unit>
      <Unit title="信号" text="-90dBm"></Unit>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

        .footer {
          flex: 1;
          display: flex;
    
          .pngs {
    
            width: 50%;
            display: flex;
            flex-direction: column;
            font-size: 1px;
    
        
          }
        }
</style>

