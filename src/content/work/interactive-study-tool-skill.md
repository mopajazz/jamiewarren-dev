---
title: "The Interactive Study Tool Skill"
summary: "A design practice encoded as an AI skill: topic in, deployable study tool out."
order: 4
tools: ["HTML/CSS/JS", "GitHub", "Vercel", "Claude"]
link: "https://github.com/mopajazz/Interactive-Study-Tool-"
---
**I built an interactive study tool for one course. Then, instead of building the
next one, I encoded the entire design — architecture, theming, content standards,
quality checklist — as an AI skill that generates a deployable tool for any
discipline in minutes. The chemistry demo below took one prompt.**

### At a Glance

| | |
|---|---|
| **Role** | Designer, developer, and skill author |
| **Context** | Study companions paired with SCORM lessons at Blue Ridge Community College (DME-115, and other courses), generalized into a reusable generator |
| **Tools** | HTML/CSS/JavaScript (zero-build), GitHub (version control + deploy pipeline), Vercel, Claude (skill authoring) |
| **Artifacts** | [Chemistry demo — Molecular Glow Lab](https://teaching-beta.vercel.app/) · [Skill source on GitHub](https://github.com/mopajazz/Interactive-Study-Tool-) |

### The Problem

Students needed self-paced study companions alongside course lessons — searchable
references with drill practice, not another quiz. The first tools I built by hand
proved the pattern worked, and revealed the problem with success: every new course
wanted one. Each hand-build meant re-solving the same architecture, re-making the
same design decisions, and re-checking the same quality list — days of work per
discipline for what was, structurally, the same tool wearing different clothes.

The question worth asking wasn't "how do I build the next one faster?" It was:
**can a design practice itself be the deliverable?** If I could write down every
decision — precisely enough that an AI could execute the design without me — then
any instructor, any course, any discipline could have a tool.

### Constraints

- **Zero-build, zero-dependency** — pure HTML/CSS/JS, no npm, no bundler; the
  output must run from a double-clicked file and deploy to Vercel unchanged
- **Content editable by non-developers** — all entries isolated in one data file;
  an instructor updates content without ever touching UI logic (the same
  faculty-ownership principle behind my SCORM edit guides)
- **Real content, no stubs** — 15–25 fully written entries per tool, drill
  questions phrased like the actual exam, study tips on most entries
- **Themed to the discipline, not skinned** — chemistry feels like a lab bench,
  law feels like a casebook; typography, palette, atmosphere, even the welcome
  copy adapt ("Lab session initialized." vs. "Casebook open.")

### The Approach

**First move: extract the invariant.** Across every subject, the tool is the same
three-panel machine — a searchable sidebar, a detail reference view, and a
flashcard drill mode with shuffle, scoring, and a completion screen. That
architecture, plus a strict four-file separation (shell / styles / data / logic),
became the skeleton nothing is allowed to vary from.

**Then: encode the judgment, not just the structure.** The hard part of writing a
skill isn't describing the layout — it's capturing the *design decisions* so they
survive without me in the room. Version 3.0 replaced an early flaw head-on: the
first version forced every subject into a fake terminal, which fit chemistry and
biology badly. The fix was a branching **Interaction Model** system — five named
mechanics (Command Sim, Parameter Lab, Diagnostic Explorer, Scenario Branch, Ear
Trainer), each with its own input surface, output behavior, and data schema. Law
gets Scenario Branch (choose → outcome). Chemistry gets Diagnostic Explorer
(click → identify). Music theory gets Ear Trainer (listen → discriminate). The
skill matches discipline to model automatically, but — critically — asks rather
than silently defaulting when a discipline doesn't cleanly fit an existing model.
That one design correction is the whole difference between a tool that's themed
and a tool that's actually built for how each discipline is practiced.

**The design decision: the skill presents choices before it builds.** Rather than
generating on first prompt, it offers three named design directions — palette,
font pairing, signature atmosphere — and waits. The human stays the art director;
the AI does the production. That division of labor is the point.

### The Result

**What took days of hand-building now takes minutes: topic in, deployable
project folder out.** The chemistry demo — [Molecular Glow Lab](https://teaching-beta.vercel.app/),
an 18-entry organic chemistry reference with a reaction-simulator drill mode —
was generated from a single topic prompt, pushed to GitHub, and auto-deployed to
Vercel with zero configuration changes. The [skill's own version history](https://github.com/mopajazz/Interactive-Study-Tool-)
is public: v2.0 shipped the fixed three-panel structure, v3.0 added the
Interaction Model correction above — the repo itself is evidence this is a
maintained practice, not a one-off prompt.

### Looking Back

The skill currently encodes visual and structural quality better than it encodes
pedagogy — entry quality still depends on reviewing the generated content against
the course's actual outcomes. The next version pairs generation with an explicit
SME-review pass, the same way my SCORM pipeline pairs conversion with faculty
editing: AI for production speed, humans for what's true.

### A Note on Method

This project is how I think AI belongs in instructional design: not as a shortcut
around craft, but as a way to **encode craft so it scales**. The skill is a
design system, a style guide, and a QA checklist that happens to execute. I've
[published it](https://github.com/mopajazz/Interactive-Study-Tool-) so others can use or adapt it.

### Artifacts

- [Molecular Glow Lab — chemistry demo](https://teaching-beta.vercel.app/)
- [Interactive Study Tool skill — GitHub](https://github.com/mopajazz/Interactive-Study-Tool-)
- Related: [Moodle Lessons → SCORM](/work/moodle-lessons-to-scorm/) · [BRCC HTML Component Library](/lab/)
