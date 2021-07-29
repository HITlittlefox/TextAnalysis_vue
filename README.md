# 魔改后“能用”的前端登陆界面：
# 关键词：login、index、详情页、vue、vue-ui、router、axios

## 需要用到的依赖与东西：
viewui、vue-cli、router、axios
(npm换成淘宝镜像源后可以使用cnpm)
```bash
cnpm install -g @vue/cli
cnpm install vue-router view-design axios
```

---
以下为原readme.md

# hello_2
--------------------------------------------常用--------------------------------------------
## ViewUI安装与引入
### 安装
```bash
cnpm install view-design --save
```
### 引入
```bash
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
```

## ElementUI安装与引入
### 安装
```bash
cnpm i element-ui -S
```
### 引入
```js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
```

## less or sass 安装
若安装了UI库后，报cass和less错误，则以下安装
```bash
cnpm install --save sass-loader node-sass
cnpm install --save less-loader node-less
```

## vue-cli安装与新建
### cli安装
```bash
cnpm install -g @vue/cli
```
### cli查看版本
```bash
vue --version
```
### cli创建一个项目
```bash
vue create hello-world
```

## vue-router安装与使用
### vue-router安装
```bash
cnpm install vue-router
```
### vue-router使用
```vue
import VueRouter from 'vue-router'
Vue.use(VueRouter)
<router-view></router-view>
<router-link>
```

--------------------------------------------项目安装--------------------------------------------
## Project setup
```
cnpm install
```
### Compiles and hot-reloads for development
```
cnpm run serve
```
### Compiles and minifies for production
```
cnpm run build
```

# TextAnalysis_vue
