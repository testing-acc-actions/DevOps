# Assessment rubrics

## Why the score changed

The previous answer scorer relied on answer length and keyword overlap. Those are weak proxies: a long answer can be wrong, and a concise correct answer can omit expected vocabulary. Incident scoring also rewarded the presence of broad words without verifying technical correctness.

The new approach makes scoring criteria visible, awards partial credit for demonstrated evidence, and shows exactly which criteria were met. It remains **rubric-assisted self-assessment**, not semantic grading or certification. A human reviewer must verify correctness.

## Knowledge-answer rubric (0–10)

| Criterion | Points | Evidence required |
|---|---:|---|
| Core concept | 0–3 | Correct definition and distinction |
| Mechanism | 0–2 | Explains how/why it works |
| Operational application | 0–2 | Relevant concrete use case |
| Trade-off / failure mode | 0–2 | Limitation, risk or alternative |
| Verification | 0–1 | How to prove the claim in practice |

Award only criteria supported by the answer. Do not award for length, copied keywords or unsupported claims. Use the question's answer guide as reference, not as a literal phrase-matching target.

## Incident-response rubric (0–100)

| Criterion | Points | Evidence required |
|---|---:|---|
| Impact and scope | 10 | User impact, blast radius, severity |
| Evidence collection | 20 | Timestamped logs, metrics, traces, status, recent changes |
| Hypothesis and isolation | 15 | Ranked hypotheses and discriminating tests |
| Safe mitigation | 15 | Reversible action, approval and rollback |
| Verification | 15 | User-path health, SLI/metrics and regression observation |
| Prevention | 10 | Actionable test, alert, runbook or engineering change |
| Communication | 5 | Owner, timeline, updates and escalation |
| Security / data protection | 10 | Least privilege, evidence hygiene, credential handling |

A criterion is met only when the submitted explanation describes a relevant action and why it is appropriate. Mentioning a word such as “rollback” or “metrics” alone is not evidence.

## Practical lab rubric (0–100)

- Reproducibility and environment declaration: 15
- Correct implementation: 25
- Automated or repeatable verification: 20
- Safety, access control and cost control: 15
- Troubleshooting and explanation: 15
- Cleanup and evidence quality: 10

## Reviewer checklist

1. Is the proposed command/config valid for the named OS/tool version?
2. Does it avoid destructive defaults and credential disclosure?
3. Does the evidence prove the stated result?
4. Are assumptions, privileges and costs explicit?
5. Is the cleanup complete and independently checked?

Do not claim a learner is job-ready based on completion percentage alone. Evaluate project quality, debugging ability, trade-off reasoning and ability to explain implementation decisions.
