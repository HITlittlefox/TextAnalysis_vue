<template>
    <div style="font-size:20px;">

        <Row type="flex" justify="center" style="padding: 40px 0 40px 0;">
            <Col span="18">
                <br>
                <h1 style="font-size:50px" >Hello,{{ welcome }},...</h1>
                <p>{{ content_text }}</p>
                <br>
                <Button size='large' type="primary">Learn more >></Button>
            </Col>
        </Row>


    </div>
</template>

<script>
    export default {
        data () {
            return {
                content_text:'This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.',
                welcome: 'Vue.js,Element-UI',
            }
        },
        methods: {
  
            },
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
