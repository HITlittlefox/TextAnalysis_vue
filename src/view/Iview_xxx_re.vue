<template>
  <div style="background: #eeeeee">
    <!-- 头部空位 -->
    <Row type="flex" justify="center">
      <Col span="18" style="height: 150px"></Col>
    </Row>

    <!-- 主体部分 -->
    <Row type="flex" justify="center">
      <Col span="18" style="height: 1000px">
        <Layout>
          <Content style="display: flex; justify-content: center; background: #eeeeee">
            <Card class="Card">
              <br />
              <h1 style="text-align: center; font-size: 32px">您正在注册</h1>
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
                  <Input v-model="formValidate.name" placeholder="请输入邮箱"></Input>
                </FormItem>
                <FormItem label="密码" prop="password">
                  <Input
                    type="password"
                    v-model="formValidate.password"
                    placeholder="请输入密码"
                    password
                  ></Input>
                </FormItem>

                <!--确认密码-->
              <FormItem label="重复密码" prop="againpassword">
             <Input v-model="formValidate.againpassword" type="password" placeholder="再次输入密码" password></Input>
             <!--<Icon type="ios-checkmark-circle" v-if="changeAgainFlag == 1" color="#35B449"/>
             <Icon type="md-close-circle" v-else-if="changeAgainFlag == 2" color="#f00"/>-->
              </FormItem>


                <FormItem label="验证码" prop="name">
                  <Input
                    v-model="formValidate.authcode"
                    placeholder="请输入验证码"
                  ></Input>
                  <Button v-on:click="push_email" type="primary" size="small"
                    >获取验证码</Button
                  >
                </FormItem>
                <FormItem prop="g">
                  <RadioGroup v-model="formValidate.g">
                    <!-- 官方资料显示：laber只能是string或者namber -->
                  </RadioGroup>
                </FormItem>

                <FormItem v-show="formValidate.g == 'b'" label="IP地址" prop="ip">
                  <Input v-model="formValidate.ip"></Input>
                </FormItem>
                <FormItem>
                  <!-- <Button type="primary" @click="handleSubmit('formValidate')" size='large'>Submit</Button> -->
                  <Button
                    type="primary"
                    :loading="formValidate.loading"
                    v-on:click="xxx_re"
                    size="large"
                  >
                    <span v-if="!formValidate.loading">提交</span>
                    <span v-else>Loading...</span>
                  </Button>
                  <!-- <Button type="primary" @click="handleSubmit('formValidate')" size='large'>Submit</Button> -->
                  <router-link to="iview_login"
                    ><Button style="margin-left: 8px" size="large"
                      >回到首页</Button
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
      // 重复密码验证
    const pwdAgainCheck = async(rule, value, callback) => {
      if (value.length < 1) {
        this.changeAgainFlag = 2;
        return callback(new Error('重复密码不能为空！'));
      } else if(this.formValidate.password != this.formValidate.againpassword){
        this.changeAgainFlag = 2;
        return callback(new Error('两次输入密码不一致！'));
      }else{
        this.changeAgainFlag = 1;
        callback()
      }
    };
    return {
      formValidate: {
        name: "",
        password: "",
        againpassword: "",
        g: "a",
        ip: "http://192.168.101.55:8888/",
        loading: false,
        authcode: "",
      },
      ruleValidate: {
        name: [{ required: true, message: "邮箱不能为空", trigger: "blur" }],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
        againpassword: [{ required: true,validator: pwdAgainCheck, message: "重复密码不能为空", trigger: "blur" }],
        ip: [{ required: true, message: "后端IP地址不能为空", trigger: "blur" }],
        g: [{ required: true, message: "", trigger: "change" }],
      },
    };
  },
  methods: {
    xxx_re() {
      // console.log(this.formValidate)
      const self = this;
      this.formValidate.password=md5(this.formValidate.password)
      axiosPost("/register/register", {
        email_address: this.formValidate.name,
        verify_code: this.formValidate.authcode,
        password: this.formValidate.password,
        // TODO: md5
      }).then(function (res) {
        console.log(res);
        if (res.msg == "注册成功") {
          self.toLoading();
          self.fetchData2();
        }
      });
    },
    push_email() {
      // console.log(this.formValidate)
      const self = this;
      axiosGet("/register/get_email_verify", {
        email_address: this.formValidate.name,
        // TODO: md5
      }).then(function (res) {
        console.log(res);
      });
    },
    // 延迟
    fetchData2() {
      setTimeout(() => {
        this.$router.push("/iview_login");
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
