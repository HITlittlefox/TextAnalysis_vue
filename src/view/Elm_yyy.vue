<template>
  <div id="app" >
    <el-row style="padding: 15px 0 5px 0" class="row-header" type="flex" justify="center" >
      <el-col :span="15" >
        <h2 class='header-h2'>{{ pj_name }}</h2>
      </el-col>
    </el-row>

    
    <el-row style="background:#eeeeee;padding: 60px 0 20px 0" type="flex" justify="center" >
      <el-col :span="15">
        <h1 style="font-size:50px" >Hello,{{ welcome }},...</h1>
        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        <br>
        <el-button type="primary">Learn more >></el-button>
      </el-col>
    </el-row>


    <el-row style="background:#eeeeee;"  type="flex" justify="center" >
      <el-col :span="15" >
        <el-card style="padding: 30px 0 18px 0;" shadow="never" v-for="heading in headings" :key=heading>
          <h2>{{heading}}</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
          <el-button size="small">View details >></el-button>
        </el-card>
      </el-col>
    </el-row>
         

    <el-row style="background:#eeeeee" type="flex" justify="center" >
      <el-col :span="15" >
        <el-divider></el-divider>
        <p>© 2020 Company, Inc.</p>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import Vue from 'vue';
    export default {
        data() 
        {
            return {
                headings:['1Heading','2Heading','3Heading', '4Heading','5Heading','6Heading'],
                welcome: 'Vue.js,Element-UI',
                pj_name: 'Project Name'
            };
        },
        methods: {
            submitForm(formName) 
            {
                this.$refs[formName].validate((valid) => 
                    {
                        if (valid) 
                        {
                            alert('Name:'+this.nameValidateForm.name+';Password:'+this.nameValidateForm.password);
                            // console.log(this.nameValidateForm.name);
                        } else 
                        {
                            console.log('error submit!!');
                            return false;
                        }
                    }
                );
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style lang="scss" scoped>
  .el-card{
    background:#fbfbfb;
    width: 300px;
    display: inline-block;
    margin: 0.3em;
    border-radius:20px;
  }

  .header-h2{
    color:#d1d1d1 ;
    // font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    // font-size: 60px Extra large;
  }
  .header-h2:hover{
 color:#fff ;
  }
.row-header{
  background:#409eff;
  
}


</style>
