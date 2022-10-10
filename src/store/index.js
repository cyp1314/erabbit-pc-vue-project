import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'

const moduleA = {
  // 子模块state建议写成函数
  state: () => {
    return {
      username: '模块A'
    }
  },
  getters: {
    changeName (state) {
      return state.username + 'AAAAAAAAA'
    }
  }
}
const moduleB = {
  // 带命名空间的模块
  namespaced: true,
  state: () => {
    return {
      username: '模块B'
    }
  },
  getters: {
    changeName (state) {
      return state.username + 'BBBBBBB'
    }
  },
  mutations: {
    // 修改名字的mutation
    update (state) {
      state.username = 'BBBBBB' + state.username
    }
  },
  actions: {
    update ({ commit }) {
      // 假设请求
      setTimeout(() => {
        commit('update')
      }, 2000)
    }
  }
}
// 创建vuex仓库并导出
export default createStore({
  state: {
    // 数据
    username: 'zs',
    person: [
      { id: 1, name: 'tom', gender: '男' },
      { id: 2, name: 'lucy', gender: '女' },
      { id: 3, name: 'jack', gender: '男' }
    ]
  },
  getters: {
    // vuex的计算属性
    newName (state) {
      return state.username + '!!!'
    },
    boys: (state) => {
      return state.person.filter(p => p.gender === '男')
    }
  },
  mutations: {
    // 改数据函数
    updateName (state) {
      state.username = 'ls'
    }
  },
  actions: {
    // 请求数据函数
    updateName (ctx) {
      // 发请求
      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000)
    }
  },
  modules: {
    // 分模块
    a: moduleA,
    b: moduleB,
    user,
    cart,
    category
  },
  plugins: [
    createPersistedstate({
      key: 'erabbit-client-pc-store',
      paths: ['user', 'cart', 'category']
    })
  ]
})
