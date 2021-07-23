<template>
  <div>
    <iviewtabbar></iviewtabbar>
    <router-view></router-view>
    {{news}}
  </div>
</template>

<script>
// -------------说明：这个文件/view/Iview_router_1.vue 演示动态路由跳转--------------
import iviewtabbar from '../components/IviewTabbar';
export default {
    methods:{
    },
    props:['news'],
    components:{
        iviewtabbar,
    },

    // 组件内的局部守卫放在某个组件里面
    beforeRouteEnter (to, from, next) 
    {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    
        if (true) {next()};
        // if (false) {next()};
    },
    mounted(){
      // 在mounted里面写则组件创建完毕后
    }
}
</script>

<style>
</style>