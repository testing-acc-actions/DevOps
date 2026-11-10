# Practical lab execution model

DevOps Prep is a static GitHub Pages site. It cannot safely execute shell, Docker, Terraform or AWS commands on the GitHub Pages server. This guide distinguishes **guided local execution** from **browser simulation**.

## Lab modes

| Mode | Where code runs | What the academy can verify |
|---|---|---|
| Guided local | Your own disposable VM/container/account | Evidence you submit; not remote execution |
| CI validation | GitHub Actions runner | Automated lint, syntax and unit checks defined in the workflow |
| Browser simulator | In-page mock terminal | Simulated command behaviour only |

Never describe a guided local lab as remotely sandboxed. Do not paste credentials, private keys, account IDs or sensitive logs into submissions.

## Linux lab: diagnose a failing service

**Environment:** disposable Ubuntu VM or WSL distribution; use a non-production machine.

1. Capture `date -Is`, `whoami`, `id`, `df -h`, `df -i`, `free -h`, `systemctl --failed` and `ss -lntp`.
2. Create a temporary systemd service only in a disposable VM, or inspect an existing non-critical sample service.
3. Inspect status and logs before changing anything: `systemctl status <service>` and `journalctl -u <service> --since "15 min ago"`.
4. Form a hypothesis, make one reversible change, and verify service state plus an application-level health check.
5. Submit sanitized command output, diagnosis, fix, verification and rollback.

**Pass evidence:** distinguishes host/process/application health; references relevant timestamps; identifies service identity; makes a minimal reversible change; verifies outcome.

**Cleanup:** remove only the temporary service/files you created. Do not stop or alter system services you do not own.

## Docker lab: build and harden a small web image

**Environment:** local Docker Engine in a disposable workspace. Prefer rootless mode where supported. Do not mount the host root, Docker socket, SSH agent or cloud credentials.

1. Create a minimal application and a Dockerfile using a pinned base image.
2. Add a dedicated non-root runtime user; expose only the required port.
3. Build with `docker build -t devops-prep-lab:local .`.
4. Run with resource bounds and a read-only root filesystem where compatible; provide a temporary writable mount only for required paths.
5. Inspect `docker image inspect`, `docker ps`, `docker logs` and `docker exec <container> id`.
6. Demonstrate failure handling, then remove the container and image.

**Example safer run shape:** `docker run --rm --read-only --cap-drop=ALL --security-opt=no-new-privileges --memory=256m --cpus=1 -p 127.0.0.1:8080:8080 devops-prep-lab:local`. Adapt only the minimum capabilities and writable mounts actually required by the app.

**Pass evidence:** reproducible build, non-root runtime identity, bounded resources, localhost-only port publication, successful health test, logs and cleanup record.

## Terraform lab: plan before apply

**Environment:** Terraform CLI and a local-only provider/resource, or a dedicated low-cost test account with explicit approval. Never point an introductory lab at production.

1. Use a new folder and initialize a local provider example.
2. Run `terraform fmt -check`, `terraform validate` and `terraform plan`.
3. Read the plan and explain every create/update/delete before any apply.
4. For local-provider exercises, apply only the stated local resources and inspect state.
5. Run `terraform test` when test files are supplied; otherwise record that no automated assertions exist.
6. Run `terraform destroy` for resources created by the exercise and verify cleanup.

**Pass evidence:** clean formatting/validation, plan review, explicit blast radius, test result (or stated absence), and destroy confirmation.

**Safety:** do not upload state files; Terraform state can contain sensitive values. Use a protected remote backend with encryption, access control and locking for real team environments.

## AWS lab: observe first, provision only with an approved budget

**Environment:** AWS account owned/authorized by the learner. A static site cannot provide an isolated AWS account or contain user credentials.

1. Start with read-only identity and inventory commands: `aws sts get-caller-identity` and narrowly scoped `aws ec2 describe-regions --output table`.
2. Verify the active profile, account, region, IAM permissions, budget notifications and service quotas before any write.
3. Prefer free/read-only exercises: inspect IAM policy evaluation, VPC route tables, security-group rules and CloudWatch metrics in an existing learning account.
4. Provision resources only when the exercise explicitly requires it, using a dedicated least-privilege role, resource tags (owner, purpose, expiry), and a pre-approved budget.
5. Capture resource identifiers only in your private evidence; do not publish account IDs, public IPs or credentials.
6. Delete resources created by the exercise and independently verify that billable resources are gone.

**Pass evidence:** identifies account/profile/region; describes least privilege; explains the cost surface; provides sanitized before/after evidence; confirms cleanup.

**Cost warning:** NAT gateways, load balancers, public IPv4, EBS volumes/snapshots, logging, data transfer and idle compute may incur charges. Check current regional pricing before starting. Budgets and alerts are notifications, not a hard spending cap.

## Evidence submission template

- Lab and date:
- Environment (local VM/container, CI runner, AWS account class; do not include account ID):
- Starting state:
- Commands and versions:
- Hypothesis:
- Changes made:
- Test/verification output (redacted):
- Cleanup performed:
- Remaining risks / rollback:
- GitHub evidence link (optional):

The academy scores submitted evidence against a published rubric. It does not connect to your machine or validate commands running outside the page.
