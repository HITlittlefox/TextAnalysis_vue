<template>
  <div style="background: #eeeeee; font-size: 20px" >
    <!-- -------------头部------------- -->
    <Row
      type="flex"
      justify="center"
      style="background: #409eff; font-size: 15px; padding: 8px 0 10px 0"
    >
      <Col span="15">
        <h1 style="color: #fff" align="center">{{ pj_name }}</h1>
      </Col>
    </Row>

    <!-- -------------简介------------- -->
    <Row type="flex" justify="center" style="padding: 40px 0 40px 0">
      <Col span="15">
        <br />
        <h2 style="font-size: 40px" align="center">
          这里将显示您的股票代码相关的新闻及其标签
        </h2>

        <br />
      </Col>
    </Row>

    <!-- -------------主体------------- -->
    <Row type="flex" justify="center" style="padding: 0px 0 30px 0">
      <!-- <Col span="15" style="background:#409eff;"> -->
      <Col span="30">
        <Card class="Card" v-for="heading in headings" :key="heading" style="font-size: 24px">
          <div >
            <strong>Large Size:</strong>
            <!--<pre><a href="www,baidu.com">123</a><Tag style="font-size: 20px" checkable color="success">456</Tag></pre>-->
            <br /><br />
            <List v-for="item in list" header="" footer="" border size="large">
              <ListItem><a  v-bind:href="item.new_url" target="_blank">{{item.new_headline}}</a><Tag style="font-size: 20px" checkable color="success">利好</Tag></ListItem>
            </List>
          </div>
        </Card>
      </Col>
    </Row>

    <!-- -------------结尾------------- -->
    <Row type="flex" justify="center" style="padding: 20px 0 200px 0">
      <!-- <Col span="15" style="background:#409eff;"> -->
      <Col span="15">
        <div style="background-color: #bbbbbb; height: 2px"></div>
        <br />
        <p>© 2020 Company, Inc.</p>
      </Col>
    </Row>
  </div>
</template>

<script>

import Vue from 'vue';
export default {
  data() {
    return {
  list:[{
    "new_url":'https://www.baidu.com',
    "new_headline":"这里是标题1",
    "new_score":'6'
  },{
    "new_url":'https://www.zhihu.com',
    "new_headline":"这里是标题2",
    "new_score":'7'
  }],
      headings: [""],
      //welcome: "陆家嘴巨鳄",
      pj_name: "请输入您感兴趣的股票代码",
      detail: {
        title: "",
      },
    };
  },
  //created(){
//
  //  this.new_url='https://www.baidu.com';
  //  this.new_headline="这里是标题";
  //  this.new_score='6'
  //},
  methods: {
    request() {
      this.axios.get("/url/xxx", {
        params: {
          get_name: this.detail.title,
        },
      });
    },
  },
};
//var ne=new Vue({
//  el:"app",
//  data:{
//    new_url:"https://www.baidu.com",
//    new_headline:"a"
//  }
//})
</script>

<style lang="scss" scoped>
.Card {
  // 原生css
  background: #fbfbfb;
  width: 860px;
  // height: 300px;
  display: inline-block;
  margin: 0.3em;
  border-radius: 20px;
  // justify-content: center; // 这样会使得Card里面的元素居中
  box-shadow: 5px 5px 5px 5px #cccccc;
}

.Form {
  padding: 5%;
}
</style>
