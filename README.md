<div>
  <a href="https://reactjs.org/">
    <img width="200" height="200"
      src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg">
  </a>
</div>
</br>

[![NPM version](https://img.shields.io/npm/v/react-gant.svg)](https://www.npmjs.com/package/react-gant)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yangzaiwangzi/gant/blob/main/LICENSE) 


### 效果预览
![1.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d3b4277bb15c4133ac584d91275da934~tplv-k3u1fbpfcp-watermark.image?)


![2.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f413ea2eda8c40c08dc07947a8790fb5~tplv-k3u1fbpfcp-watermark.image?)

### 简介
react 甘特图组件，支持子任务，背景色可配置，状态可配置

### 使用
```
# 下载依赖
npm install -S react-gant

# 引用使用
import gant from 'react-gant';

# 使用
<gant data={[]}></gant>
```

### 文档
#### 属性

|      Name      |  Type   | Description                                                           |
| :------------: | :-----: | :-------------------------------------------------------------------- |
|      data      |  Array  | 数据源，详细结构见下                                                  |
|      year      | Number  | 年                                                                    |
|     month      | Number  | 月                                                                    |
|   emptyText    | String  | 没有数据时的现显示文案                                                |
| showTodaylable | Boolean | 是否显示【今天】的标识                                                |
|     legend     | Object  | 图例的配置，详细见下                                                  |
|  nowTimeLine   | Object  | 是否显示当前时间线，详细见下                                          |
|    stateMap    | Object  | 数据状态显示的背景色和label配置，详细见下                             |
|      mode      | String  | 视图展示样式，2种， 常规(normal)｜紧凑(compact)，效果可见下子属性描述 |
|     order      | Object  | 传入的data数据是否按照startTime排序，详细见下                         |


#### 子属性 legend 

甘特图上方，图例显示设置

|   Name   |  Type   | Description                 |
| :------: | :-----: | :-------------------------- |
|   show   | Boolean | 是否显示                    |
| position | String  | 位置：left｜right，默认left |
#### 子属性 nowTimeLine 

显示竖红线，显示当前时间时分，默认一分钟更新一次

|   Name   |  Type   | Description                                |
| :------: | :-----: | :----------------------------------------- |
|   show   | Boolean | 是否显示                                   |
| duration | Number  | 更新时间，毫秒，不可小于60000ms，默认60000 |
#### 子属性 stateMap 

对象类型，配置数据在视图显示背景色，目前支持6种状态，1个子任务，具体见下DOME

|  state  | backgroundColor default | label default |
| :-----: | :---------------------: | :------------ |
| waiting |         #C6D57E         | 等待          |
| primary |         #A2D2FF         | 正常          |
| success |         #61B15A         | 成功          |
| warning |         #FFC93C         | 警告          |
|  error  |         #FA1E0E         | 异常          |
| closed  |         #DDDDDD         | 关闭          |
| subTask |         #7868e6         | 子任务        |
#### 子属性 order 

传入的data数据是否按照 startTime 排序设置，安排 startTime从小到大排序后的数据，在【紧凑】模式下，效果更好。内部排序需要时间和性能，酌情配置。

| Name  |  Type   | Description                                                                                        |
| :---: | :-----: | :------------------------------------------------------------------------------------------------- |
| well  | Boolean | true｜false，源数据是否已经为有序。已有序，内部不在做排序处理，节省性能                            |
| need  | Boolean | true｜false，是否需要内部排序处理。well配置为 false 时才有效，即：源数据本无序，是否需要做排序处理 |
#### 子属性 mode

常规模式示意图

![21.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4bc78bada80a4a559c52271d88a151e9~tplv-k3u1fbpfcp-watermark.image?)

紧凑模式示意图（能一行显示的，就合并为一行显示）

![22.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e06d678bfa5047ee94e123c1e0bd8c04~tplv-k3u1fbpfcp-watermark.image?)
### 事件

|      Name       |   Type   | Description  | Params               |
| :-------------: | :------: | :----------- | :------------------- |
|   onTaskClick   | Function | 任务被点击   | 当前任务的详细数据   |
| onTaskItemClick | Function | 子任务被点击 | 当前子任务的详细数据 |

### 核心属性 data

满足下面数据结构即可正确展示，注意每条任务数据 id 为必须的，作为 react 的 key 使用

```javascript
[{
    title: "张三", // 每条数据展示于左侧的内容
    id: "x-1",    // 每条数据唯一的标识
    tasks: [      // 任务列表
      {
        title: "单向数据流和数据双向绑定的区别还有各自的优缺点", // 任务的概述
        startTime: 1635696000000, // 任务开始时间
        endTime: 1636559999000,   // 任务结束时间 
        id: "x-sub-2",            // 每条任务的唯一标识
        state: 'success',         // 任务的状态，5个，具体见文档
      },
      {
        title: "单向数据流和数据双向绑定的区别还有各自的优缺点",
        startTime: 1635696000000,
        endTime: 1636559999000,
        id: "x-sub-3",
        state: 'primary',
        subTasks: [              // 主任务下的子任务内容
          {
            title: "先说说我为什么要做这么一个东西吧。最大原因就是自己太懒了，其次就是，后台管理这个东西，来来去去就是那么几个东西，查询，Form表单，Table表格，弹窗之类的一些东西，加上一个增删改查的一些逻辑，反正我呆过两家公司的后管都是这些，我猜大伙家的后管也不离其中吧。做久了这类东西，就感觉写代码没什么意思，复制黏贴，复制黏贴，一开始太开心的，做着做着，就开始迷茫了",
            startTime: 1635696000000,
            endTime: 1635955199000,
            id: "0subc-1",
          },
          {
            title: "先说说我为什么要做这么一个东西吧。最大原因就是自己太懒了，其次就是，后台管理这个东西，来来去去就是那么几个东西，查询，Form表单，Table表格，弹窗之类的一些东西，加上一个增删改查的一些逻辑，反正我呆过两家公司的后管都是这些，我猜大伙家的后管也不离其中吧。做久了这类东西，就感觉写代码没什么意思，复制黏贴，复制黏贴，一开始太开心的，做着做着，就开始迷茫了",
            startTime: 1635955199000,
            endTime: 1636127999000,
            id: "0subc-2",
          },
          {
            title: "先说说我为什么要做这么一个东西吧。最大原因就是自己太懒了，其次就是，后台管理这个东西，来来去去就是那么几个东西，查询，Form表单，Table表格，弹窗之类的一些东西，加上一个增删改查的一些逻辑，反正我呆过两家公司的后管都是这些，我猜大伙家的后管也不离其中吧。做久了这类东西，就感觉写代码没什么意思，复制黏贴，复制黏贴，一开始太开心的，做着做着，就开始迷茫了",
            startTime: 1636127999000,
            endTime: 1636559999000,
            id: "0subc-3",
          },
          {
            title: "先说说我为什么要做这么一个东西吧。最大原因就是自己太懒了，其次就是，后台管理这个东西，来来去去就是那么几个东西，查询，Form表单，Table表格，弹窗之类的一些东西，加上一个增删改查的一些逻辑，反正我呆过两家公司的后管都是这些，我猜大伙家的后管也不离其中吧。做久了这类东西，就感觉写代码没什么意思，复制黏贴，复制黏贴，一开始太开心的，做着做着，就开始迷茫了",
            startTime: 1636127999000,
            endTime: 1636559999000,
            id: "0subc-4",
          },
        ],
      },  
    ]
  }]
```

### DOME

```javascript

import Gant from "gant";

const __STATEMAP = {
  waiting: {
    bgColor: '#C6D57E',
    label: '等待'
  },
  primary: {
    bgColor: '#A2D2FF',
    label: '正常'
  },
  success: {
    bgColor: '#61B15A',
    label: '成功'
  },
  warning: {
    bgColor: '#FFC93C',
    label: '警告'
  },
  error: {
    bgColor: '#FA1E0E',
    label: '异常'
  },
  closed: {
    bgColor: '#DDDDDD',
    label: '关闭'
  },
  subTask: {
    bgColor: '#7868e6',
    label: '子任务'
  },
};


const App = () => {

  return (
    <div style={{ height: "600px" }}>

      <Gant
        data={data} // 自行按照上述文档定义并传入
        year={2021}
        month={11}
        emptyText="没有数据啦..."
        onTaskClick={(data) => {
          console.log('任务被点击：', data);
        }}
        onTaskItemClick={(data) => {
          console.log('子任务被点击：', data);
        }}
        legend={{
          show: true,
          position: 'left'
        }}
        showTodaylable={true}
        nowTimeLine={{
          show: true,
          duration: 60000
        }}
        stateMap={__STATEMAP}
      ></Gant>
      
    </div>
  );
};

export default App;


```