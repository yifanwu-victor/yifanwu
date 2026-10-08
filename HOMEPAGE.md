# 首页维护

- 简介：`_pages/about.md`。
- 导航、News、教育、实习和审稿：`_data/home.yml`。
- Research：`_data/research.json`，数组顺序就是展示顺序。旧 `_publications` Markdown 不再生成页面或驱动首页。

每篇必填 `title`、`authors`、`venue`。本人姓名可写 `<strong>Yifan Wu*</strong>`；共同一作保留 `*`。
可选 `paperurl`：标题和 Paper 按钮直接打开此地址；没有真实地址时省略字段。
可选 `teaser`：相对于 `images/` 的路径，例如 `publications/openvitac.png`；省略即使用纯文字布局。
可选 `projecturl`、`codeurl`：显示 Project、Code 按钮。图片优先打开 Project，其次 Paper，再其次原图。
其他链接：`"links": [{"label": "Dataset", "url": "https://example.com"}]`。
在投工作标记 `Preprint · 2026`，公开到 arXiv 后将真实地址填入 `paperurl`。

本地预览：`PORT=8080 ruby scripts/preview.rb`，访问 `http://127.0.0.1:8080/yifanwu/`。
预览脚本使用本机已安装的 Jekyll gems，避开旧 Bundler 锁和 macOS 原生扩展架构冲突；修改后重启预览。仅构建：`ruby scripts/preview.rb --build`。

Google Search Console 验证值保留在 `_config.yml`，不要删除。

旧模板示例页也已停止生成，源文件暂留本地。ANL 作者按最新 CV 写为 `Y. Xu`，现有 arXiv 版本仍列 Yiqi Wang；如之后更新版本，可在 research.json 中同步全名及链接。

可选 `titleurl`：覆盖标题链接（例如项目网站），Paper 按钮仍使用 `paperurl`。设置 `show_project_link: false` 可隐藏 Project 按钮，同时保留图片的项目链接。
