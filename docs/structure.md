# 结构

范围是 community。快速开始只建这个模板的站点，确认栏目后再写成站点页面，不建知识库。回复挂在页面上。

`seeds/` 里有一套示例。选「先用示例体验」时用这套种子，会跳过编排。

## 首页、壳和页面

首页是 `templates/index.liquid`，子页面模板是 `page` 和 `roadmap`。

导入正文用 `page`（`templates/page.liquid`）。`title` 和 `content` 可写。这条页面下面还可以再挂 `page`。

`roadmap`（`templates/roadmap.liquid`）是路线图壳，下面挂 `page`。壳只在结构里用，导入正文不用它。

`templates/search.liquid` 是搜索，没有 AI 作答。

## 提问

快速开始里的「在站点里问」打开 `-/search`。
