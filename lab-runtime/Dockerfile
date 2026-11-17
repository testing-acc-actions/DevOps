FROM ghcr.io/tsl0922/ttyd:latest AS ttyd
FROM ubuntu:24.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y --no-install-recommends \
    bash ca-certificates curl git jq python3 python3-pip unzip zip less vim-tiny \
    openssh-client dnsutils iproute2 iputils-ping netcat-openbsd make gcc g++ \
    awscli gnupg lsb-release software-properties-common && \
    install -m 0755 -d /etc/apt/keyrings && \
    curl -fsSL https://apt.releases.hashicorp.com/gpg | gpg --dearmor -o /etc/apt/keyrings/hashicorp-archive-keyring.gpg && \
    chmod 0644 /etc/apt/keyrings/hashicorp-archive-keyring.gpg && \
    echo "deb [signed-by=/etc/apt/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(. /etc/os-release && echo $VERSION_CODENAME) main" > /etc/apt/sources.list.d/hashicorp.list && \
    apt-get update && apt-get install -y --no-install-recommends terraform && \
    curl -fsSL https://github.com/rhysd/actionlint/releases/download/v1.7.7/actionlint_1.7.7_linux_amd64.tar.gz | tar -xz -C /usr/local/bin actionlint && \
    apt-get clean && rm -rf /var/lib/apt/lists/*
COPY --from=ttyd /usr/bin/ttyd /usr/local/bin/ttyd
RUN useradd --create-home --uid 1000 --shell /bin/bash learner && \
    mkdir -p /workspace && chown -R learner:learner /workspace /home/learner
USER learner
WORKDIR /workspace
ENV HOME=/home/learner AWS_ACCESS_KEY_ID=test AWS_SECRET_ACCESS_KEY=test AWS_DEFAULT_REGION=us-east-1 AWS_EC2_METADATA_DISABLED=true
EXPOSE 7681
CMD ["ttyd","--port","7681","--writable","bash","--login"]