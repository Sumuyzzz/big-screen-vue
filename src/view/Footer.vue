<template>
  <div class="footer boxes">
    <div class="box">
      <LineBar></LineBar>
    </div>
    <div class="box">
      <Pie></Pie>
    </div>
    <div class="box">
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
    </div>
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

  }

}
</style>