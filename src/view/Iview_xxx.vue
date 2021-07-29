<template>
  <div style="background: #eeeeee">
    <!-- 头部空位 -->
    <Row type="flex" justify="center">
      <Col span="18" style="height: 150px"></Col>
    </Row>

    <!-- 主体部分 -->
    <Row type="flex" justify="center">
      <Col span="18" style="height: 600px">
        <Layout>
          <Content
            style="display: flex; justify-content: center; background: #eeeeee"
          >
            <Card class="Card">
              <br />
              <h1 style="text-align: center; font-size: 32px">欢迎登陆</h1>
              <br />
              <div style="background-color: #dddddd; height: 2px"></div>
              <br />
              <Form
                class="Form"
                ref="formValidate"
                :model="formValidate"
                :rules="ruleValidate"
                :label-width="80"
              >
                <FormItem label="邮箱" prop="name">
                  <Input
                    v-model="formValidate.name"
                    placeholder="请输入邮箱"
                  ></Input>
                </FormItem>
                <FormItem label="密码" prop="password">
                  <Input
                    type="password"
                    v-model="formValidate.password"
                    placeholder="请输入密码"
                    password
                  ></Input>
                </FormItem>

                <FormItem prop="g"> </FormItem>

                <FormItem
                  v-show="formValidate.g == 'b'"
                  label="IP地址"
                  prop="ip"
                >
                  <Input v-model="formValidate.ip"></Input>
                </FormItem>
                <FormItem>
                  <!-- <Button type="primary" @click="handleSubmit('formValidate')" size='large'>Submit</Button> -->
                  <Button type="primary" v-on:click="check_in" size="large">
                    <span v-if="!formValidate.loading">提交</span>
                    <span v-else>Loading...</span>
                  </Button>
                  <!-- <Button type="primary" @click="handleSubmit('formValidate')" size='large'>Submit</Button> -->
                  <router-link to="iview_re"
                    ><Button style="margin-left: 8px" size="large"
                      >注册账号</Button
                    ></router-link
                  >
                </FormItem>
              </Form>
            </Card>
          </Content>
        </Layout>
      </Col>
    </Row>
  </div>
</template>

<script>
import { axiosGet, axiosPost } from "../data";

export default {
  data() {
    return {
      formValidate: {
        name: "",
        password: "",
        g: "a",
        ip: "http://192.168.101.55:8888/",
        loading: false,
      },
      ruleValidate: {
        name: [{ required: true, message: "邮箱不能为空", trigger: "blur" }],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" },],
        ip: [{ required: true, message: "后端IP地址不能为空", trigger: "blur" },],
        g: [{ required: true, message: "", trigger: "change" }],
      },
    };
  },
  methods: {
    check_in() {
      // console.log(this.formValidate)
      const self = this
      axiosPost("/login/login", {
        email_address: this.formValidate.name,
        // TODO: md5
        password: this.formValidate.password,
      }).then(function (res) {
        console.log(res);
        if (res.msg == "登录成功") {
          self.toLoading();
          self.fetchData();
        }
      })
    },
    handleSubmit(name) {
      //点击提交
      this.$refs[name].validate((valid) => {
        if (valid) {
          // this.$Message.success(`邮箱：${this.formValidate.name}，密码：${this.formValidate.password}`);
          // this.$router.push("/iview_index");
          if (this.formValidate.g == "a") {
            this.$Message.success(
              `邮箱：${this.formValidate.name}，密码：${this.formValidate.password}`
            );
            this.toLoading();
            this.fetchData();
            // this.$router.push("/iview_index");
          } else {
            this.$Message.success(
              `发送后端get：${this.formValidate.ip}${this.formValidate.name}`
            );
            this.toLoading();
            this.fetchData();
            // this.$router.push("/iview_index");
            //axios.get("api/getData.php", {
            //get_name: this.formValidate.name,
            //get_pwd: this.formValidate.password,
            //});
            //axios.get第一个参数是后端给我的接口地址
          }
        } else {
          this.$Message.error("格式错误，请检查！");
        }
      });
    },
    handleReset(name) {
      // 清除页面上的数据
      this.$refs[name].resetFields();
    },

    // 延迟
    fetchData() {
      setTimeout(() => {
        this.$router.push("/iview_index");
      }, 2000);
    },

    // 改变按钮的显示状态：loading中。。。
    toLoading() {
      this.formValidate.loading = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.Card {
  // 原生css
  border-radius: 30px;
  width: 370px;
  // justify-content: center; // 这样会使得Card里面的元素居中
  box-shadow: 5px 5px 5px 5px #cccccc;
}
.Form {
  padding: 5%;
}
</style>
