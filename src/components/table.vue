<template>
  <div class="table">
    <table>
      <tr>
        <th>维护时间</th>
        <th>维保人</th>
        <th>维保电话</th>
        <th>更换水量</th>
      </tr>
      <tr>
        <td>2022-xx-xx</td>
        <td>张伟</td>
        <td>181xxxx9465</td>
        <td>1000ml</td>
      </tr>
      <tr>
        <td>2022-xx-xx</td>
        <td>张伟</td>
        <td>181xxxx9465</td>
        <td>1000ml</td>
      </tr>
      <tr>
        <td>2022-xx-xx</td>
        <td>张伟</td>
        <td>181xxxx9465</td>
        <td>1000ml</td>
      </tr>
      <tr>
        <td>2022-xx-xx</td>
        <td>张伟</td>
        <td>181xxxx9465</td>
        <td>1000ml</td>
      </tr>
    </table>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.table {
  color: #fff;
  font-size: 1px;
  display: flex;
  align-items: center;
  justify-content: center;

  table {
    border-collapse: collapse;
    letter-spacing: 1px;
  }


  th {
    background: #053a98;
    padding: 10px 20px;
  }

  td {
    border: 1px solid #053a98;
    padding: 10px 20px;
    text-align: center;
  }
}
</style>