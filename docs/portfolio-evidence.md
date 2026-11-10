# Project portfolio evidence

## Suggested repository structure

```text
project/
├── README.md
├── docs/
│   ├── architecture.md
│   ├── decisions.md
│   ├── operations-runbook.md
│   ├── cost-and-security.md
│   └── evidence/
├── app/
├── infra/
├── deploy/
├── tests/
└── .github/workflows/
```

## Project record template

- Project name:
- Target role: AWS Cloud Engineer / Junior DevOps Engineer / both
- Repository URL:
- Live demo URL (optional; never expose private endpoints):
- Problem and scope:
- Architecture diagram:
- My contribution:
- Infrastructure and deployment:
- CI checks and test evidence:
- Observability and incident exercise:
- Security decisions:
- Cost assumptions:
- Cleanup / teardown:
- Known limitations:
- Screenshots/logs (redacted):
- What I would improve next:

## Review criteria

A reviewer should be able to clone the repository, follow the README, run tests, understand the architecture and see the evidence for important claims. Do not commit secrets, Terraform state, kubeconfigs, raw account identifiers or unredacted production logs.

GitHub URLs are learner-provided links. The static academy does not authenticate to GitHub or fetch private repositories.
