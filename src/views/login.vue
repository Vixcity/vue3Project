<template>
  <div class="login">
    <el-form
      ref="formRef"
      :model="loginData"
      label-width="120px"
      class="form-item"
    >
      <el-form-item
        prop="account"
        label="账号"
        :rules="[
          {
            required: true,
            message: '请输入你的账号',
            trigger: 'blur',
          },
        ]"
      >
        <el-input v-model="loginData.account" />
      </el-form-item>
      <el-form-item
        prop="password"
        label="密码"
        :rules="[
          {
            required: true,
            message: '请输入你的密码',
            trigger: 'blur',
          },
        ]"
      >
        <el-input type="password" v-model="loginData.password" />
      </el-form-item>
      <el-button type="primary" class="center" @click="login"> 登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'login',
  setup() {
    const store = useStore();
    const router = useRouter();
    const { count } = store.state.number;
    const data = reactive({
      loginData: {
        account: '',
        password: '',
      },
      num: count,
      numStatus: store.getters['number/countStatus'],
    });

    const login = () => {
      store.commit('userInfo/setUserInfo', data.loginData);
      // 跳转
      router.push('/userList');
    };

    return {
      ...toRefs(data),
      login,
    };
  },
};
</script>

<style scoped lang='less'>
.login {
  background: rgb(72, 105, 155);
  height: 100vh;
}
.form-item {
  background: #fff;
  position: absolute;
  left: 50%;
  top:50%;
  transform: translateX(-50%) translateY(-50%);
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 50vw;
  border-radius: 20px;
  .center{
    position: relative;
    left: 10%;
    transform: translateX(-50%);
  }
}
</style>
