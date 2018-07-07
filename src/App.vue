<template>
  <div id="app">
    <div class="item">
      <h2>Spin</h2>
      <xo-loader v-show="show" :type="'spin'" :color="['#2ecc71']" :size="{width: '32px', height: '32px'}" :font="{fontSize: '12px'}" :text="'载入中...'"></xo-loader>
    </div>
    <div class="item">
      <h2>Ball</h2>
      <xo-loader :type="'ball'" :color="['#F93943']" :size="{width: '32px', height: '32px'}" :font="{fontSize: '12px'}"></xo-loader>
    </div>
    <div class="item">
      <h2>Pulse</h2>
      <xo-loader :type="'pulse'" :color="['#f1c40f', '#F93943']" :size="{width: '32px', height: '32px'}" :font="{fontSize: '12px'}"></xo-loader>
    </div>
    <div class="item">
      <h2>Dot</h2>
      <xo-loader :type="'dot'" :color="['#f1c40f']" :size="{width: '32px', height: '32px'}" :font="{fontSize: '12px'}" :text="'载入中...'"></xo-loader>
    </div>
    <div class="item">
      <h2>Cube</h2>
      <xo-loader :type="'cube'" :color="['#F93943']" :size="{width: '32px', height: '32px'}" :font="{fontSize: '12px'}" :text="'载入中...'"></xo-loader>
    </div>
    <div class="item">
      <h2>Square</h2>
      <xo-loader :type="'square'" :size="{width: '32px', height: '32px'}" :font="{fontSize: '12px'}"></xo-loader>
    </div>
  </div>
</template>

<script>
import xoLoader from './lib/index.vue';
export default {
  name: 'app',
  data() {
    return {
      show: true
    }
  },
  components: {
    xoLoader
  }
}
</script>
<style scoped>
  body {
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased; /* 使字体清晰 */
  -moz-osx-font-smoothing: grayscale;
  }
  #app {
    text-align: center;
    color: #2c3e50;
    width: 800px;
    margin: 100px auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .item {
    width: 200px;
  }
  h2 { margin: 0; margin-bottom: 15px;}
</style>