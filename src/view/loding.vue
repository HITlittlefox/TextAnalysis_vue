<template>
  <div>
    <div v-if="loading" style="background:sandybrown;">
      Loading...
    </div>

    <div v-if="post" >
      <h2>已加载数据！</h2>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      post: false,
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
        setTimeout(
            () => {this.loading = false;this.post = true;},
            2000); 
    },
  }
}
</script>
