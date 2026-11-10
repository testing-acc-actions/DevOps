# OpsForge — DevOps Engineering Academy

A dark, interactive, local-first learning platform for a beginner-to-production DevOps engineering journey.

**Hosted site:** https://testing-acc-actions.github.io/DevOps/

## Learning curriculum

The roadmap is organized into 17 distinct tracks:

1. Linux and operating systems
2. Bash, PowerShell, Python and automation
3. Git and engineering workflow
4. Networking, DNS, HTTP and TLS
5. SDLC, build systems and artifact management
6. CI/CD and release engineering
7. Containers and image supply chain
8. Kubernetes, Helm and cloud native
9. Infrastructure as Code and configuration management
10. AWS and multi-cloud engineering
11. GitOps and progressive delivery
12. Observability and telemetry
13. DevSecOps and software supply chain
14. SRE, reliability and incident management
15. Platform engineering and developer experience
16. AI, AIOps, MLOps and LLMOps
17. FinOps, governance and cost optimization

Each track contains topic explanations, concepts, practical examples, use cases, 10 track-specific knowledge questions with hints and answer guides, 5 production incident scenarios, a hands-on lab checklist and senior-engineer guidance.

## Practice environment

- **Practice Terminal:** a safe simulator for selected Linux, Git, Docker, Kubernetes and Terraform commands. It uses a virtual workspace and never executes commands on your computer or creates cloud resources.
- **Code Repair Arena:** edit broken Docker, GitHub Actions, Terraform, Kubernetes, Bash and supply-chain examples. The checker uses simple acceptance-pattern checks; it is not a full compiler, linter or security scanner.
- **Incident Simulator:** write your troubleshooting approach and receive a transparent rubric-based coaching score for impact, evidence, hypotheses, mitigation, verification, prevention, communication and security.
- **Labs & Projects:** progressive projects with checklists and linked learning tracks.
- **Major Capstone:** an Employee Management Java 17/Maven application lifecycle tying source control, build, CI/CD, Docker, Terraform, AWS architecture, Kubernetes, GitOps, security, observability, SRE, FinOps and AI operations together.
- **Senior Engineer Desk:** practical production judgement and change checklists.
- **Attendance & Tracker:** daily attendance, focus timer, progress metrics and JSON backup/restore.

## Getting started

1. Open the hosted link above.
2. Start with Linux & Operating Systems, then proceed through the roadmap.
3. For each track, study the concepts, write your own answers, reveal the hint/answer guide, score the five incident approaches and complete the lab checklist.
4. Use the terminal and code arena to reinforce commands and code changes.
5. Build the progressive projects and complete the integrated capstone.
6. Export a JSON backup regularly from Attendance & Tracker.

## Progress and privacy

- All progress is stored locally in your browser's local storage.
- Progress is not synchronized to GitHub or between devices.
- Export/import the JSON backup to preserve or move your progress.
- The focus timer counts only while running and the browser tab is visible; it cannot verify attention.
- The incident score is a coaching heuristic based on keywords and answer structure. It does not use an AI evaluator and is not a certification or objective assessment of engineering competence.
- The code arena checks for specific content patterns. Passing it does not replace real builds, tests, linters or security scans.

## Cost and security

The academy itself is static and does not require AWS or any cloud services. The terminal and code arena do not provision resources.

For real cloud labs, check current pricing in the target region, account eligibility, quotas and billing alerts before provisioning. Services such as NAT gateways, load balancers, public IPv4, storage, snapshots, logs and data transfer may incur costs. Use least privilege, never commit secrets, tag resources with owner/expiry, and verify cleanup after every lab.

## Files

- `index.html` — application shell
- `styles.css` — responsive dark interface
- `app.js` — navigation, assessments, simulations and local progress
- `curriculum.js` — curriculum, questions and incident scenarios

## GitHub Pages

This repository is set up for a static site. In **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/(root)**. GitHub Pages publishes the root `index.html`.
