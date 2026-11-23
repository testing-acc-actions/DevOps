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

## 100-day challenge workspace

Open the [100-Day Challenges workspace](./challenges.html) from the academy navigation. It contains two original, self-paced 100-day practice plans: DevOps (Linux, Git, networking, builds, CI/CD, containers, Kubernetes, IaC, security and SRE) and Cloud (account safety, IAM, networking, compute, storage, databases, serverless, automation, monitoring and architecture). Each day includes a practical objective, a deliverable prompt, a completion checkbox and a notes area. Progress and notes are stored in the browser's local storage and do not sync between devices.

These are independent learning materials inspired by the public topic areas and hands-on format of KodeKloud's challenges. They do not reproduce KodeKloud's task text, labs, validation, branding or paid content. Use the official [100 Days of DevOps](https://kodekloud.com/100-days-of-devops) and [100 Days of Cloud](https://kodekloud.com/100-days-of-cloud) pages for their own challenge environments and account progress.

## Practice and projects

The academy includes a simulated in-page terminal, guided Terraform with AWS (33 topics), AWS Cloud Engineering (26 topics), and GitHub Actions Engineering (26 topics), task-only labs, progressive project briefs, production incident practice, attendance, focus timer and progress export/import. An optional local Docker runtime provides a real browser-accessible Linux shell and LocalStack AWS emulator; it must be started by the learner and is not hosted by GitHub Pages.

Labs and projects deliberately provide requirements, questions and resources rather than completed solution code. Learners are expected to design, implement, test, document and publish their own work.

## Progress and privacy

Progress is stored in browser local storage. It does not synchronize to GitHub or between devices. Export a JSON backup regularly.

The existing Practice Terminal is a simulator. The optional Guided Cloud Labs runtime is a separate learner-started Docker Compose environment: it runs real commands locally and routes AWS CLI exercises to LocalStack. It does not provision a hosted disposable VM or provide real AWS account access. Knowledge and incident scores are coaching heuristics, not certification or semantic grading.

## Cost and security

The static academy itself does not require AWS. Before any real cloud lab, check current regional pricing, account eligibility, quotas and billing alerts. NAT gateways, load balancers, public IPv4, storage, snapshots, logging and data transfer may incur charges. Use least privilege, never commit secrets, tag resources with owner/expiry and verify cleanup.

## Repository files

- `index.html` — application shell and navigation
- `styles.css` — responsive graphite monochrome interface
- `app.js` — learning flow, interview shuffle, lab/project briefs, terminal and progress tracking
- `curriculum.js` — 17-track curriculum, deep dives and assessments
- `interview-bank.js` — hidden-answer job interview question bank
- `hands-on-courses.js` — guided Terraform/AWS/GitHub Actions course catalog
- `lab-runtime/` — optional local Docker terminal and LocalStack AWS emulator

## GitHub Pages

In **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/(root)**.


## Academy v3 work in progress

The `feature/academy-v3` branch adds role competency maps, a local project-evidence register, practical execution guides for Linux/Docker/Terraform/AWS, transparent assessment rubrics, progress-sync architecture guidance and a GitHub Actions quality workflow. See `docs/` and `labs/`.

The browser remains a static site: it cannot execute real commands or sync data to a cloud account. Real labs run in learner-controlled disposable environments; CI validates repository code and curriculum structure only.
