# DevOps Prep local hands-on runtime

This adds a real browser-accessible Linux shell for local practice. It is intentionally separate from GitHub Pages: GitHub Pages cannot execute shell commands or provision isolated machines.

## Included

- Ubuntu 24.04 terminal served by ttyd at `http://127.0.0.1:7681`
- Terraform CLI, AWS CLI, Git, Python, actionlint and common network/debug tools
- LocalStack AWS emulator at `http://127.0.0.1:4566`
- Persistent learner workspace; LocalStack state is ephemeral
- Non-root learner, no Docker socket, no host filesystem mounts, loopback-only ports, dropped Linux capabilities, resource limits

## Requirements

Docker Desktop or Docker Engine with Compose v2. Allow at least 4 GB memory for the two containers. This is intended for one learner on their own computer, not public hosting or multi-tenant use.

## Start

From the repository root:

```bash
docker compose -f lab-runtime/compose.yaml up -d --build
```

Open the academy and select **Launch local terminal**, or open `http://127.0.0.1:7681` directly.

Check the runtime:

```bash
docker compose -f lab-runtime/compose.yaml ps
docker compose -f lab-runtime/compose.yaml logs --tail=80
```

## Try the local AWS emulator

The terminal receives dummy credentials only. They are accepted by LocalStack and are not real AWS credentials.

```bash
aws --endpoint-url=http://localstack:4566 sts get-caller-identity
aws --endpoint-url=http://localstack:4566 s3 mb s3://devops-prep-lab
aws --endpoint-url=http://localstack:4566 s3 ls
```

For Terraform, configure the AWS provider to use LocalStack endpoints. Do not remove endpoint overrides or point beginner exercises at a real AWS account by accident. The course pages provide starter patterns and safety notes.

## GitHub Actions

Use `actionlint` in the local terminal to validate workflow syntax. To execute workflows on GitHub-hosted runners, push a practice branch to your own GitHub repository and inspect the Actions run. This runtime does not include a Docker daemon or a self-hosted runner; it deliberately does not mount the host Docker socket.

## Stop and reset

```bash
docker compose -f lab-runtime/compose.yaml down
```

Remove all lab workspace files and learner shell history too:

```bash
docker compose -f lab-runtime/compose.yaml down -v
```

The second command permanently deletes the named practice volumes. Export your work first if you need it.

## Security boundary

This is a local single-user practice environment, not an internet-facing hosted service. The terminal has no login layer because both published ports bind to loopback. Do not change the bind address to `0.0.0.0`, expose it through a router, or deploy this Compose file to a public server. It is not a VM boundary: it is an unprivileged container with a persistent workspace. Do not paste real AWS credentials, SSH private keys, production data or secrets into it.

LocalStack is an emulator, not proof that an AWS deployment will behave identically. Validate important designs against official AWS documentation and, only when budget and permissions are approved, a dedicated AWS sandbox account.