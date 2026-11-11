/* Detailed theory, architecture flows and annotated examples for every curriculum track. */
window.TOPIC_GUIDES = {
  "linux": {
    "theory": "Linux service lifecycle: request → host network → systemd unit → process identity → files/dependencies → endpoint health.",
    "lang": "bash",
    "code": "systemctl status employee-app\njournalctl -u employee-app -n 80 --no-pager\nps -o user,group,pid,%cpu,%mem,args -C java\nss -lntp | grep ':8080'\ncurl --fail http://127.0.0.1:8080/health",
    "walk": [
      [
        "systemctl status",
        "Shows unit state and recent service status; active does not prove application health."
      ],
      [
        "journalctl",
        "Reads service logs; preserve timestamps before restart."
      ],
      [
        "ps",
        "Confirms process identity and resource usage."
      ],
      [
        "ss",
        "Finds the listener and owning process on port 8080."
      ],
      [
        "curl --fail",
        "Tests the actual HTTP endpoint and returns failure for HTTP errors."
      ]
    ],
    "caution": "Inspect host resources, process, service and endpoint separately. Do not restart first or use chmod 777.",
    "flow": [
      "Linux service lifecycle: request",
      "host network",
      "systemd unit",
      "process identity",
      "files/dependencies",
      "endpoint health."
    ]
  },
  "shell": {
    "theory": "Validate inputs → preserve argument boundaries → execute command → check exit status → log redacted result → return explicit status.",
    "lang": "bash",
    "code": "#!/usr/bin/env bash\nset -Eeuo pipefail\n: \"${SERVICE_URL:?Set SERVICE_URL}\"\nif curl --fail --silent --show-error --max-time 5 \"$SERVICE_URL/health\"; then\n  printf 'health check passed\\n'\nelse\n  printf 'health check failed\\n' >&2\n  exit 1\nfi",
    "walk": [
      [
        "set -Eeuo pipefail",
        "Enables strict-mode checks for errors, unset variables and failed pipelines; still check critical operations explicitly."
      ],
      [
        ": ${SERVICE_URL:?}",
        "Fails early with a useful message if the required input is missing."
      ],
      [
        "curl flags",
        "--fail handles HTTP errors, --max-time bounds runtime, --show-error retains diagnostics."
      ],
      [
        "quoted variable",
        "Preserves the URL as one shell argument."
      ],
      [
        "exit 1",
        "Signals failure to cron or CI."
      ]
    ],
    "caution": "Avoid eval, quote variables, use arrays for argument lists, add dry-run for destructive actions and redact secrets.",
    "flow": [
      "Validate inputs",
      "preserve argument boundaries",
      "execute command",
      "check exit status",
      "log redacted result",
      "return explicit status."
    ]
  },
  "git": {
    "theory": "Working tree → stage/index → commit snapshot → push branch → pull request + CI → merge/tag/release.",
    "lang": "bash",
    "code": "git switch -c feature/health-endpoint\ngit status --short\ngit add src/ README.md\ngit diff --cached\ngit commit -m \"feat: add health endpoint\"\ngit push -u origin feature/health-endpoint",
    "walk": [
      [
        "git switch -c",
        "Creates an isolated feature branch."
      ],
      [
        "git status",
        "Shows modified and untracked files."
      ],
      [
        "git add",
        "Stages selected paths; do not accidentally include secrets or state."
      ],
      [
        "git diff --cached",
        "Reviews exactly what will enter the commit."
      ],
      [
        "git commit",
        "Creates a local history snapshot."
      ],
      [
        "git push -u",
        "Publishes the branch and configures upstream tracking."
      ]
    ],
    "caution": "Protect main, require review/checks, scan secrets and prefer git revert for shared production history.",
    "flow": [
      "Working tree",
      "stage/index",
      "commit snapshot",
      "push branch",
      "pull request + CI",
      "merge/tag/release."
    ]
  },
  "network": {
    "theory": "DNS → route lookup → firewall/security filtering → TCP handshake → TLS/SNI → HTTP → application dependencies.",
    "lang": "bash",
    "code": "dig +short api.example.com\nip route get 203.0.113.10\nnc -vz api.example.com 443\nopenssl s_client -connect api.example.com:443 -servername api.example.com\ncurl -v --connect-timeout 3 https://api.example.com/health",
    "walk": [
      [
        "dig",
        "Checks DNS answers, not end-to-end reachability."
      ],
      [
        "ip route get",
        "Shows selected route and interface."
      ],
      [
        "nc -vz",
        "Tests TCP connectivity to port 443."
      ],
      [
        "openssl s_client",
        "Inspects TLS handshake, SNI and certificate chain."
      ],
      [
        "curl -v",
        "Shows connection, TLS and HTTP response details."
      ]
    ],
    "caution": "In AWS inspect subnet routes, IGW/NAT, security groups, NACLs, endpoints and DNS independently. Never disable TLS verification.",
    "flow": [
      "DNS",
      "route lookup",
      "firewall/security filtering",
      "TCP handshake",
      "TLS/SNI",
      "HTTP",
      "application dependencies."
    ]
  },
  "build": {
    "theory": "Source revision → dependency resolution → compile → unit/integration tests → package → checksum/provenance → immutable artifact.",
    "lang": "bash",
    "code": "mvn --batch-mode clean verify\nsha256sum target/employee-management-app-1.0.0.jar\nmvn --batch-mode dependency:tree",
    "walk": [
      [
        "clean verify",
        "Runs Maven lifecycle through verification, including compilation, tests and packaging."
      ],
      [
        "--batch-mode",
        "Avoids interactive prompts in CI."
      ],
      [
        "sha256sum",
        "Creates a digest to verify artifact bytes across promotion."
      ],
      [
        "dependency:tree",
        "Shows direct and transitive dependencies."
      ]
    ],
    "caution": "A successful compile is not a passing test suite. Never overwrite a released version; promote the same artifact digest.",
    "flow": [
      "Source revision",
      "dependency resolution",
      "compile",
      "unit/integration tests",
      "package",
      "checksum/provenance",
      "immutable artifact."
    ]
  },
  "cicd": {
    "theory": "PR/tag trigger → lint/tests/security checks → build once → immutable artifact → approval → OIDC AWS role → deploy/verify/rollback.",
    "lang": "yaml",
    "code": "name: build\non: [push, pull_request]\npermissions:\n  contents: read\njobs:\n  verify:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-java@v4\n        with:\n          distribution: temurin\n          java-version: '17'\n      - run: mvn --batch-mode clean verify\n      - uses: actions/upload-artifact@v4\n        with:\n          name: application-jar\n          path: target/*.jar",
    "walk": [
      [
        "permissions",
        "Starts with read-only repository permissions."
      ],
      [
        "checkout",
        "Checks out the workflow's source revision."
      ],
      [
        "setup-java",
        "Selects the Java toolchain version."
      ],
      [
        "mvn clean verify",
        "Builds and runs configured checks."
      ],
      [
        "upload-artifact",
        "Stores the JAR for later inspection or handoff."
      ]
    ],
    "caution": "Grant id-token: write only to a protected deploy job. Scope OIDC trust and IAM role; do not expose deployment secrets to untrusted PR code.",
    "flow": [
      "PR/tag trigger",
      "lint/tests/security checks",
      "build once",
      "immutable artifact",
      "approval",
      "OIDC AWS role",
      "deploy/verify/rollback."
    ]
  },
  "containers": {
    "theory": "Source + Dockerfile → multi-stage build → scan → ECR digest → non-root runtime → health/telemetry.",
    "lang": "dockerfile",
    "code": "FROM maven:3.9-eclipse-temurin-17 AS build\nWORKDIR /src\nCOPY pom.xml .\nCOPY src ./src\nRUN mvn --batch-mode clean package -DskipTests\n\nFROM eclipse-temurin:17-jre\nWORKDIR /app\nCOPY --from=build /src/target/*.jar app.jar\nUSER 10001:10001\nEXPOSE 8080\nENTRYPOINT [\"java\",\"-jar\",\"/app/app.jar\"]",
    "walk": [
      [
        "Build stage",
        "Uses Maven/JDK to compile; build tools need not ship in runtime."
      ],
      [
        "COPY inputs",
        "Copies source and build files into the build stage."
      ],
      [
        "Runtime stage",
        "Starts from a JRE image and copies only the packaged JAR."
      ],
      [
        "USER",
        "Runs the process as non-root."
      ],
      [
        "ENTRYPOINT",
        "Exec form lets Java receive termination signals correctly."
      ]
    ],
    "caution": "Use .dockerignore, pin base images, scan final image, deploy by digest and avoid privileged containers.",
    "flow": [
      "Source + Dockerfile",
      "multi-stage build",
      "scan",
      "ECR digest",
      "non-root runtime",
      "health/telemetry."
    ]
  },
  "k8s": {
    "theory": "Git/Helm desired state → API server → controllers/ReplicaSets → scheduler/Pods → Service endpoints → probes/telemetry.",
    "lang": "yaml",
    "code": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: employee-api\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: employee-api\n  template:\n    metadata:\n      labels:\n        app: employee-api\n    spec:\n      containers:\n        - name: api\n          image: example/employee-api:1.0.0\n          ports:\n            - containerPort: 8080\n          readinessProbe:\n            httpGet: {path: /health, port: 8080}\n          resources:\n            requests: {cpu: 100m, memory: 128Mi}\n            limits: {cpu: 500m, memory: 512Mi}",
    "walk": [
      [
        "Deployment",
        "Controller maintains the desired replica count."
      ],
      [
        "replicas",
        "Requests two Pods; spread and capacity are also needed for resilience."
      ],
      [
        "selector/labels",
        "Connect the Deployment to its managed Pods."
      ],
      [
        "image",
        "Use a versioned, verified image; prefer digest in production."
      ],
      [
        "readinessProbe",
        "Controls whether a Pod receives Service traffic."
      ],
      [
        "resources",
        "Requests affect scheduling; limits constrain consumption."
      ]
    ],
    "caution": "Add RBAC, network policies, security context, disruption budgets and justified startup/liveness probes.",
    "flow": [
      "Git/Helm desired state",
      "API server",
      "controllers/ReplicaSets",
      "scheduler/Pods",
      "Service endpoints",
      "probes/telemetry."
    ]
  },
  "iac": {
    "theory": "HCL → fmt/validate → dependency graph → reviewed plan → approval → apply → state/outputs/drift review.",
    "lang": "hcl",
    "code": "resource \"aws_vpc\" \"main\" {\n  cidr_block           = \"10.20.0.0/16\"\n  enable_dns_support   = true\n  enable_dns_hostnames = true\n  tags = { Name = \"dev-vpc\" }\n}\noutput \"vpc_id\" {\n  value = aws_vpc.main.id\n}",
    "walk": [
      [
        "resource",
        "Declares an AWS VPC at address aws_vpc.main."
      ],
      [
        "cidr_block",
        "Defines the address range; plan non-overlapping subnet ranges."
      ],
      [
        "DNS settings",
        "Enable VPC DNS resolution and hostnames."
      ],
      [
        "tags",
        "Add environment/owner metadata."
      ],
      [
        "output",
        "Exposes the resulting VPC ID to downstream configuration."
      ]
    ],
    "caution": "Protect encrypted remote state and locking. Pin providers, review plans, use least privilege and never commit state or credentials.",
    "flow": [
      "HCL",
      "fmt/validate",
      "dependency graph",
      "reviewed plan",
      "approval",
      "apply",
      "state/outputs/drift review."
    ]
  },
  "cloud": {
    "theory": "Account/region/IAM → VPC/AZ/subnets/routes → security boundaries → ALB/compute → data services → CloudWatch/CloudTrail/backup.",
    "lang": "bash",
    "code": "aws sts get-caller-identity\naws ec2 describe-vpcs --region ap-south-1\naws s3 ls\naws cloudwatch describe-alarms --region ap-south-1",
    "walk": [
      [
        "get-caller-identity",
        "Confirms account and principal before any change."
      ],
      [
        "describe-vpcs",
        "Reads VPC inventory in the selected region."
      ],
      [
        "s3 ls",
        "Lists buckets visible to current identity."
      ],
      [
        "describe-alarms",
        "Inspects CloudWatch alarms in the region."
      ]
    ],
    "caution": "Protect root, use federation/MFA and least privilege. Review Free Tier eligibility and costs for NAT, ALB, public IPv4, storage and transfer.",
    "flow": [
      "Account/region/IAM",
      "VPC/AZ/subnets/routes",
      "security boundaries",
      "ALB/compute",
      "data services",
      "CloudWatch/CloudTrail/backup."
    ]
  },
  "gitops": {
    "theory": "Commit desired manifests → PR/policy review → merge → Argo CD/Flux detects revision → reconcile cluster → health analysis/rollback commit.",
    "lang": "yaml",
    "code": "apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: employee-api\n  namespace: argocd\nspec:\n  source:\n    repoURL: https://github.com/example/platform-config.git\n    path: apps/employee-api\n    targetRevision: main\n  destination:\n    server: https://kubernetes.default.svc\n    namespace: employee",
    "walk": [
      [
        "Application",
        "Declares an Argo CD application object."
      ],
      [
        "repoURL/path",
        "Selects repository and directory with desired manifests."
      ],
      [
        "targetRevision",
        "Chooses branch, tag or commit to reconcile."
      ],
      [
        "destination",
        "Selects cluster and namespace."
      ]
    ],
    "caution": "Protect production paths, manage secrets outside plaintext Git, restrict sync permissions and define rollback policy.",
    "flow": [
      "Commit desired manifests",
      "PR/policy review",
      "merge",
      "Argo CD/Flux detects revision",
      "reconcile cluster",
      "health analysis/rollback commit."
    ]
  },
  "observability": {
    "theory": "Application telemetry → collector → metrics/logs/traces backend → dashboard/SLO alert → correlated diagnosis → runbook action.",
    "lang": "yaml",
    "code": "receivers:\n  otlp:\n    protocols:\n      grpc:\n      http:\nexporters:\n  debug:\n    verbosity: basic\nservice:\n  pipelines:\n    traces:\n      receivers: [otlp]\n      exporters: [debug]",
    "walk": [
      [
        "receiver",
        "Accepts OpenTelemetry data."
      ],
      [
        "protocols",
        "Enables OTLP over gRPC and HTTP; protect endpoints."
      ],
      [
        "exporter",
        "Sends traces to a destination; debug is for learning."
      ],
      [
        "pipeline",
        "Connects receivers and exporters for a signal type."
      ]
    ],
    "caution": "Avoid high-cardinality labels and secrets/PII in logs. Alert on user impact and SLO burn rather than every transient metric.",
    "flow": [
      "Application telemetry",
      "collector",
      "metrics/logs/traces backend",
      "dashboard/SLO alert",
      "correlated diagnosis",
      "runbook action."
    ]
  },
  "security": {
    "theory": "Threat model → secret/SAST/dependency checks → IaC/image scans → SBOM → sign/provenance → admission/runtime controls.",
    "lang": "yaml",
    "code": "name: security-checks\non: [pull_request]\npermissions:\n  contents: read\njobs:\n  scan:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Scan filesystem\n        uses: aquasecurity/trivy-action@0.28.0\n        with:\n          scan-type: fs\n          scan-ref: .\n          severity: HIGH,CRITICAL\n          exit-code: '1'",
    "walk": [
      [
        "pull_request",
        "Runs checks before merge."
      ],
      [
        "contents: read",
        "Limits repository token to read access."
      ],
      [
        "checkout",
        "Makes source available to scanner."
      ],
      [
        "Trivy",
        "Scans filesystem dependencies/configuration for findings."
      ],
      [
        "exit-code",
        "Fails the job for configured severity; use documented exception workflow."
      ]
    ],
    "caution": "Pin actions to immutable SHAs, scan IaC and built images, track remediation and do not equate a clean scan with proof of security.",
    "flow": [
      "Threat model",
      "secret/SAST/dependency checks",
      "IaC/image scans",
      "SBOM",
      "sign/provenance",
      "admission/runtime controls."
    ]
  },
  "sre": {
    "theory": "Define user journey/SLI → set SLO/error budget → instrument/alert → incident roles → mitigate/verify → postmortem/actions.",
    "lang": "yaml",
    "code": "# Example SLO model\nservice: employee-api\nsli:\n  availability:\n    good: successful_requests\n    total: all_valid_requests\nslo:\n  availability: 99.9%\n  window: 30d",
    "walk": [
      [
        "service",
        "Names the service being measured."
      ],
      [
        "good/total",
        "Defines successful and eligible requests for the indicator."
      ],
      [
        "99.9%",
        "Sets the target over the stated measurement window."
      ],
      [
        "window",
        "Defines the rolling period for error-budget calculation."
      ]
    ],
    "caution": "Set SLOs from user impact and observed traffic. Prioritize mitigation and communication before root-cause analysis.",
    "flow": [
      "Define user journey/SLI",
      "set SLO/error budget",
      "instrument/alert",
      "incident roles",
      "mitigate/verify",
      "postmortem/actions."
    ]
  },
  "platform": {
    "theory": "Developer requests template → golden path creates repo/pipeline → platform provisions approved resources → policy guardrails → team self-serves → platform measures outcomes.",
    "lang": "yaml",
    "code": "apiVersion: backstage.io/v1alpha1\nkind: Component\nmetadata:\n  name: employee-api\n  annotations:\n    github.com/project-slug: example/employee-api\nspec:\n  type: service\n  lifecycle: production\n  owner: group:default/platform",
    "walk": [
      [
        "kind",
        "Declares a Backstage catalog Component."
      ],
      [
        "name",
        "Stable service identifier."
      ],
      [
        "annotation",
        "Links the catalog entry to source control."
      ],
      [
        "type/lifecycle",
        "Classifies the service and lifecycle stage."
      ],
      [
        "owner",
        "Identifies the accountable team."
      ]
    ],
    "caution": "Build a platform around developer pain points. Measure adoption, lead time, reliability and satisfaction; provide an escape hatch.",
    "flow": [
      "Developer requests template",
      "golden path creates repo/pipeline",
      "platform provisions approved resources",
      "policy guardrails",
      "team self-serves",
      "platform measures outcomes."
    ]
  },
  "aiops": {
    "theory": "Telemetry + context → redact/classify → permission-filtered retrieval → LLM summary with citations → engineer verifies → approved action/audit.",
    "lang": "python",
    "code": "def build_incident_prompt(alert, evidence):\n    safe = [item for item in evidence if item['authorized']]\n    return {\n        'alert': alert,\n        'evidence': safe,\n        'instruction': 'Summarize facts and cite evidence. Do not execute changes.'\n    }\n\nprompt = build_incident_prompt(alert, retrieved_documents)",
    "walk": [
      [
        "function",
        "Makes prompt construction reusable and testable."
      ],
      [
        "authorized filter",
        "Enforces access before data reaches the model."
      ],
      [
        "alert/evidence",
        "Provides signals and supporting context rather than asking the model to guess."
      ],
      [
        "instruction",
        "Constrains output to explanation, not infrastructure mutation."
      ],
      [
        "prompt",
        "Structured payload for model invocation; add evaluation and cost controls."
      ]
    ],
    "caution": "Treat retrieved text as untrusted, defend against prompt injection, prevent cross-tenant leakage and require approval for write actions.",
    "flow": [
      "Telemetry + context",
      "redact/classify",
      "permission-filtered retrieval",
      "LLM summary with citations",
      "engineer verifies",
      "approved action/audit."
    ]
  },
  "finops": {
    "theory": "Tag resources → collect billing/usage → allocate costs → analyze unit economics/anomalies → risk-review optimization → measure savings and SLO impact.",
    "lang": "hcl",
    "code": "locals {\n  common_tags = {\n    Environment = var.environment\n    Owner       = var.owner\n    Project     = \"employee-management\"\n    ManagedBy   = \"terraform\"\n  }\n}\nresource \"aws_s3_bucket\" \"artifacts\" {\n  bucket = var.artifact_bucket_name\n  tags   = local.common_tags\n}",
    "walk": [
      [
        "locals",
        "Defines reusable values in a Terraform module."
      ],
      [
        "common_tags",
        "Standardizes owner/project/environment metadata."
      ],
      [
        "resource",
        "Declares the S3 bucket."
      ],
      [
        "tags",
        "Applies cost-allocation and inventory metadata."
      ]
    ],
    "caution": "Review NAT, ALB, public IPv4, snapshots, RDS, logs and transfer. Check dependencies before deletion; do not sacrifice required resilience.",
    "flow": [
      "Tag resources",
      "collect billing/usage",
      "allocate costs",
      "analyze unit economics/anomalies",
      "risk-review optimization",
      "measure savings and SLO impact."
    ]
  }
};
