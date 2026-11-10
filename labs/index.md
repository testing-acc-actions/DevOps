# Executable lab catalogue

The browser academy remains static and does not execute arbitrary commands. Use the guides in `docs/lab-execution.md` for local, isolated execution.

| Lab | Location | Expected evidence |
|---|---|---|
| Linux service investigation | Disposable Ubuntu VM / WSL | Sanitized status, logs, resource checks, diagnosis and validation |
| Docker image hardening | Local Docker Engine / rootless when possible | Build, non-root identity, bounded runtime, health check and cleanup |
| Terraform lifecycle | Local provider or approved test account | fmt, validate, plan review, test and destroy evidence |
| AWS inventory and operations | Authorized account, read-only first | Identity/region confirmation, least privilege, cost review and cleanup |
