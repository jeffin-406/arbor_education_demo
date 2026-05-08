# Student Major Project: Enterprise Multi-Branch CI/CD Infrastructure Pipeline

This repository hosts the complete infrastructure engineering code for a production-ready, highly automated Git-driven CI/CD framework. It features a modern decoupled architectural layout utilizing **GitHub Actions**, **Docker Multi-Stage Compilation Build Strategies**, **Amazon Elastic Container Registry (ECR)**, and **Nginx Application Runtimes** running on self-hosted instances.
i
---

## 🚀 Architectural Design Highlights

* **Build Once, Deploy Many:** Container image footprints are compiled exactly *once* during development pipelines and seamlessly promoted directly into production servers. This removes ambient environment drift risk and cuts redundant continuous integration compute overhead.
* **Decoupled Runtime Injection (`env.sh`):** Resolves the classic client-side SPA variable baking dilemma. Operating system layer variables are converted dynamically into web-browser consumable objects inside the Nginx container workspace at launch initialization.
* **Multi-Stage Optimization Pattern:** Separates heavy build dependencies (NodeJS tools, compilers, package utilities) from live static assets. The runtime server engine is powered by a minimalist Alpine Linux image layer.

---

## 🛠️ Infrastructure Telemetry Mapping

The pipeline data structure processes code changes systematically across isolated project environments depending on your current active Git development tracking branch:

```text
[ Developer Updates Code ]
            │
            ├──► Push to 'dev' branch
            │     └──► Job 1: Build & Multi-Stage Compilation ──► Push to AWS ECR (:latest)
            │     └──► Job 2: Download Image via Compose ──► Deploy Dev EC2 (:Port 8050)
            │
            └──► Merge to 'main' branch
                  └──► Direct CD Script Sequence ──► Pull from ECR ──► Deploy Prod EC2 (:Port 80)}
