# DemoKit 起步项目

这是一个给“企业级移动端页面组件化演示”准备的本地项目。

## 先看这里

- [组件清单](./docs/01-组件清单.md)
- [组件使用规则](./docs/02-组件使用规则.md)
- [云端上传准备步骤](./docs/03-云端上传准备步骤.md)

## 现在已经有的内容

- `src/components`：放代码组件
- `src/pages`：放页面预览入口
- `src/page-specs`：放页面规格配置
- `src/mock-data`：放演示数据

## 本地启动

```bash
npm install
npm run dev
```

启动后打开终端里给出的本地地址，一般会是：

```bash
http://localhost:5173
```

## 下一步建议

1. 先在 `src/components` 里做一个 `NavBar` 组件。
2. 再做一个 `HotelCard` 组件。
3. 然后在 `src/page-specs` 和 `src/mock-data` 里补酒店列表页配置。
4. 最后再做一个真正的酒店列表预览页。
