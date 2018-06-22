# {{ name }}

> {{ description }}

## 运行

``` bash
npm install
npm run start

# 打包生产环境代码
npm run build
```

## 开发说明

### 如何声明一个页面

在 `src` 目录下创建以 `.page.js` 的页面入口文件。

### 如何为某个页面指定 `html` 模板

在 `xx.page.js` 同级目录下创建 `xx.html` 。

## 项目结构

```
src
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.page.js                // 页面入口文件，输出 build/index.html
├── logo.svg
├── pages
│   ├── home
│   │   ├── home.js
│   │   └── home.page.js         // 页面入口文件，输出 build/pages/home/home.html
│   ├── page1
│   │   ├── page1.html           // 为 page1.html 页面指定 html 模板
│   │   ├── page1.js
│   │   └── page1.page.js        // 页面入口文件，输出 build/pages/page1/page1.html
│   └── page2
│       ├── page2.css
│       ├── page2.js
│       └── page2.page.js        // 页面入口文件，输出 build/pages/page2/page2.html
└── registerServiceWorker.js
```
