/* ============================================================
   AI Governance 知识库 — 共享脚本
   导航/页脚渲染、折叠面板、筛选器等通用逻辑
   ============================================================ */

const KB = {
  siteName: "AI Governance 知识库",
  updated: "2026-08-10", // 每次更新内容后修改此日期
  nav: [
    { id: "home",      href: "index.html",       label: "首页" },
    { id: "map",       href: "map.html",          label: "知识地图" },
    { id: "regs",      href: "regulations.html",  label: "法规与标准" },
    { id: "practice",  href: "practice.html",     label: "企业实践" },
    { id: "careers",   href: "careers.html",      label: "职业地图" },
    { id: "research",  href: "research.html",     label: "学术研究" },
    { id: "resources", href: "resources.html",    label: "案例与资源" },
    { id: "toolkit",   href: "toolkit.html",      label: "工具箱" },
  ],
};

/* ---------- 头部与页脚 ---------- */
function renderChrome() {
  const active = document.body.dataset.page || "";
  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="inner">
        <div class="brand">
          <a href="index.html">AI Governance 知识库</a>
          <span class="en">AI Governance KB</span>
        </div>
        <nav class="nav">
          ${KB.nav.map(n => `<a href="${n.href}" class="${n.id === active ? "active" : ""}">${n.label}</a>`).join("")}
        </nav>
      </div>`;
  }
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="inner">
        <p><strong>AI Governance 知识库</strong> · 面向中文读者的 AI 治理学习与职业参考站 · 内容最后更新：${KB.updated}</p>
        <p>本站为个人整理的学习资料，不构成法律意见。所有法规、标准与案例均标注来源与日期，引用前请以官方最新文本为准。</p>
        <p>内容结构可扩展，数据文件见 <code>data/</code> 目录 · <a href="map.html">从知识地图开始</a></p>
      </div>`;
  }
}

/* ---------- 折叠面板 ---------- */
function makeAccordion(container) {
  (container || document).querySelectorAll(".acc-head").forEach(head => {
    head.addEventListener("click", () => head.parentElement.classList.toggle("open"));
  });
}

/* ---------- 单选筛选条 ----------
   options: [{value, label}], onChange(value) */
function renderFilterChips(el, options, onChange, initial) {
  let current = initial ?? options[0].value;
  function draw() {
    el.innerHTML = options.map(o =>
      `<button class="chip ${o.value === current ? "on" : ""}" data-v="${o.value}">${o.label}</button>`
    ).join("");
    el.querySelectorAll(".chip").forEach(btn => {
      btn.addEventListener("click", () => { current = btn.dataset.v; draw(); onChange(current); });
    });
  }
  draw();
  onChange(current);
}

/* ---------- 工具函数 ---------- */
function esc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

// 来源标注：source = {label, url?, date, note?}
function sourceLine(source, prefix) {
  if (!source) return "";
  const name = source.url
    ? `<a href="${source.url}" target="_blank" rel="noopener">${esc(source.label)}</a>`
    : esc(source.label);
  const note = source.note ? ` · ${esc(source.note)}` : "";
  return `<div class="source-line">${prefix || "来源"}：${name} · ${esc(source.date)}${note}</div>`;
}

function badge(text, tone) {
  return `<span class="badge badge-${tone || "gray"}">${esc(text)}</span>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  makeAccordion();
});
