/* Topic Library presentation layer: concept-first teaching for every tool topic. */
(() => {
  "use strict";
  const root = document.getElementById("dynamicView");
  if (!root) return;
  const esc = (s) => String(s || "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const codeFor = (tool) => {
    const t = (tool || "").toLowerCase();
    if (t.includes("terraform")) return 'terraform {\n  required_version = ">= 1.6.0"\n}\n\nprovider "aws" {\n  region = "ap-south-1"\n  skip_credentials_validation = true\n  skip_requesting_account_id = true\n  endpoints { s3 = "http://localhost:4566" }\n}';
    if (t.includes("aws")) return 'aws --endpoint-url=http://127.0.0.1:4566 sts get-caller-identity\naws --endpoint-url=http://127.0.0.1:4566 s3 ls';
    if (t.includes("github actions")) return 'name: ci\non: [push, pull_request]\npermissions:\n  contents: read\njobs:\n  validate:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: echo "Run project checks here"';
    if (t.includes("linux")) return 'ps aux --sort=-%cpu | head\nss -lntp\nsystemctl status SERVICE\njournalctl -u SERVICE -n 50 --no-pager';
    if (t.includes("shell")) return '#!/usr/bin/env bash\nset -Eeuo pipefail\nif [[ $# -ne 1 ]]; then echo "usage: $0 SERVICE" >&2; exit 2; fi\nprintf "Checking %s\\n" "$1"';
    if (t.includes("docker")) return 'FROM alpine:3.20\nRUN adduser -D app\nUSER app\nCMD ["sh", "-c", "echo container-ready"]';
    if (t.includes("kubernetes")) return 'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: demo\nspec:\n  replicas: 2\n  selector:\n    matchLabels: { app: demo }\n  template:\n    metadata:\n      labels: { app: demo }\n    spec:\n      containers:\n        - name: demo\n          image: nginx:1.27';
    if (t.includes("python")) return 'from pathlib import Path\nimport json\nconfig = json.loads(Path("config.json").read_text())\nprint(config.get("environment", "unset"))';
    if (t.includes("go")) return 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("health-check: ready")\n}';
    if (t.includes("ai fundamentals")) return '{"task":"Summarize the incident","evidence":["approved-log-excerpt"],"constraints":["cite evidence","state uncertainty","no write actions"]}';
    if (t.includes("claude")) return 'git status --short\ngit diff --check\ngit diff --stat\n# Review generated changes before committing';
    return 'Define the concept.\nDemonstrate one minimal example.\nValidate the result and explain one failure mode.';
  };
  const addStyles = () => {
    if (document.getElementById("topic-library-extra-style")) return;
    const style = document.createElement("style");
    style.id = "topic-library-extra-style";
    style.textContent = '.topic-concept-stack{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:13px;margin:13px 0}.topic-concept-card{background:#101b2b;border:1px solid #2b4058;border-radius:12px;padding:16px;min-width:0}.topic-concept-card h3{font:600 13px "Space Grotesk";margin:0 0 7px}.topic-concept-card p{font-size:11px;color:#aab9cc;margin:5px 0}.topic-concept-card pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#08111d;border:1px solid #293e55;color:#92e4d7;padding:12px;border-radius:8px;font:11px/1.6 "DM Mono";margin:9px 0 0}.topic-concept-kicker{font:9px "DM Mono";letter-spacing:1px;color:#57d9d0;margin-bottom:5px}.topic-library-back{margin-left:auto;border:1px solid #30465f;background:#17263a;padding:7px 10px;border-radius:8px;font-size:10px;color:#d9e8f6}@media(max-width:760px){.topic-concept-stack{grid-template-columns:1fr}}';
    document.head.appendChild(style);
  };
  const enhance = () => {
    addStyles();
    const heading = root.querySelector(".section-head h2");
    if (heading && heading.textContent.trim() === "Guided hands-on courses") {
      heading.textContent = "Topic Library · Tool Courses";
      const p = root.querySelector(".section-head p");
      if (p) p.textContent = "Choose a tool, then study each term through concepts, demonstrations, code examples, questions and practical tasks.";
      const head = heading.closest(".section-head");
      if (head && !head.querySelector("[data-tools-back]")) {
        const back = document.createElement("button");
        back.className = "topic-library-back";
        back.dataset.toolsBack = "true";
        back.textContent = "← All tools";
        head.appendChild(back);
      }
    }
    const topicTitle = root.querySelector(".view-head h2");
    const hero = root.querySelector(".lesson-hero");
    if (!topicTitle || !hero || root.querySelector(".topic-concept-stack")) return;
    if (!/^Topic\s+\d+/i.test(topicTitle.textContent.trim())) return;
    const tool = root.querySelector(".section-head .section-kicker")?.textContent || "Tool";
    const term = topicTitle.textContent.replace(/^Topic\s+\d+\s*[·-]\s*/i, "").trim();
    const heroText = Array.from(hero.querySelectorAll("p")).map(p => p.textContent.trim()).filter(Boolean).join("\n\n");
    const commandBlock = Array.from(root.querySelectorAll(".lesson-block")).find(el => el.querySelector("h3")?.textContent.toLowerCase().includes("practical task"));
    const commandSource = commandBlock?.querySelector(".terminal-output");
    const demo = commandSource ? commandSource.innerHTML : "<div class='term-muted'>Use the suggested commands from this topic's practical task.</div>";
    const stack = document.createElement("div");
    stack.className = "topic-concept-stack";
    stack.innerHTML = '<article class="topic-concept-card"><div class="topic-concept-kicker">01 · TERM EXPLANATION</div><h3>'+esc(term)+'</h3><p>'+esc(heroText)+'</p><p><b>Study focus:</b> identify the purpose, key terminology, inputs, outputs, dependencies, permissions and failure signals. Explain the concept without relying on the command syntax.</p></article>'+
      '<article class="topic-concept-card"><div class="topic-concept-kicker">02 · DEMONSTRATION</div><h3>Observe the tool behaviour</h3><p>Run the examples in the stated lab environment. Predict the output first, then compare it with the actual result.</p><div class="terminal-output">'+demo+'</div></article>'+
      '<article class="topic-concept-card"><div class="topic-concept-kicker">03 · CODE EXAMPLE</div><h3>Minimal working pattern</h3><p>This is a teaching example for the tool family, not a substitute for the topic-specific task.</p><pre>'+esc(codeFor(tool))+'</pre></article>'+
      '<article class="topic-concept-card"><div class="topic-concept-kicker">04 · ENGINEERING REASONING</div><h3>Questions to answer</h3><p>What problem does this term solve? What changes when it is misconfigured? Which output, log or validator proves the result? What is the safest recovery or cleanup step?</p><p>Answer these in your own words before reading external references.</p></article>';
    hero.insertAdjacentElement("afterend", stack);
    const qHeading = Array.from(root.querySelectorAll(".lesson-block h3")).find(h => h.textContent.trim() === "Engineering questions");
    if (qHeading) qHeading.textContent = "Questions · Check your understanding";
    const taskHeading = Array.from(root.querySelectorAll(".lesson-block h3")).find(h => h.textContent.trim() === "Practical task");
    if (taskHeading) taskHeading.textContent = "Task · Apply the concept";
  };
  const observer = new MutationObserver(enhance);
  observer.observe(root, {childList:true,subtree:true});
  enhance();
})();
