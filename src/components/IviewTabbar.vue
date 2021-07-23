<template>
    <div style="background:#eeeeee;font-size:20px;">

        <!-- -------------头部------------- -->
        <Row type="flex" justify="center" style="background:#409eff; font-size:15px; padding: 8px 0 10px 0;"> 
            <Col span="15">
                <h1 style="color:#fff">{{ pj_name }}</h1>
            </Col>
        </Row>
        
        <!-- -------------标签页面------------- -->
        <Row type="flex" justify="center"> 
            <Col span="15">
            <!-- {{ $route.params.name }} 这样能获取path -->
                <Tabs v-model="name" @on-click='l1(name)'>
                    <!-- 相当于v-model绑定value -->
                        <TabPane label="标签一" name="name1" >
                            <contentBar1></contentBar1>
                        </TabPane>

                        <TabPane label="标签二" name="name2" >
                            <contentBar2></contentBar2>
                        </TabPane>

                        <TabPane label="标签三" name="name3" >
                            <contentBar3></contentBar3>
                        </TabPane>
                </Tabs>
            </Col>
        </Row>

        <!-- -------------结尾------------- -->
        <Row type="flex" justify="center" style="padding: 20px 0 20px 0;">
        <!-- <Col span="15" style="background:#409eff;"> -->
            <Col span="15" >
                <div style="background-color:#bbbbbb;height:2px;"></div>
                <br>
                <p>© 2020 Company, Inc.</p>
            </Col>
        </Row>

    </div>
</template>

<script>
    //import contentBar1 from '../view/Iview_router_1/Iview_router_1_r1';
    //import contentBar2 from '../view/Iview_router_1/Iview_router_1_r2';
    //import contentBar3 from '../view/Iview_router_1/Iview_router_1_r3';
    export default {
        data () {
            return {
                headings:['1Heading','2Heading','3Heading', '4Heading','5Heading','6Heading'],
                pj_name: 'Project Name',
                name:''
            }
        },
        methods: {
                l1(name)
                {
                    // console.log('labal:'+this.name);
                    this.$router.push('/iview_router/'+name)
                },
            },
        //components:{
        //    contentBar1,
        //    contentBar2,
        //    contentBar3,
        //},
        // mounted(){
        //     this.name=this.$route.params.name;
        // },
        // created(){
        //     this.name=this.$route.params.name;
        // },
        // beforeUpdate(){
        //     // this.name=this.$route.params.name;
        // },
        // updated() {
        //     this.name=this.$route.params.name;
        // },
        // // 上述方法都不理想，所以看官网，给出答案：组件复用~！要用下面监听！
        watch: {
            $route(to, from) {
            // 对路由变化作出响应...
            this.name=this.$route.params.name;
            }
        }

    }
</script>

<style lang="scss" scoped>

.Card{ // 原生css
    background:#fbfbfb;
    width: 305px;
    // height: 300px;
    display: inline-block;
    margin: 0.3em;
    border-radius:20px;
    // justify-content: center; // 这样会使得Card里面的元素居中
    box-shadow: 5px 5px 5px 5px #cccccc; 
}

.Form{
    padding: 5%;
}
</style>
