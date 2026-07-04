---
title: "Wall & Partition Assembly"
summary: "A Storyline labeling interaction for construction students — two years in active use."
order: 5
tools: ["Storyline 360"]
link: "https://360.articulate.com/review/content/79b68207-44f5-47f7-a442-1ee10f61b03f/review"
---
**An instructor teaching blueprint reading and construction came to the Teaching
& Learning Center wanting interactives for his course. This Storyline
drag-and-drop — label every component of a wall assembly before you can
submit — anchored that commission.**

### At a Glance

| | |
|---|---|
| **Role** | Designer and developer; commissioned build for CTE faculty |
| **Context** | Blueprint reading & construction course, Blue Ridge Community College; delivered alongside a set of H5P activities for the same instructor |
| **Tools** | Articulate Storyline 360 — drag-and-drop labeling with submit-gated validation; custom background composition |
| **Timeline** | Built and published February 2024 |
| **Artifact** | [View the interaction](https://360.articulate.com/review/content/79b68207-44f5-47f7-a442-1ee10f61b03f/review) |

### The Problem

Reading a blueprint means seeing a wall the way a framer does: top plate, studs,
headers, the named anatomy under the drywall. It's an identification skill, and
the textbook version — a labeled diagram to memorize — tests recognition, not
recall. The instructor wanted students *producing* the names, not nodding at
them.

### Constraints

- **Complete-before-submit** — the interaction had to demand a full answer, not
  reward one-label-at-a-time trial and error
- **Faithful to the trade** — component names and placements had to survive
  review by an instructor who frames walls for a living
- **Part of a package** — one commission, multiple artifacts; the Storyline
  piece had to coexist with H5P activities in the same course economy

### The Approach

The core design decision is the submission gate: **every label must be placed
before submit unlocks.** That's a deliberate choice between feedback
philosophies, and it was the decision I wrestled with most. Immediate per-drop
feedback lets students guess their way through — drop, check, adjust — without
ever holding the whole wall in their head. Gating validation behind complete
placement forces a committed mental model first; the red flags on wrong answers
arrive only after the student has answered *everything*. It trades comfort for
recall practice, which is the point.

This was also the project where I learned Storyline's drag-and-drop logic from
the inside — drop-target states, submit-triggered evaluation, the distance
between how the interaction should behave pedagogically and how the tool wants
to behave by default. The visual layer is a custom background composed outside
Storyline with the interaction built over it.

*(Pending: exact feedback/retry configuration — being verified against the
published package rather than trusted to memory.)*

### The Result

**Two years after delivery, the interaction is still in active use** — course
records for the 2024–2026 construction sections show students working it as
recently as the final week of Spring 2026 classes. Instructors quietly retire
activities that don't earn their place; surviving across sections for two years
is its own adoption metric.

### Looking Back

Here's the uncomfortable part: until recently, I didn't know any of that. I
delivered the piece in 2024 and the feedback loop simply ended — no usage data
reached me, no follow-up was built into the handoff, and for two years I
half-assumed it had died on the vine. It hadn't. But **finding out by accident
is not a process.** Delivery is not implementation, and implementation is not
evaluation. Every commission I take now builds the follow-through in from the
start: who places it in the course, when we check usage, and how I'll hear
whether it worked. The documented adoption in my later pipelines is a direct
response to the two years this one spent succeeding in silence.

### Artifacts

- [Wall & Partition Assembly — live review link](https://360.articulate.com/review/content/79b68207-44f5-47f7-a442-1ee10f61b03f/review)
- Related: [Moodle Lessons → SCORM](/work/moodle-lessons-to-scorm/) — the pipeline this kind of interaction plugs into
