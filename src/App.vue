<template>
  <div>
    App
    <!-- 1. 使用根模块state的数据   -->
    <p>{{$store.state.username}}</p>
    <!-- 2. 使用根模块getters的数据   -->
    <p>{{$store.getters['newName']}}</p>
    <button @click="mutationsFn">mutationsFn</button>
    <hr />
    <ul>
      <li v-for="item in $store.getters.boys" :key="item.id">{{item.name}}</li>
    </ul>
    <hr />
    <!-- 使用模块A的username -->
    <p>A的username --- {{$store.state.a.username}}</p>
    <p>A的changeName --- {{$store.getters.changeName}}</p>
    <hr />
    <p>B的username --- {{$store.state.b.username}}</p>
    <p>B的changeName --- {{$store.getters['b/changeName']}}</p>
    <button @click="$store.commit('b/update')">修改username</button>
    <button @click="$store.dispatch('b/update')">异步修改username</button>
    <hr />
    <!-- 修改数据，测试是否持久化 -->
    App {{$store.state.user.profile.account}}
    <button @click="$store.commit('user/setUser',{account:'zhousg'})">设置用户信息</button>
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
const store = useStore()
const mutationsFn = () => {
  store.dispatch('updateName')
}
</script>
<style lang="less">

</style>
