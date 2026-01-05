---
title: 文档模板
date: 2025-12-28 16:00:00
categories:
  - 模板
tags:
  - 模板
titleTag: null
top: false  # 博客精选
sticky: 0   # 主页置顶
sidebar: false
article: true
comment: true
description: 文章摘要
docAnalysis: true
inCatalogue: true
autoTitle: true
articleUpdate: true
inHomePost: true
sidebarSort: 9999
articleBanner: true
coverColor: null
coverImg: /blog/DragaliaLost/2.png
---

# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).

