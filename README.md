<h2 align="center">Dinar Sharafutdinov</h2>

<p align="center">
  <strong>BIM / Revit Developer &middot; Author of DSTools</strong><br />
  Revit add-ins in C#/WPF, web platforms in Next.js, AI-driven automation around AEC workflows.
</p>

<p align="center">
  <a href="https://sharafutdinov.online">Portfolio</a> &middot;
  <a href="https://sharafutdinov.online/cv/CV_Dinar_Sharafutdinov_EN.pdf">CV</a> &middot;
  <a href="https://www.linkedin.com/in/sharafutdinovdi">LinkedIn</a> &middot;
  <a href="mailto:sharafutdinov.di.dev@outlook.com">Email</a>
</p>

---

I build software for the AEC industry: Revit plugins that validate models and manage
family libraries, desktop apps that ship with real installers and auto-updates, and web
platforms that tie it all together. The approach is the same in every project —
understand the process, model the rules, ship something people actually use.

## DSTools

My main product: a Revit automation ecosystem for BIM engineers.

- **Revit plugins** — family validation, library management, parameter workflows
  (`C#` &middot; `.NET` &middot; `Revit API 2022–2026` &middot; `WPF`)
- **Web platform** — [app.dstools.online](https://app.dstools.online): family library
  portal, review workflows, licensing (`Next.js` &middot; `TypeScript` &middot; `Supabase`)
- **Delivery** — installers, auto-updater, CI/CD release pipelines
  (`Inno Setup` &middot; `GitHub Actions`)

Site: [dstools.online](https://dstools.online). The codebase is private while the
product matures; public plugin releases are planned.

## How I Build

A one-person product with a multi-repo backlog only works if the routine part runs
without me. So I develop inside an AI agent pipeline I built and maintain myself, and
treat it as infrastructure rather than a novelty.

- **Spec before code.** Every task starts as a written spec with explicit scope and
  acceptance criteria. Ambiguity gets resolved by a human, not guessed by a model.
- **Roles split across models.** One model plans, reviews and accepts; another
  implements strictly from the spec. Review blocks on release-critical issues only —
  otherwise the loop never converges.
- **Nothing ships unverified.** No task is accepted without a command run and its
  output shown. The rule applies to the agents and to me equally.
- **Routine work is a scheduled job.** Release pipelines, weekly reports, health checks
  and digests run on GitHub Actions cron and report into Telegram.
- **Knowledge lives in a database.** Notes, decisions and prior context sit in a
  Postgres full-text index, so past decisions get recalled instead of re-derived.

The point is throughput: shipping across several repositories at a pace that usually
takes a small team.

## Other Work

| Project | Description |
|---|---|
| [Revit Day By Day](https://github.com/sharafutdinovdi/revit-day-by-day) | Archived learning series: 25 isolated Revit API commands for Revit 2026 (`C#`, `.NET 8`) |
| [sharafutdinov.online](https://sharafutdinov.online) | Personal site — portfolio, services, writing (`Next.js`, `Tailwind CSS`, self-hosted) |
| Freelance Revit plugins | Custom plugins for clients: Revit 2020–2026, pyRevit, Dynamo |
| Automation & bots | Telegram services and internal tooling in Python — subscriptions, payments, scheduled delivery (`aiogram`, `PostgreSQL`, `Docker`) |

## Stack

`C#` `.NET` `WPF` `Revit API` `TypeScript` `Next.js` `Supabase` `PostgreSQL` `Python` `Docker` `GitHub Actions`

## Contact

Open to contract work on Revit/AEC automation and on AI-assisted engineering pipelines.
The fastest way to reach me is [sharafutdinov.online](https://sharafutdinov.online) or
[LinkedIn](https://www.linkedin.com/in/sharafutdinovdi).
