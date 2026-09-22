<h1 align="center">Dinar Sharafutdinov</h1>

<p align="center"><strong>BIM / Revit developer.</strong> I turn manual BIM work into tools people use every day:<br>Revit add-ins in C# and .NET across Revit 2022-2027, Autodesk Forma extensions in TypeScript,<br>Dynamo and pyRevit automation, and AI agents that read live Revit models.</p>

<p align="center">
  <img alt="Open to work: BIM / Revit developer, contract or full-time, remote from Belgrade" src="https://img.shields.io/badge/Open%20to%20work-BIM%20%2F%20Revit%20developer-2da44e?style=for-the-badge">
</p>

<p align="center">
  <a href="https://sharafutdinov.online"><img alt="Portfolio" src="https://img.shields.io/badge/Portfolio-sharafutdinov.online-005FB8?style=flat-square&logo=googlechrome&logoColor=white"></a>
  <a href="https://www.linkedin.com/in/sharafutdinovdi"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-sharafutdinovdi-0a66c2?style=flat-square&logo=linkedin&logoColor=white"></a>
  <a href="mailto:sharafutdinov.di.dev@outlook.com"><img alt="Email" src="https://img.shields.io/badge/Email-sharafutdinov.di.dev%40outlook.com-59636e?style=flat-square&logo=maildotru&logoColor=white"></a>
  <a href="https://sharafutdinov.online/cv"><img alt="CV" src="https://img.shields.io/badge/CV-sharafutdinov.online%2Fcv-1f2328?style=flat-square&logo=readdotcv&logoColor=white"></a>
  <a href="https://dstools.online"><img alt="DSTools" src="https://img.shields.io/badge/DSTools-dstools.online-2da44e?style=flat-square&logo=autodesk&logoColor=white"></a>
</p>

BIM coordinator by day, tool builder by trade. Most of what I write started as a task someone was doing by hand: a model check, a family library, a drawing set laid out view by view. I ship it as software with an installer, an auto-updater and a release pipeline, not as a script on a shared drive.

**Open to work.** Contract or full-time, remote from Belgrade, Serbia, for engineering companies in the EU and the Gulf. Revit and Forma development, BIM coordination, in-house tooling.

## Featured work

### <img alt="" src="assets/revit-model-mcp-logo.svg" width="28" align="top"> [revit-model-mcp](https://github.com/sharafutdinovdi/revit-model-mcp): an AI agent that reads and acts on a live Revit model

<img alt="Claude Desktop on the left, Revit 2026 on the right: Claude reads the open model, finds the largest room, opens its plan and selects it, isolates it, places a chair and moves it, then cleans up" src="assets/revit-model-mcp-claude.gif" width="100%">

An MCP server that gives Claude, Cursor or any MCP client access to the model that is open in Revit right now. Read-only by default: 18 tools for catalog, filtered queries, aggregates, element details, warnings, relations, view export and coordinator checks. Actions are a separate opt-in set of 9 tools behind two gates, each in its own transaction with a `dry_run` preview and post-commit verification: select, show, isolate, move, place a family, create a wall, set a parameter, delete, batch. I run it from Claude Desktop on a Mac and connect to the Revit workstation over SSH; local and HTTP modes are there as well. Built for Revit 2022-2027, CI on Windows, 112 add-in tests and 67 server tests. `C#` `Revit API` `Python` `MCP` · MIT

<p>
  <a href="https://github.com/sharafutdinovdi/revit-model-mcp/releases/latest"><img alt="Release" src="https://img.shields.io/github/v/release/sharafutdinovdi/revit-model-mcp?style=flat-square&label=release&color=005FB8"></a>
  <a href="https://pypi.org/project/revit-model-mcp/"><img alt="PyPI" src="https://img.shields.io/pypi/v/revit-model-mcp?style=flat-square&logo=pypi&logoColor=white&label=pypi"></a>
  <a href="https://registry.modelcontextprotocol.io/"><img alt="MCP Registry" src="https://img.shields.io/badge/MCP_Registry-io.github.sharafutdinovdi%2Frevit--model--mcp-1f2328?style=flat-square"></a>
  <a href="https://github.com/punkpeye/awesome-mcp-servers"><img alt="awesome-mcp-servers" src="https://img.shields.io/badge/listed_in-awesome--mcp--servers-2da44e?style=flat-square"></a>
</p>

### <img alt="" src="assets/revit-devloader-logo.svg" width="28" align="top"> [revit-devloader](https://github.com/sharafutdinovdi/revit-devloader): install, update and roll back Revit add-ins without leaving Revit

<img alt="DevLoader inside Revit 2026: the catalog lists three sample plugins with their icons; Install adds a button to the ribbon, the plugin runs, a newer version arrives in the feed and is installed, Uninstall hides the button" src="assets/revit-devloader.gif" width="100%">

A development loader for Revit add-ins, built the way pyRevit treats bundles: a plugin is a package with a manifest, assemblies per Revit year and an icon; the DevLoader ribbon panel is generated from installed packages; a feed is the registry of a delivery channel. Versioned packages verified by SHA-256, immutable run folders so a broken build never touches a working one, install, update and uninstall inside Revit without a restart for command plugins. One core, two hosts: .NET Framework 4.8 for Revit 2022-2024 and .NET 8 for 2025-2026, three sample plugins to start from, 120 unit tests, user and admin installers and a release pipeline on GitHub Actions. `C#` `.NET 4.8 / 8` `WPF` `GitHub Releases` · [releases](https://github.com/sharafutdinovdi/revit-devloader/releases/latest), MIT

### <img alt="" src="assets/forma-zoning-check-logo.svg" width="28" align="top"> [Autodesk Forma toolchain](https://github.com/sharafutdinovdi/forma-zoning-check): a zoning extension and the kit it grew into

<img alt="Zoning Check running inside Autodesk Forma: plot controls on the left, the compliance result and the permitted envelope generated over the proposal" src="assets/forma-zoning-check.png" width="100%">

**[forma-zoning-check](https://github.com/sharafutdinovdi/forma-zoning-check)** checks a Forma proposal against its plot controls — floor area ratio, site coverage, building height, setbacks — and generates the permitted envelope over the site. Presets ship for Dubai, Riyadh, Serbia, Germany, the Netherlands and Spain, so the rule set is the jurisdiction's, not mine. Built on the Forma embedded-view SDK with the native Autodesk design system, so it looks like a part of Forma rather than an iframe.

Everything reusable was pulled out of it and published, because the next extension should not start from an empty folder:

| Package | What it does |
|---|---|
| [![npm](https://img.shields.io/npm/v/create-forma-extension?style=flat-square&logo=npm&logoColor=white&label=create-forma-extension)](https://www.npmjs.com/package/create-forma-extension) | `npm create forma-extension@latest my-extension` — a working extension, zero runtime dependencies |
| [![npm](https://img.shields.io/npm/v/forma-extension-kit?style=flat-square&logo=npm&logoColor=white&label=forma-extension-kit)](https://www.npmjs.com/package/forma-extension-kit) | Host adapter: proposal snapshots, base-group classification, footprint provider chain, cross-panel channel |
| [autodesk-forma-extension-template](https://github.com/sharafutdinovdi/autodesk-forma-extension-template) | The Vite + TypeScript template the scaffolder generates, also usable with *Use this template* |

`TypeScript` `Vite` `Forma embedded-view SDK` `npm` · MIT

### Upstream contributions

| Project | Contribution | Status |
|---|---|---|
| [pyrevitlabs/pyRevit](https://github.com/pyrevitlabs/pyRevit) | [#3617](https://github.com/pyrevitlabs/pyRevit/pull/3617): *Show View Range*, handle ceiling plans (RCP) correctly | ![state](https://img.shields.io/github/pulls/detail/state/pyrevitlabs/pyRevit/3617?style=flat-square&label=) |
| [autodesk-platform-services/skills](https://github.com/autodesk-platform-services/skills) | [#7](https://github.com/autodesk-platform-services/skills/pull/7): `aps-forma-extension`, a Forma extension development skill for the official APS collection | ![state](https://img.shields.io/github/pulls/detail/state/autodesk-platform-services/skills/7?style=flat-square&label=) |
| [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | [#14398](https://github.com/punkpeye/awesome-mcp-servers/pull/14398): list revit-model-mcp | ![state](https://img.shields.io/github/pulls/detail/state/punkpeye/awesome-mcp-servers/14398?style=flat-square&label=) |
| [johnpierson/RhythmForDynamo](https://github.com/johnpierson/RhythmForDynamo) | [#111](https://github.com/johnpierson/RhythmForDynamo/pull/111): mark nodes promoted to OOTB Dynamo as obsolete, with an audit of the rest in [#24](https://github.com/johnpierson/RhythmForDynamo/issues/24) | ![state](https://img.shields.io/github/pulls/detail/state/johnpierson/RhythmForDynamo/111?style=flat-square&label=) |
| [Nice3point/revit-skills](https://github.com/Nice3point/revit-skills) | [#5](https://github.com/Nice3point/revit-skills/issues/5): reported the Extensible Storage gap; the maintainer shipped a skill for it | ![state](https://img.shields.io/github/issues/detail/state/Nice3point/revit-skills/5?style=flat-square&label=) |

## Also public

| Repository | What it is | Stack |
|---|---|---|
| [forma-zoning-check](https://github.com/sharafutdinovdi/forma-zoning-check) | Autodesk Forma extension: plot control compliance and the permitted envelope, six jurisdiction presets | `TypeScript` `Vite` |
| [create-forma-extension](https://github.com/sharafutdinovdi/create-forma-extension) | One-command scaffolder for Forma extensions, published on npm | `JavaScript` `npm` |
| [forma-extension-kit](https://github.com/sharafutdinovdi/forma-extension-kit) | Reusable read-only host adapter for Forma extensions, published on npm | `TypeScript` `npm` |
| [autodesk-forma-extension-template](https://github.com/sharafutdinovdi/autodesk-forma-extension-template) | Minimal Vite + TypeScript template for Forma Site Design extensions | `TypeScript` `Vite` |
| [revit-day-by-day](https://github.com/sharafutdinovdi/revit-day-by-day) | Archived learning series: 25 isolated Revit API commands for Revit 2026, one per day | `C#` `.NET 8` |

## DSTools: custom Revit development for engineering companies

[DSTools](https://dstools.online) is my Revit development practice. What it delivers:

- **Custom add-ins.** Scoped, built, tested on the client's Revit version, installed and supported. Delivered: **PipelineBuilder** (piping systems modelling from DWG layouts) and **AgrZoning** (zoning plans and areas for the Russian AGR digital model). In development for the Autodesk App Store: **FamilyChecker** and **ModelChecker**. `C#` `.NET 4.8 / 8` `Revit API 2021-2026` `WPF`

The [six-page overview deck](https://sharafutdinov.online/media/dstools/dstools-overview.pdf) walks through the four tools, one screen each: what the window shows, what it checks, what comes out.

<a href="https://sharafutdinov.online/media/dstools/dstools-overview.pdf"><img alt="Cover of the DSTools overview deck: Revit add-ins for engineering teams, four tools" src="assets/dstools-overview-cover.png" width="260"></a>

Every add-in ships the same way: installer, auto-updater, versioned releases through GitHub Actions. `Inno Setup` `GitHub Actions`

## How I work

- A task starts as a written spec: which files, what changes, how it is verified. The spec is the contract, whoever implements it, a person or a coding agent.
- Implementation and review are separate passes. Review blocks a release only for real problems, otherwise it never converges.
- Nothing is done until the check has run and its output is on the table: a test run, a build, a screenshot of the dialog.
- Routine work is scheduled, not remembered: releases, health checks and weekly reports run on GitHub Actions and report to Telegram.
- Notes and decisions live in a searchable base, so a question answered once is not answered again.

## Stack

![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![.NET](https://img.shields.io/badge/.NET_4.8_%2F_8-512BD4?style=flat-square&logo=dotnet&logoColor=white) ![WPF](https://img.shields.io/badge/WPF-0078D4?style=flat-square&logo=windows&logoColor=white) ![Revit API](https://img.shields.io/badge/Revit_API_2021--2027-186BFF?style=flat-square&logo=autodesk&logoColor=white) ![Autodesk Forma](https://img.shields.io/badge/Autodesk_Forma-0696D7?style=flat-square&logo=autodesk&logoColor=white) ![Dynamo](https://img.shields.io/badge/Dynamo-2D2D2D?style=flat-square&logo=autodesk&logoColor=white) ![pyRevit](https://img.shields.io/badge/pyRevit-3776AB?style=flat-square&logo=python&logoColor=white) ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) ![MCP](https://img.shields.io/badge/MCP-1f2328?style=flat-square&logo=anthropic&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white) ![Inno Setup](https://img.shields.io/badge/Inno_Setup%20%2F%20WiX-59636e?style=flat-square) ![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white) ![PyPI](https://img.shields.io/badge/PyPI-3775A9?style=flat-square&logo=pypi&logoColor=white)

## Activity

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/activity-dark.svg">
  <img alt="Contributions over the last 12 months" src="assets/activity-light.svg" width="100%">
</picture>


<sub>The graph is generated from the GitHub GraphQL API by <a href="scripts/activity-graph.mjs">scripts/activity-graph.mjs</a> and refreshed daily by a GitHub Actions cron, no third-party card service.</sub>

## Contact

The fastest way to reach me is [sharafutdinov.online](https://sharafutdinov.online), [LinkedIn](https://www.linkedin.com/in/sharafutdinovdi) or [sharafutdinov.di.dev@outlook.com](mailto:sharafutdinov.di.dev@outlook.com).
