---
title: "Moodle Lessons → SCORM"
summary: "Canvas has no Lesson activity. A shared engine carried ACA-122's lessons across — upgraded."
order: 2
tools: ["HTML/CSS/JS", "SCORM 1.2", "Canvas"]
link: "https://aca-scorm.vercel.app/"
featured: true
---
**Canvas has no equivalent for Moodle's Lesson activity — so when a state-bid
contract moved Blue Ridge off OpenLMS, every interactive lesson in ACA-122 was
scheduled to die with the old platform.**

### At a Glance

| | |
|---|---|
| **Role** | Sole designer/developer; SME partnership with course faculty |
| **Context** | ACA-122 (College Transfer Success), Blue Ridge Community College — part of a college-wide, state-mandated Moodle→Canvas migration, August 2026 go-live |
| **Tools** | HTML/CSS/JavaScript, SCORM 1.2 API, Canvas LMS, reusable component library, AI-assisted authoring workflow |
| **Timeline** | Summer 2026 build cycle, alongside full production load |
| **Live artifact** | [Unit 1: Welcome to Blue Ridge — live lesson](https://aca-scorm.vercel.app/) (same file as the SCORM package; tracking no-ops gracefully on the open web) |

### The Problem

Moodle's Lesson activity is a format with no exit visa: sequenced pages, embedded
questions, and branching logic stored in a structure Canvas simply doesn't have.
The standard migration advice is to flatten lessons into static pages and bolt a
quiz on the end — which destroys exactly the interactivity that made them worth
building. ACA-122 is the college's transfer-success course, taken by students who
most need engaging, self-paced material, and it leaned on Lessons heavily. With a
hard August 2026 go-live and dozens of courses in the migration queue, hand-crafting
each lesson as a bespoke web project wasn't viable either. The question: could I
build a *repeatable pipeline* that turned Moodle Lessons into something better than
what they replaced — not just something that survived the move?

### Constraints

- **SCORM 1.2 only** — Canvas's most reliable interoperability path, but a 25-year-old
  spec with a temperamental JavaScript API
- **WCAG 2.1 AA throughout** — semantic HTML, keyboard navigation, screen-reader-tested
  interactions, sufficient contrast within BRCC's brand palette
- **Faculty must retain ownership** — SMEs needed a way to edit lesson content without
  touching HTML, or the pipeline would create a bottleneck (and an equity problem)
  around one developer
- **Institutional branding** — every lesson consistent with BRCC's design system
- **No dedicated dev time** — built alongside regular production and support duties

### The Approach

**First move: build one lesson the hard way, then mine it.** I converted the first
ACA-122 lesson (Campus Resources) as a full hand-build to learn where the real
costs were. The answer: not the content — the *plumbing*. SCORM API handshakes,
navigation logic, quiz gating, progress tracking, and styling consumed most of the
effort and would be identical in every lesson. So I extracted all of it into a
shared CSS/JS engine — one tested SCORM 1.2 runtime with mastery scoring, gated
knowledge checks with retry logic, and BRCC's brand system baked in. Every
subsequent lesson became a content problem, not an engineering problem.

**The complication: SCORM's runtime is a minefield of silent failures.** Embedded
YouTube videos played fine in preview, then failed inside the LMS with Error 153 —
a player-configuration error caused by how SCORM packages report their origin. I
diagnosed it, built origin-fallback embed logic, and documented the fix as a
reusable pattern so it never costs a build day again. The same philosophy —
*solve it once, encode it* — drove a WCAG-compliant HTML component library
(callouts, accordions, checklists, media blocks) documented in a shared knowledge
base with a live Vercel preview workflow, so components could be seen and tested
before they ever touched a course. The library encodes reasoning, not just markup:
alert labels are navy rather than red because red text on the red tint background
fails WCAG AA at body sizes, and the hero banner's gradient opacity is engineered
so white text passes contrast over any photo a course builder drops in. Decisions
like those used to live in my head; now they live in the components.

**The design decision: assembly over authorship.** With the engine, the component
library, and a documented five-phase conversion workflow (with AI-assisted content
transformation prompts), lesson production compressed dramatically — three complete
lessons (13, 7, and 8 pages, each with interactive knowledge checks) came together
in a single working session. I paired the pipeline with a faculty edit guide so
SMEs could revise their own lesson content directly, keeping ownership where it
belongs. The tradeoff I accepted: a stricter, more opinionated lesson structure in
exchange for speed, consistency, and accessibility guarantees on every page.

### The Result

**Lessons that were scheduled for deletion now run in Canvas as accessible,
interactive SCORM packages — and each new conversion takes hours, not days.**
The shared engine and component library became standard infrastructure for the
college's course rebuilds, extending beyond ACA-122 into CIS-110 and the broader
migration pipeline, with the workflow documented well enough for others to
replicate.

### Looking Back

I'd build the component library *before* the first lesson instead of extracting it
after — the hand-build taught me the patterns, but I paid for that education in
rework. And I'd involve the SME edit workflow from day one: faculty ownership
turned out to be the difference between a tool people tolerate and a pipeline
people ask to join.

### Artifacts

- [Unit 1: Welcome to Blue Ridge — live lesson](https://aca-scorm.vercel.app/) —
  the identical `index.html` that ships in the SCORM package; the engine's
  defensive API discovery means one file runs in Canvas with full tracking and
  on the open web with none
- [BRCC HTML Component Library](/lab/) — the design system behind the rebuilds
- Related case study: [Moodle XML → QTI Converter](/work/qti-converter/)
