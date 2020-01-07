<template>
  <div id="app">
    <div
      class="box"
      v-tap="(e)=>vueTouch('点击',e)"
      v-longtap="(e)=>vueTouch('长按',e)"
      v-swipeleft="(e)=>vueTouch('左滑',e)"
      v-swiperight="(e)=>vueTouch('右滑',e)"
      v-swipeup="(e)=>vueTouch('上滑',e)"
      v-swipedown="(e)=>vueTouch('下滑',e)"
    >{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "touch"
    };
  },
  methods: {
    vueTouch: function(txt, e) {
      this.name = txt;
    }
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box {
  width: 300px;
  height: 300px;
  background: #382d2d;
  color: #ffffff;
  text-align: center;
  line-height: 300px;
  font-size: 60px;
}
</style>