---
#outline: deep
private: true # 开启文章私密
username: teek # 用户名
password: teek # 密码
expire: 2d # 可选，登录失效时间，如果不填则以全局配置为准，全局设置默认为 1d
session: false # 可选，开启是否在网页关闭或刷新后，清除登录状态，这样再次访问网页，需要重新登录，默认为 false
strategy: once # 可选，登录策略，once 代表一次登录，always 代表每次访问都登录，默认为 once
loginInfo: [
	{ username: "teek1", password: "teek1" }, 
	{ username: "teek2", password: "teek2" }
]
---

# Runtime API Examples

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
