# 字段

以设置项的 `id` 为准。下表里的项都可写。界面文案来自语言包。

## 全站

| id | 类型 | 作用 |
| --- | --- | --- |
| `logo_url` | 图片 | 站点 Logo。可写 |
| `is_allow_published` | 开关 | 是否开启先发后审。可写 |
| `feedback_useful_type` | 文本 | 首选反馈表情。可写 |
| `copyright_info` | 文本 | 版权信息。可写 |
| `changelog_path` | 文本 | Changelog 链接。可写 |
| `header_menu_html` | HTML | 页眉菜单 HTML。可写 |
| `footer_menu_html` | HTML | 页脚菜单 HTML。可写 |
| `head_html` | HTML | Head HTML。可写 |
| `lucide_icons` | 多行文本 | 允许的 Lucide 图标名称。可写 |

## 首页 `index`

子页面模板：`page`、`roadmap`。

| id | 类型 | 作用 |
| --- | --- | --- |
| `description` | HTML | 欢迎说明。可写 |

## 页面 `page`

子页面模板：`page`。导入正文用这个模板。

| id | 类型 | 作用 |
| --- | --- | --- |
| `icon` | 选择 | Lucide 图标，选项来自全站 `lucide_icons`。可写 |
| `title` | 文本 | 标题。可写 |
| `content` | 富文本 | 内容。可写 |
| `tags` | 标签 | 标签。可写 |
| `pinned` | 开关 | 置顶。可写 |
| `status` | 选择 | 状态：`inbox`、`planned`、`in_progress`、`completed`。可写 |
| `board` | 选择 | 看板：`feature_request`、`bug`、`task`、`question`。可写 |

## 路线图壳 `roadmap`

子页面模板：`page`。这是壳，不是导入正文的模板。

| id | 类型 | 作用 |
| --- | --- | --- |
| `title` | 文本 | 路线图页标题。可写 |
| `tags` | 标签 | 标签。可写 |

## 没有设置项的文件

这些文件没有字段：`create_answer_reply_success_turbo_stream.liquid`、`create_post_error_turbo_stream.liquid`、`create_reply_success_notice_turbo_stream.liquid`、`create_reply_success_turbo_stream.liquid`、`destroy_reply_success_turbo_stream.liquid`、`search.liquid`、`toast_error_turbo_stream.liquid`、`update_page_success_turbo_stream.liquid`。
