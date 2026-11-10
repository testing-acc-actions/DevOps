# DevOps Prep — Personal DevOps Engineering Academy

**Live site:** https://testing-acc-actions.github.io/DevOps/

DevOps Prep is a dark-monochrome, local-first interactive learning academy covering DevOps from foundations through production engineering, cloud-native delivery, AI operations and FinOps.

## Learning order

The learning path tree presents the recommended top-to-bottom dependency order:

1. **Foundations:** Linux, shell scripting, Git and networking.
2. **Build & delivery:** build systems, dependencies, CI/CD and release engineering.
3. **Package & orchestrate:** containers, Kubernetes and Helm.
4. **Infrastructure & cloud:** Terraform/IaC, AWS and multi-cloud architecture.
5. **Release & operate:** GitOps, observability, SRE and incident management.
6. **Security & platform:** DevSecOps, software supply chain and platform engineering.
7. **Intelligent & efficient operations:** AI/AIOps/MLOps/LLMOps and FinOps.

## Topic learning sequence

Each track follows:

1. Topic and concepts, with deep explanations, examples, expected outcomes, production pitfalls and concept tips.
2. Knowledge questions with hints, answer guides and learner self-assessment.
3. Production incident scenarios with investigation and remediation practice.
4. Hands-on task brief: implementation tasks, questions to answer, and official research resources. No solution code is supplied.
5. Projects: build deliverables, design questions and documentation links. The implementation is yours.

Question, scenario and lab counts vary with topic complexity rather than a fixed quota.

## Interview preparation

The Interview Prep section has two shuffled modes:
- **Technology-wise:** choose a technology/topic and practise its questions.
- **All topics mixed:** shuffle across the full interview bank.

Answers are hidden by default. Reveal them only after attempting an answer. Each entry includes an interview-ready answer, practical example and likely follow-up question.

## Curriculum

17 tracks cover Linux, Bash/Python, Git, networking, build systems, CI/CD, containers, Kubernetes, Terraform, AWS, GitOps, observability, DevSecOps, SRE, platform engineering, AI operations and FinOps.

## Practice and projects

The academy includes a standalone safe practice terminal, task-only labs, progressive project briefs, production incident practice, attendance, focus timer and progress export/import.

Labs and projects deliberately provide requirements, questions and resources rather than completed solution code. Learners are expected to design, implement, test, document and publish their own work.

## Progress and privacy

Progress is stored in browser local storage. It does not synchronize to GitHub or between devices. Export a JSON backup regularly.

The practice terminal is a simulator. It does not execute commands on the user's computer, call AWS APIs or create cloud resources. Knowledge and incident scores are coaching heuristics, not certification or semantic grading.

## Cost and security

The static academy itself does not require AWS. Before any real cloud lab, check current regional pricing, account eligibility, quotas and billing alerts. NAT gateways, load balancers, public IPv4, storage, snapshots, logging and data transfer may incur charges. Use least privilege, never commit secrets, tag resources with owner/expiry and verify cleanup.

## Repository files

- `index.html` — application shell and navigation
- `styles.css` — responsive graphite monochrome interface
- `app.js` — learning flow, interview shuffle, lab/project briefs, terminal and progress tracking
- `curriculum.js` — 17-track curriculum, deep dives and assessments
- `interview-bank.js` — hidden-answer job interview question bank

## GitHub Pages

In **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/(root)**.


## Academy v3 work in progress

The `feature/academy-v3` branch adds role competency maps, a local project-evidence register, practical execution guides for Linux/Docker/Terraform/AWS, transparent assessment rubrics, progress-sync architecture guidance and a GitHub Actions quality workflow. See `docs/` and `labs/`.

The browser remains a static site: it cannot execute real commands or sync data to a cloud account. Real labs run in learner-controlled disposable environments; CI validates repository code and curriculum structure only.
