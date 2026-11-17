# Executable lab catalogue

The browser academy remains static and does not execute arbitrary commands. Use the guides in `docs/lab-execution.md` for local, isolated execution.

| Lab | Location | Expected evidence |
|---|---|---|
| Linux service investigation | Disposable Ubuntu VM / WSL | Sanitized status, logs, resource checks, diagnosis and validation |
| Docker image hardening | Local Docker Engine / rootless when possible | Build, non-root identity, bounded runtime, health check and cleanup |
| Terraform lifecycle | Local provider or approved test account | fmt, validate, plan review, test and destroy evidence |
| AWS inventory and operations | Authorized account, read-only first | Identity/region confirmation, least privilege, cost review and cleanup |


## Guided cloud course labs

The academy now includes 33 Terraform with AWS topics, 26 AWS Cloud Engineering topics and 26 GitHub Actions topics. Each topic provides an objective, lesson, task brief, example commands, engineering questions, evidence checks and official references. Start the optional local runtime using `lab-runtime/README.md` for a real browser-accessible shell and LocalStack AWS emulator. The GitHub Pages terminal remains simulated.
