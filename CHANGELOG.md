## 2.2.6

_2025-05-07_

### Features

- [#102](https://github.com/Z-J-wang/render-jupyter-notebook-vue/issues/102) 新增暗模式样式的支持

## 2.2.5

_2025-05-04_

### Bug fixes

- [#94](https://github.com/Z-J-wang/render-jupyter-notebook-vue/issues/94) 修复：Jupyter Theme 样式污染问题

## 2.2.4

_2024-12-10_

### Features

- [#87](https://github.com/Z-J-wang/render-jupyter-notebook-vue/issues/87) TypeScript 类型声明，新增 JupyterSource 类型

## 2.2.3

_2024-12-10_

### Bug fixes

- 修正 Jupyter 拼写错误问题

## 2.2.2

_2024-12-10_

### Changes

- 新增 TypeScript 类型声明文件

## 2.2.1

_2024-10-07_

### Changes

- class Notebook 构建函数参数校验优化
- class Notebook 的单元测试优化

## 2.2.0

_2024-09-27_

### Features

- [#64](https://github.com/Z-J-wang/render-jupyter-notebook-vue/issues/64) 新增首页，并发布与 Github Pages

### Changes

- [#63](https://github.com/Z-J-wang/render-jupyter-notebook-vue/issues/63) 引入 highlight.js，优化 notebook 中的 markdown 代码的渲染

## 2.1.0

_2024-08-31_

### Changes

- [#55](https://github.com/Z-J-wang/render-jupyter-notebook-vue/issues/55) `class notebook` 增加形参`mathJaxTypesetterConfig`，用于自定义`MathJaxTypesetter`的实例化配置

## 2.0.4

_2024-05-30_

### Changes

- 优化 readme.md 描述

## 2.0.3

_2024-04-19_

### Changes

- 优化 readme.md 描述

### Bug fixes

- [渲染 RenderJupyterNotebook 组件前必须要保证 notebook 数据已经获取到位，否则会报错。 · Issue #44 · Z-J-wang/render-jupyter-notebook-vue (github.com)](https://github.com/Z-J-wang/render-jupyter-notebook-vue/issues/44)

## 2.0.2

_2023-11-17_

### Changes

- 关闭打包时 sourceMap 的生成

## 2.0.1

_2023-06-07_

### Bug fixes

- 修复 notebook 中的**code 模块没有正常输出结果**导致渲染异常问题，同时增加渲染友好输出处理

## 2.0.0

_2023-04-25_

### Changes

- 调整 vue 的版本，改为 vue-demi

### Bug fixes

- 修复@/路径，在主项目中不能识别问题

## 1.0.0

_2023-02-04_

### Features

- 项目创建
- npm 发布
- 添加测试模块
