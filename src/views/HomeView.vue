<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p v-text="name"></p>
    <p>{{ age }}</p>
    <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
    <input type="text" v-model="user_name" />
    <br />
    <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
    <input type="text" v-model="phone" @input="checkPhone" />
    <!-- input 事件
         input:输入事件
         blur:失去焦点
         focus:获取焦点
         change:内容更改
     -->
    <br />
    {{ user_name }} --- {{ phone }}
  </div>
</template>

<script>
// @ is an alias to /src
// 引入响应式
import { reactive, toRefs } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    // beforeCreate 和 create 这两个声生命周期
    const data = reactive({
      name: '小明',
      age: 20,
      user_name: '',
      phone: '',
    });

    // 生命周期,需要在上面引入
    // onMounted()
    // onUpdated()
    // onUnmounted()
    // onBeforeMount()
    // onBeforeUpdate()
    // onBeforeUnmount()
    // onErrorCaptured()
    // onRenderTracked()
    // onRenderTriggered()
    // onActivated()
    // onDeactivated()
    // onServerPrefetch()

    // 事件可以直接声明在setup里面
    const checkPhone = () => {
      if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(data.phone)) {
        console.log('手机号不正确');
      } else {
        console.log('手机号正确');
      }
    };

    return {
      // toRefs 可以解构响应式对象，让它里面的值都变成响应式的
      ...toRefs(data),
      checkPhone,
      // 所有的方法和数据，只要你在页面上有用到的，一定要在这个return里面给他放出去
    };
  },
};
</script>
