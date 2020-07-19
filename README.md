# React-Demo



## 技术栈

`react` + `umijs`+`typescript` +`react hook`

- [react](https://react.docschina.org/)
- [umijs](https://umijs.org/zh-CN)
- [typescript](https://www.typescriptlang.org/)

### 核心的技术栈选型的理由

- `umijs`相对于其他脚手架，可扩展，开箱即用，自带常用的工具，`Mock`，`router`等等，这项目不是学习`webpack`的，所以最终选择了`umijs`
- `typescript`，我是新手，但是真香
- `react hook` 听说很牛逼



## 目录结构

```bash
│  .umirc.ts
│  package.json
│  tsconfig.json
│
├─mock
│
└─src
    │  app.ts
    │  global.css 
    │
    ├─components
    │
    ├─pages
    │
    ├─store
    │
    ├─styles
    │
```



## 运行项目

```bash
 git clone https://github.com/liangjiayu/react-demo.git

 cd react-demo

 npm i  或者运行  yarn(推荐)

 npm run start
 
 npm run build

```



## 个人感悟

### 

### React 样式方案

- `css module`  开箱即用的方案，但是个人不喜欢，`css`命名限制，嵌套限制等等
- `styled-components` 没有具体使用，但是`css in js `应该会丢失许多预处理样式的好处
- `less +  style`，通过`bem`来限制样式冲突，虽然可能会冲突，但是样式的全名就是`层叠样式表`，ps：我是`scss`的用户，`scss`不香吗？



### React Hook

- 作为一名`react`的新手， 用函数来写组件是一件很爽的事情，函数+`hook`，就可以组成一个小组件，数据的传递很明确，通过`props`，`hook`可以把逻辑拆分的很细节，应该是未来的趋势
- 核心`api`  [useState](https://react.docschina.org/docs/hooks-state.html)  [useEffect](https://react.docschina.org/docs/hooks-effect.html) 



### React  reducer

```react
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

