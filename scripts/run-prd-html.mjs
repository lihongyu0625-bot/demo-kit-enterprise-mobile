/* eslint-disable */
// PRD HTML 生成 runner：vite ssrLoadModule 加载入口（原生支持 import.meta.glob），
// 手动收集组件 CSS 并把相对 url() 重写为 /src/ 绝对路径（dev server 可访问）。
// 产物：public/prd-html/index.html
import { createServer } from 'vite'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

const ROOT = resolve(import.meta.dirname, '..')

const CSS_FILES = [
  'src/index.css',
  'src/components/common/common.css',
  'src/components/hotel-booking-success/hotel-booking-success.css',
  'src/components/flight-order-detail/flight-order-detail.css',
  'src/components/hotel-order-detail/hotel-order-detail.css',
  'src/components/points-mall/points-mall.css',
  'src/components/points-lucky-bag/points-lucky-bag.css',
  'src/components/points-benefit-title/points-benefit-title.css',
  'src/components/points-benefit-header/points-benefit-header.css',
  'src/components/points-exchange-module/points-exchange-module.css',
]

function collectCss() {
  let css = ''
  for (const file of CSS_FILES) {
    let text = readFileSync(resolve(ROOT, file), 'utf-8')
    // 相对 url() → /src/ 绝对路径（相对 css 文件位置解析）
    const cssDir = file.slice(0, file.lastIndexOf('/'))
    text = text.replace(/url\((['"]?)(\.{1,2}\/[^)'"]+)\1\)/g, (m, q, rel) => {
      const parts = cssDir.split('/')
      for (const seg of rel.split('/')) {
        if (seg === '..') parts.pop()
        else if (seg !== '.') parts.push(seg)
      }
      return `url(${q}/${parts.join('/')}${q})`
    })
    css += `\n/* ${file} */\n${text}`
  }
  return css
}

const server = await createServer({
  root: ROOT,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

try {
  const entry = await server.ssrLoadModule('/scripts/prd-html-entry.jsx')
  const pages = entry.renderPagesHtml()

  const canvasCss = `
* { margin: 0; padding: 0; }
body { background: #eef1f6; font-family: -apple-system, 'PingFang SC', 'Helvetica Neue', sans-serif; -webkit-font-smoothing: antialiased; }
.prd-report { max-width: 1180px; margin: 0 auto; padding: 32px 24px 64px; }
.prd-report__header { margin-bottom: 24px; }
.prd-report__title { font-size: 22px; font-weight: 700; color: #1a2233; }
.prd-report__meta { margin-top: 8px; font-size: 13px; color: #5a6472; line-height: 1.7; }
.prd-report__grid { display: grid; grid-template-columns: repeat(2, 420px); gap: 28px; justify-content: center; }
.prd-page__head { margin-bottom: 12px; }
.prd-page__title { font-size: 15px; font-weight: 700; color: #1a2233; }
.prd-page__tag { display: inline-block; margin-left: 8px; padding: 2px 8px; border-radius: 4px; background: #e8f1ff; color: #185fa5; font-size: 11px; font-weight: 500; }
.prd-page__change { margin-top: 6px; font-size: 12px; color: #5a6472; line-height: 1.6; }
.prd-page__change b { color: #ff7a45; font-weight: 600; }
.prd-page__canvas { width: 390px; overflow: hidden; border-radius: 24px; background: #f5f6fa; box-shadow: 0 10px 30px rgba(20, 54, 92, 0.12); }
.prd-page__canvas > * { width: 375px; margin: 0 auto; }
.prd-page__canvas .points-mall-preview { width: 390px; }
.prd-page__canvas .points-mall-shell { width: 375px; margin: 0 auto; }
.prd-page__canvas .flight-order-detail-preview { width: 375px; }
@media (max-width: 900px) { .prd-report__grid { grid-template-columns: 420px; } }
`

  const sections = pages
    .map(
      (p) => `    <section class="prd-page" id="${p.id}">
      <div class="prd-page__head">
        <h2 class="prd-page__title">${p.title}<span class="prd-page__tag">${p.taskType}</span></h2>
        <p class="prd-page__change"><b>改动：</b>${p.change}</p>
      </div>
      <div class="prd-page__canvas">${p.markup}</div>
    </section>`,
    )
    .join('\n')

  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>机酒支付成功积分一键兑换引导 · 页面预览</title>
<style>${collectCss()}</style>
<style>${canvasCss}</style>
</head>
<body>
<div class="prd-report">
  <header class="prd-report__header">
    <h1 class="prd-report__title">机酒支付成功积分一键兑换引导 · 页面预览</h1>
    <p class="prd-report__meta">
      望岳 R-QYJ-731337 ｜ 输入模式：PRD 分析报告（schema 1.0，registry 2930c17）<br>
      页面组件均来自云端组件库静态展开（保留原类名与真实资源）；<b style="color:#ff7a45">橙色标注</b>为本次新增的积分兑换推荐模块（PointsExchangeModule）
    </p>
  </header>
  <div class="prd-report__grid">
${sections}
  </div>
</div>
</body>
</html>`

  const outDir = resolve(ROOT, 'public/prd-html')
  mkdirSync(outDir, { recursive: true })
  writeFileSync(resolve(outDir, 'index.html'), html)
  console.log(`HTML 已生成：public/prd-html/index.html（${(html.length / 1024).toFixed(1)} KB，${pages.length} 页面）`)
} finally {
  await server.close()
}
