<template>
  <div style="background: #eeeeee; font-size: 20px">
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
        <h2 style="font-size: 40px" align="center">Hello,{{ welcome }}！</h2>
        <p style="font-size: 40px" align="center">
          <!--This is a template for a simple marketing or informational website. It includes
          a large callout called a jumbotron and three supporting pieces of content. Use
          it as a starting point to create something more unique.-->
          当您输入一串神秘代码，我们的后台将使用神秘程序对其进行神秘总结，并打分。<Button
            style="text-align: center"    
            type="primary"
            to="http://www.baidu.com"
            target="_blank"
            >Learn more >></Button
          >
        </p>
        <br />
      </Col>
    </Row>

    <!-- -------------主体------------- -->
    <Row type="flex" justify="center" style="padding: 0px 0 200px 0">
      <!-- <Col span="15" style="background:#409eff;"> -->
      <Col span="30">
        <Card class="Card" v-for="heading in headings" :key="heading" style="padding: 10px 10px 10px 10px">
          <br />
          <h2>{{ heading }}</h2>
          <br />
         <!-- <p style="font-size: 36px" align="center">输入吧~</p>-->

          <Input type="text" style="height:135px;width:700px;font-size: 80px" v-model="detail.title" placeholder="请输入内容" size="large" autofocus></Input>
          <router-link to="iview_answer"><Button onclick="request"  style="height:40px" type="success" size="large">提交</Button></router-link>

          <!--<Button size="long" type="success">点击提交</Button>-->
          <br />
          <br />
        </Card>
      </Col>
    </Row>

    <!-- -------------结尾------------- -->
    <Row type="flex" justify="center" style="padding: 20px 0 20px 0">
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
export default {
  data() {
    return {
      headings: [""],
      welcome: "陆家嘴巨鳄",
      pj_name: "请输入您感兴趣的股票代码",
      detail: {
        title: "",
      },
    };
  },
  methods: {
    request() {
      this.axios.get('/url/xxx', {
        params: {
          get_name: this.detail.title,
        },
      })
            //this.toLoading();
            //this.fetchData();
    }
  },
};
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
//.Card2 {
//  // 原生css
//  background: #fbfbfb;
//  width: 600px;
//  height: 60px;
//  display: inline-block;
//  margin: 0.3em;
//  border-radius: 20px;
//  justify-content: center; // 这样会使得Card里面的元素居中
//  //box-shadow: 5px 5px 5px 5px #cccccc;
//}

.Form {
  padding: 5%;
}
</style>
