# vue-touch

## Usage

```js
import vueTouch from "vue-touch";

Vue.use(vueTouch);
```

- vue-touch 提供了点击、长按、左滑、右滑、上滑、下滑等事件，
- 当你不需要传参时可以通过 v-tap="vueTouch"的形式调用方法，
- 当你需要传参时 v-tap="(e)=>vueTouch('点击',e)"的方式调用，e 是 event 对象
- 当指令搭配 v-for 使用时，一定要确保 key 值的唯一性，否则不能保证数据刷新之后事件被重新绑定（参考 vue 就地复用机制）
- 尽量避免对数组、对象的直接赋值操作，可能会导致参数不更新

```js
<template>
  <div class="box"
    v-tap="(e)=>vueTouch('点击',e)"
    v-longtap="(e)=>vueTouch('长按',e)"
    v-swipeleft="(e)=>vueTouch('左滑',e)"
    v-swiperight="(e)=>vueTouch('右滑',e)"
    v-swipeup="(e)=>vueTouch('上滑',e)"
    v-swipedown="(e)=>vueTouch('下滑',e)"
  ></div>
</template>
<script>
  export default {
    name: 'App',
    data () {
      return {
        name:'touch',
      }
    },
    methods:{
      vueTouch:function(txt,e){
        this.name = txt;
      }
    }
  }
</script>
```
