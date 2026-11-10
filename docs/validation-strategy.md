# Technical validation strategy

## Automated repository checks

- JavaScript syntax: `node --check app.js`, `node --check curriculum.js`, `node --check interview-bank.js`.
- Content shape: every track has unique ID, ten questions, five incident scenarios and a lab with at least one task.
- Resource links: extract HTTP(S) links from Markdown/HTML/JS and check response status with timeouts; treat 403/429 as inconclusive, not broken.
- Commands: parse known shell snippets with ShellCheck where feasible; never blindly execute commands extracted from content.
- Terraform: `terraform fmt -check -recursive`, `terraform validate` and `terraform test` only in isolated fixtures/providers.
- Docker: build and smoke-test only in an isolated runner; do not mount host sockets or secrets.
- Browser: smoke-test navigation, keyboard access, mobile layout and progress export/import.

## Safety boundary

CI may lint and test fixture code, but must not run arbitrary learner commands, call AWS, provision resources, or use production credentials. Cloud acceptance tests require a separately managed, explicitly budgeted environment and short-lived least-privilege credentials.

## Manual technical review

For each learning item verify: tool/version applicability, command syntax, expected output, failure mode, prerequisites, privilege requirements, cleanup and current official documentation link.

## Confidence labels

- Automated check passed: command/tool completed successfully in CI.
- Link check passed: endpoint returned a success status at check time.
- Manual review pending: needs a human technical reviewer.
- Inconclusive: rate-limited/authenticated URL or external service prevented verification.

Never claim all commands/resources are validated merely because JavaScript syntax passed.
