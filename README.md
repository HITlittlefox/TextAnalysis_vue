# 魔改后“能用”的前端登陆界面：
# 关键词：login、index、详情页、vue、vue-ui、router、axios、md5加密、前端分页

ip与端口的修改：`data.js`文件中`serverAddr`
mock ip:port    `const serverAddr = "http://localhost:3000"`

## 第一页：登录Iview_xxx、注册Iview_xxx_re、提交数据Iview_yyy

## 需要用到的依赖与东西：
viewui、vue-cli、router、axios
(npm换成淘宝镜像源后可以使用cnpm)
```bash
cnpm install
cnpm install -g @vue/cli
cnpm install vue-router view-design axios
cnpm run serve
```

mock后端启动\mock的用法：
```bash
textanalysis_vue目录下：cd mock-server
安装依赖：npm install
启动mock后端：node index.js
挂起即可。
```

MIT
