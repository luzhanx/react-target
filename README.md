# React版本小目标


### 项目依赖
```
 redux                  Redux
 react-redux            Redux
 redux-thunk            可以在action返回函数 处理网络请求
 react-router-dom       React路由
 react-loadable         异步组件
 babel-plugin-import    是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式
 postcss-pxtorem        是一款 postcss 插件，用于将单位转化为 rem
 lib-flexible           用于设置 rem 基准值
 install antd-mobile    是 Ant Design 的移动规范的 React 实现，服务于蚂蚁及口碑无线业务。
```

# 项目配置
#### redux 安装
cnpm i redux react-redux --save
项目目录store目录 
```
index.js
import { createStore } from "redux";
import reducer from './reducer';

const store = createStore(reducer,);

export default store;
-------------------------------------------------------------
reducer.js 合并全部reducer
import {combineReducers} from 'redux';
import xxxReducer from './../xxx/xxxReducer/store/reducer';

const reducer = combineReducers({
    xxx: xxxReducer
});
export default reducer;
-------------------------------------------------------------
action.js 
import axios from 'axios';

export const Types = {
  TYPE: 'type',
};

export const typeAction = value => ({
  type: Types.TYPE,
  value: value,
});

函数式
export const getList = () => {
  return dispatch => {
    axios.get ('/api/data.json').then (res => {
      dispatch (typeAction (res.data.list));
    });
  };
};
组件链接Store
import {Provider} from 'react-redux';
<Provider store={store}>
    xxx
</Provider>
组件链接
import {connect} from 'react-redux';
const mapStateToProps = store => {
  return {
    xxx: store.xxx,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    func () {
      dispatch ();
    },
  };
};
export default connect (mapStateToProps, mapDispatchToProps) (Login);

页面 reducer.js
import {Types} from './action';

const defaultState = {
  pageName: 'login',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

```
#### redux-thunk
```
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store;
```

#### 基本依赖 Webpack3
postcss-pxtorem        是一款 postcss 插件，用于将单位转化为 rem
lib-flexible           用于设置 rem 基准值 首页引用

#### px转rem
npm install postcss-pxtorem --save-dev

```
const pxtorem = require('postcss-pxtorem');
pxtorem({ rootValue: 75, propWhiteList: [] })
```

#### 按需加载 
npm install babel-pluigin-import --save-dev
```
// Process JS with Babel.
{
    test: /\.(js|jsx|mjs)$/,
    include: paths.appSrc,
    loader: require.resolve ('babel-loader'),
    options: {
        plugins: [
            ["import", { libraryName: "antd-mobile", style: "css" }]
        ],
        cacheDirectory: true,
    },
},
 ```
#### 异步组件 react-loadable
npm i --save react-loadable
新建loadable.js文件
```
import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable ({
  loader: () => import ('./'),
  loading () {
    return <div>页面加载中Loading...</div>;
  },
});

export default () => <LoadableComponent />;
```

#### 添加less处理
npm install less less-loader --save-dev
```
test: /\.(css|less)$/,
{
    loader: require.resolve('less-loader')
},
```

#### 配置路径别名
```
resolve: {
    alias: {
        '@': path.resolve("src")
    }
}
```
#### js控制路由
npm i prop-types --save
```
import {withRouter} from 'react-router-dom';
this.props.history.push('/login')

```

#### React Build打包路径问题
在package.json里加 "homepage":"." 

#### 删除打包生成的.map文件
webpack.config.prod.js 57行 devtool 改成 false

#### 常用浏览器全屏设置
```
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">

<!-- UC强制全屏 --> 
<meta name="full-screen" content="yes">

<!-- UC应用模式 --> 
<meta name="browsermode" content="application">

<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">

<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">

<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
```

