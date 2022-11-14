export default {
  namespaced: true,
  // 全局初始状态
  state: {
    count: 1,
  },
  // 类似于state的计算属性
  getters: {
    countStatus(state) {
      return state.count >= 100;
    },
  },
  // 更新状态的方法，更新state的唯一方法，commit mutations
  mutations: {
    setCount(state, num) {
      state.count = num;
    },
  },
  // 可以异步操作，可以返回promise，更改数据都是传递到 mutations
  actions: {
    setCountPromise(context, num) {
      return new Promise((resolve, reject) => {
        if (num > 100) {
          reject(new Error('值不能大于100'));
        } else {
          context.commit('setCount', num);
          resolve();
        }
      });
    },
  },
};
