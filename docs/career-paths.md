# Role competency paths

These are competency maps, not job guarantees. Select a target path and use the linked tracks in the academy as evidence milestones.

## AWS Cloud Engineer

| Competency | Required practical evidence | Related tracks |
|---|---|---|
| Linux and networking | Diagnose service, DNS, routing, TLS and port problems | Linux, Shell, Networking |
| AWS foundations | Explain regions/AZs, IAM, VPC, EC2, S3, EBS and shared responsibility | AWS, Networking |
| IAM and security | Least-privilege policy, role assumption, secret handling, audit trail | AWS, DevSecOps |
| Infrastructure as code | Reusable Terraform module, variables/outputs, state safety, plan/test/destroy | Terraform |
| Operations | CloudWatch metrics/logs/alarms, backup/restore, incident runbook | Observability, SRE |
| Delivery | CI pipeline for tests and safe infrastructure plan review | CI/CD, Git |
| Cost governance | Estimate service cost, tags, budgets/alerts, cleanup evidence | FinOps |
| Portfolio proof | Architecture diagram, Terraform repo, runbook, redacted screenshots/logs | Projects, Capstone |

**Portfolio gate:** deploy or model one small, documented workload in an explicitly budgeted test environment; include architecture, IAM rationale, Terraform, CI checks, monitoring, cost assumptions and teardown evidence. A diagram alone is insufficient.

## Junior DevOps Engineer

| Competency | Required practical evidence | Related tracks |
|---|---|---|
| Linux, scripting and Git | Troubleshooting notes, tested scripts, clean PR history | Linux, Shell, Git |
| CI/CD | Pipeline with tests, artifacts, environment promotion and rollback strategy | Build, CI/CD |
| Docker | Secure image, non-root user, reproducible build, health checks | Containers |
| Kubernetes | Deploy a workload, probes, requests/limits, rollout and rollback | Kubernetes |
| Terraform | Reusable IaC, validation, plan review and state handling | Terraform |
| Observability/SRE | Dashboard, alert, SLI/SLO and incident review | Observability, SRE |
| Security | Secret scanning, least privilege, image/dependency checks | DevSecOps |
| Portfolio proof | End-to-end app delivery with README, diagram, tests and operations runbook | Projects, Capstone |

**Portfolio gate:** build a small service, containerize it, run automated CI, deploy to a disposable local Kubernetes cluster or controlled cloud environment, instrument health, simulate a failure and document recovery. Show actual repository evidence.

## Competency levels

- **Aware:** can explain the concept and identify its use.
- **Practiced:** can perform a guided task and explain output.
- **Independent:** can build/debug without following a step-by-step solution.
- **Evidence-backed:** has a reproducible repository, tests, design notes and operational proof.

Use “Independent” or “Evidence-backed” only when the work can be reviewed. Course completion alone is not evidence.
