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
      </Col>
    </Row>

    <!-- -------------主体------------- -->
    <Row type="flex" justify="center" style="padding: 0px 160px 200px 0">
      <!-- <Col span="15" style="background:#409eff;"> -->
      <Col span="30">
        <Card
          class="Card"
          v-for="heading in headings"
          :key="heading"
          style="padding: 10px 10px 10px 10px"
        >
          <h2>{{ heading }}</h2>

          <!-- <p style="font-size: 36px" align="center">输入吧~</p>-->

          <Row
            ><Col span="12">
              <Input
                type="date"
              
                placeholder="请输入起始查询⽇期（8位数字）"
                style="width: 500px"
                v-model="detail.start_date"
              />
            </Col>
          </Row>
          <br />
          <Row
            ><Col span="12">
              <Input
                type="date"
               
                placeholder="请输入结束查询⽇期（8位数字）"
                style="width: 500px"
                v-model="detail.end_date"
              /> </Col
          ></Row>
          <br />
          <Input
            type="text"
            maxlength="6"
            placeholder="请输入您感兴趣的股票代码（6位数字）"
            style="width: 500px"
            v-model="detail.stock_code"
          />

          <Button
            :loading="formValidate.loading"
            v-on:click="request"
            type="success"
            size="default"
            ><span v-if="!formValidate.loading">提交</span></Button
          >
          <router-link to="iview_answer"></router-link>

          <!--<Button size="long" type="success">点击提交</Button>-->
          <br />
        </Card>
      </Col>
      <Col span="30">
        <br />

        <Card
          class="Card"
          v-for="heading in headings"
          :key="heading"
          style="font-size: 24px"
        >
          <div>
            <strong>相关新闻排序:</strong>
            <!--<pre><a href="www,baidu.com">123</a><Tag style="font-size: 20px" checkable color="success">456</Tag></pre>-->
            <br /><br />
            <!--<List v-for="item in list" border size="large">
              <ListItem
                ><a v-bind:href="item.url" target="_blank"
                  >{{ item.title }}{{ item.date }}{{ item.source }}</a
                ><Tag style="font-size: 60px" size="large" checkable color="success"></Tag
              ></ListItem>
            </List>-->
            <Table stripe :columns="columns1" :data="data1"></Table>
          </div>
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
import { axiosGet, axiosPost } from "../data";
export default {
  data() {
    return {
      columns1: [
        {
          title: "Title",
          key: "title",
        },
        {
          title: "Date",
          key: "date",
          width: "170px",
        },
        {
          title: "Source",
          key: "source",
          width: "130px",
        },
        {
          title: "Url",
          key: "url",
        },
        {
          title: "Emot",
          key: "emot",
          width: "72px",
        },
      ],
      data1: [],
      headings: [""],
      welcome: "陆家嘴巨鳄",
      pj_name: "请输入您感兴趣的股票代码",
      formValidate: {
        loading: false,
      },
      list: [
        {
          url: "https://www.baidu.com",
          title: "这里是标题1",
          emot: "0",
        },
        {
          url: "https://www.zhihu.com",
          title: "这里是标题2",
          emot: "1",
        },
      ],
      detail: {
        stock_code: "",
        start_date: "",
        end_date: "",
      },
    };
  },
  methods: {
    request() {
      // console.log(this.formValidate)
      const self = this;
      axiosGet("/service/get_company_news", {
        stock_code: this.detail.stock_code,
        start_date: this.detail.start_date,
        end_date: this.detail.end_date,
      }).then(function (res) {
        console.log(res);
        if (res.msg == "查询成功") {
          self.toLoading();
          self.list = res.data.news;
          self.data1 = res.data.news;
        }
      });
    },
    // 延迟
    fetchData3() {
      setTimeout(() => {
        this.$router.push("/iview_answer");
      }, 2000);
    },

    // 改变按钮的显示状态：loading中。。。
    toLoading() {
      setTimeout(() => {
        this.formValidate.loading = true;
      }, 2);
    },
  },
};
</script>

<style lang="scss" scoped>
.Card {
  // 原生css
  background: #fbfbfb;
  width: 1500px;
  // height: 300px;
  display: inline-block;
  margin: 0.3em;
  border-radius: 20px;
  justify-content: center; // 这样会使得Card里面的元素居中
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
