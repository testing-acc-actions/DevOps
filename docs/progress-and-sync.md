# Progress persistence and backup

## Current static-site model

The academy stores progress in browser local storage. Export/import provides a portable JSON backup. It is not cloud sync, multi-device sync, or a protected backup service.

## Backup guidance

1. Export JSON after meaningful milestones.
2. Store backups in a private location you control.
3. Keep more than one copy.
4. Import only a backup you recognize. The importer replaces the current in-browser state.
5. Do not include AWS credentials, tokens, private keys or sensitive incident notes in progress.

## Optional cloud sync architecture (future implementation)

For authenticated multi-device sync, add a separate backend rather than embedding credentials in a static page:

- Identity: GitHub OAuth App or OIDC provider with a server-side authorization-code exchange; never put a client secret in browser code.
- API: authenticated profile-scoped endpoints for reading/writing a versioned progress document.
- Storage: encrypted object/database storage with per-user authorization and backups.
- Conflict handling: version number plus ETag/If-Match optimistic concurrency; surface conflicts instead of silently overwriting.
- Data minimization: store progress IDs/scores, not raw sensitive notes by default.
- Export/delete: user-controlled export and deletion workflow.
- Abuse controls: rate limits, request-size limits, CSRF protection where cookie auth is used, audit events and retention policy.

Until that backend exists, the product must label its capability “local save + manual backup”, not “cloud sync”.
