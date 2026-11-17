# Hands-on course design

The guided-course interface follows an original topic → explanation → task → terminal → verification workflow inspired by the publicly described escbash learning pattern. The course content is independently authored.

## Course coverage

| Course | Topics | Practice environment |
|---|---:|---|
| Terraform with AWS | 33 | Terraform CLI + LocalStack |
| AWS Cloud Engineering | 26 | AWS CLI + LocalStack; read-only real-account guidance only |
| GitHub Actions Engineering | 26 | Git + actionlint locally; actual runs on GitHub-hosted runners |

Each topic has an objective, explanation, practical task, example commands, evidence checks, engineering questions and official documentation links. The course catalog is data-driven so topic counts and lessons can be expanded without duplicating UI code.

## Execution and grading honesty

- The existing in-page practice terminal remains a simulator.
- The local runtime is a real shell in an unprivileged Docker container, opened in the browser on the learner's own machine.
- LocalStack emulates selected AWS APIs; it is not a real AWS account.
- actionlint validates workflow syntax locally. Actual GitHub Actions jobs run only after a workflow is pushed to GitHub.
- Task checkboxes record learner progress. They are not an automated grader. Do not mark a task technically verified until you have run the checks and captured evidence.

## Future hosted runtime

A production hosted version needs an authenticated API, per-user ephemeral VM/container provisioning, short-lived session tokens, resource quotas, network egress controls, idle expiry, server-side check runners, audit logs, secret isolation and a cleanup controller. GitHub Pages alone cannot provide those capabilities. Do not expose the local ttyd service to the public internet as a shortcut.