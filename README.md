# 🚀 NEXTJS-BLOG

这是一个基于 [next-contentlayer.vercel.app](https://next-contentlayer.vercel.app) 模板的 Next.js 博客项目。它使用 Contentlayer 来管理 Markdown 内容，并使用 Tailwind CSS 进行样式设计。

## 🏗️ 项目结构

以下是项目结构的概览：

```plaintext
NEXTJS-BLOG
├── app/                     # Next.js 应用目录，包含页面和组件
├── components/              # 可复用组件
├── content/                 # Markdown 内容文件
├── public/                  # 静态资源（如图片、字体）
├── contentlayer.config.js   # Contentlayer 配置文件
├── next.config.js           # Next.js 配置文件
├── package.json             # 项目依赖和脚本
├── postcss.config.js        # PostCSS 配置文件
├── tailwind.config.js       # Tailwind CSS 配置文件
├── tsconfig.json            # TypeScript 配置文件
```

## 📦 安装

要安装项目及其依赖项，请确保已安装 [pnpm](https://pnpm.io/)。然后运行以下命令：

```bash
pnpm install
```

## 💻 运行项目

使用以下命令以开发模式运行项目：

```bash
pnpm dev
```

该命令将启动一个开发服务器，地址为 `http://localhost:3000`。

## 🌍 部署

由于该项目遵循 Next.js 的静态站点生成（SSG）和服务端渲染（SSR）最佳实践，因此可以轻松部署到类似 [Vercel](https://vercel.com/) 这样的平台。

您可以按照以下步骤部署项目：

1. 将代码推送到 Git 仓库。
2. 将您的仓库连接到 Vercel。
3. Vercel 会自动检测到 Next.js 框架并处理部署。

## 🎨 项目定制

您可以通过以下几方面定制项目以满足您的需求：

- **📄 内容**：您可以通过在 `content/posts` 目录中创建或编辑 Markdown 文件来添加或修改博客文章。
- **🎨 主题**：该项目使用主题切换器在亮模式和暗模式之间切换。您可以在 `tailwind.config.js` 中调整设计和配色方案。
- **🧩 组件**：可复用的组件，如 `ModeToggle` 和 `Analytics`，可以自定义以添加新功能或集成第三方服务。
- **💅 样式**：项目使用 Tailwind CSS 进行样式设计。您可以在 `globals.css` 中全局修改样式，或直接在组件中使用 Tailwind 的实用类。

## 🙏 致谢

- [Next.js](https://nextjs.org/)
- [Contentlayer](https://www.contentlayer.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)
