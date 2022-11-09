<template>
  <div>
    <el-container>
      <el-header class="flex-float">
        <div class="flex">
          <img src="../../assets/logo.png" alt="" />
          <h1>后台管理系统</h1>
        </div>
        <el-button type="danger">退出</el-button>
      </el-header>
      <el-container>
        <el-aside>
          <el-menu
            default-active="1"
            text-color="white"
            background-color="none"
            :router="true"
          >
            <template
              v-for="(item, index) in systemModule"
              :key="'menu' + index"
            >
              <!-- 一级菜单按钮 -->
              <el-menu-item
                v-if="!item.children || item.children.length === 0"
                :index="item.path"
              >
                <el-icon v-if="item.icon">
                  <component :is="item.icon"></component>
                </el-icon>
                <span>{{ item.name }}</span>
              </el-menu-item>
              <!-- 一级菜单下拉 -->
              <el-sub-menu v-else :index="item.id">
                <template #title>
                  <el-icon v-if="item.icon">
                    <component :is="item.icon"></component>
                  </el-icon>
                  <span>{{ item.name }}</span>
                </template>
                <el-menu-item-group>
                  <template
                    v-for="(itemChild, indexChild) in item.children"
                    :key="'itemChild' + indexChild"
                  >
                    <!-- 二级菜单按钮 -->
                    <el-menu-item
                      v-if="
                        !itemChild.children || itemChild.children.length === 0
                      "
                      :index="itemChild.path"
                    >
                      <el-icon v-if="itemChild.icon">
                        <component :is="itemChild.icon"></component>
                      </el-icon>
                      <span>{{ itemChild.name }}</span>
                    </el-menu-item>
                    <!-- 二级菜单下拉 -->
                    <el-sub-menu v-else :index="itemChild.id">
                      <template #title>
                        <el-icon v-if="itemChild.icon">
                          <component :is="itemChild.icon"></component>
                        </el-icon>
                        <span>{{ itemChild.name }}</span>
                      </template>
                      <!-- 三级菜单按钮 -->
                      <el-menu-item
                        v-for="(
                          itemGrandSon, indexGrandSon
                        ) in itemChild.children"
                        :key="'itemGrandSon' + indexGrandSon"
                        :index="itemGrandSon.path"
                      >
                        <el-icon v-if="itemGrandSon.icon">
                          <component :is="itemGrandSon.icon"></component>
                        </el-icon>
                        <span>{{ itemGrandSon.name }}</span>
                      </el-menu-item>
                    </el-sub-menu>
                  </template>
                </el-menu-item-group>
              </el-sub-menu>
            </template>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { systemModule } from '@/assets/js/dictionary';

export default {
  name: 'HomeView',
  setup() {
    // beforeCreate 和 create 这两个声生命周期
    const data = reactive({
      name: '小明',
      age: 20,
      user_name: '',
      phone: '',
      systemModule,
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

<style scoped lang='less'>
.el-header {
  background: #11466e;
  color: white;
  img {
    width: 30px;
  }
}
.el-aside {
  background: #0a2941;
  color: white;
  height: 100vh;
  overflow: hidden;
}
</style>
