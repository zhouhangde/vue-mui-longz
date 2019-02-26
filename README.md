# vue-mui-longz
龙庄手机端


PostCSS是一款使用插件去转换CSS的工具，有许多非常好用的插件，例如autoprefixer,cssnext以及CSS Modules。

EditorConfig 能很好的“无痛”地解决ESLint 之类的一系列工具对代码进行编码规范的频繁验证

.babelrc是Babel的配置文件，放在项目根目录下，该文件用来设置转码规则和插件

.gitignore文件，在该文件中定义相应的忽略规则，来管理当前文件夹下的文件的Git提交行为

├── LICENSE
├── README.md
├── .env  // 环境变量配置文件
├── app.js  // Koa入口文件
├── build // vue-cli 生成，用于webpack监听、构建
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config // vue-cli 生成&自己加的一些配置文件
│   ├── default.conf
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── dist // Vue build 后的文件夹
│   ├── index.html // 入口文件
│   └── static // 静态资源
├── index.html // vue-cli生成，用于容纳Vue组件的主html文件。单页应用就只有一个html
├── package.json // npm的依赖、项目信息文件
├── server // Koa后端，用于提供Api
│   ├── config // 配置文件夹
│   ├── controllers // controller-控制器
│   ├── models // model-模型
│   ├── routes // route-路由
│   └── schema // schema-数据库表结构
├── src // vue-cli 生成&自己添加的utils工具类
│   ├── App.vue // 主文件
│   ├── assets // 相关静态资源存放
│   ├── components // 单文件组件
│   ├── main.js // 引入Vue等资源、挂载Vue的入口js
│   └── utils // 工具文件夹-封装的可复用的方法、功能
└── yarn.lock // 用yarn自动生成的lock文件

基于Mui的Vue组件库
http://ask.dcloud.net.cn/article/12694

mint -ui  移动端组件，暂时未用
http://mint-ui.github.io/docs/#/zh-cn2/switch