# OpsForge — Personal DevOps Engineering Academy

A dark-monochrome, interactive, local-first learning academy covering DevOps from absolute foundations through production engineering.

**Hosted site:** https://testing-acc-actions.github.io/DevOps/

## Learning sequence

Every track follows the same practical progression:

1. **Topic & concepts** — explain what it is, why it exists, how it works, architecture and trade-offs.
2. **Knowledge questions** — topic-specific questions with hints, answer guides, use cases and learner answer scoring.
3. **Production scenarios** — realistic incidents with severity, symptoms, investigation, mitigation, verification and prevention.
4. **Hands-on lab** — editable starter file, track-specific task list, acceptance checks and an embedded command terminal.
5. **Project** — connect the topic to larger deliverables and the integrated Employee Management capstone.

Question, scenario and lab counts vary with topic depth. They are not capped at a fixed number.

## Curriculum

17 tracks cover:

- Linux and operating systems
- Bash, PowerShell, Python and automation
- Git and collaborative engineering
- Networking, DNS, HTTP and TLS
- Build engineering, dependencies and artifacts
- CI/CD and release engineering
- Containers and image supply chain
- Kubernetes, Helm and cloud native operations
- Terraform, IaC and configuration management
- AWS and multi-cloud architecture
- GitOps and progressive delivery
- Observability, metrics, logs and tracing
- DevSecOps and software supply-chain security
- SRE, incident response and resilience
- Platform engineering and developer experience
- AI, AIOps, MLOps, RAG and LLMOps
- FinOps, governance and cloud cost management

The expanded curriculum includes detailed deep-dive notes with rationale, operating mechanics, worked command/code examples, expected outcomes and production pitfalls.

## Hands-on workspace

Each track has an embedded workspace with:
- Editable starter code or configuration file.
- Track-specific command palette and simulated terminal.
- Task checklist and progress tracking.
- Text-based acceptance checks and feedback.
- Suggested evidence to capture in GitHub.

The academy also includes a general practice terminal, code-repair challenges, incident simulator, progressive projects, senior engineer guidance and a multi-stage Employee Management capstone.

## Progress tracking

- Daily attendance.
- Focus timer.
- Topic question and incident progress.
- Lab and project checklists.
- Approach and knowledge coaching scores.
- JSON export/import for backups.

Progress is stored in browser local storage. It does not synchronize to GitHub or between devices. Export a backup regularly.

## Important execution and assessment boundaries

The terminal is a safe simulator; it does not run commands on the user's computer, execute arbitrary code, call AWS APIs or create cloud resources. Some commands return simulated output.

The lab editor stores drafts and performs content/acceptance checks. It is not a compiler, interpreter, Terraform provider, YAML parser, linter or security scanner. Run real validators and tests in a disposable local environment before using code in a project.

Knowledge and incident scores are coaching heuristics, not independent semantic grading or certification of engineering competence.

## Cost and security

The academy itself is a static website and does not require AWS. Cloud labs begin as architecture and code exercises. Before provisioning anything, check current regional pricing, account eligibility, quotas and billing alerts. NAT gateways, load balancers, public IPv4, storage, snapshots, logging and data transfer may incur charges.

Use least privilege, never commit secrets, tag resources with owner and expiry, and verify cleanup after every real cloud lab.

## Repository structure

- `index.html` — application shell
- `styles.css` — responsive dark-monochrome graphite interface
- `app.js` — navigation, terminal, lab editor, assessments and progress tracking
- `curriculum.js` — track content, deep dives, adaptive questions, production scenarios and lab workspaces

## Publish with GitHub Pages

In **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/(root)**. GitHub Pages publishes the static `index.html` application.

## Interview preparation for job changes

The **Interview Prep** navigation area contains 86 curated DevOps interview questions across the 17 learning tracks. It offers four shuffle modes:
- Topic-wise: choose a curriculum topic and shuffle its questions.
- Concept-wise: choose an engineering concept and shuffle matching questions.
- Tool-wise: choose a tool/tool family and shuffle matching questions.
- All Mix: shuffle the full interview bank across topics.

The question deck shows 10 randomized questions per batch. Answers are hidden by default; reveal them after attempting an answer aloud. Each reference answer includes an explanation, practical example and likely follow-up question. Shuffle starts a new randomized order and hides previously revealed answers.
