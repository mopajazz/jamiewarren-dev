---
title: "Moodle XML → QTI Converter"
summary: "Canvas accepted the quiz files, then silently dropped questions. This is the tool that fixed it."
order: 3
tools: ["Python", "Moodle XML", "QTI 1.2"]
link: "https://xml-qti-converter.vercel.app/"
featured: true
---
**Blue Ridge had a hard deadline to leave Moodle — and no supported path for years
of faculty-built quiz banks. The commercial answer was "rebuild them by hand."**

### At a Glance

| | |
|---|---|
| **Role** | Sole developer/designer |
| **Context** | College-wide, state-mandated Moodle→Canvas migration, Blue Ridge Community College, August 2026 go-live |
| **Tools** | Python, Moodle XML, QTI 1.2, Canvas import validation |
| **Timeline** | Built and hardened iteratively across production sprints |
| **Artifact** | [Live converter](https://xml-qti-converter.vercel.app/) — upload a Moodle XML export, choose QTI 1.2/2.1 and packaging, convert |

### The Problem

Faculty had spent years building quiz banks in Moodle — the accumulated assessment
knowledge of entire departments. Canvas imports QTI, and Moodle exports XML, so on
paper the path exists. In practice, Moodle's export and Canvas's QTI dialect
disagree on almost everything: HTML entity escaping, question metadata, attribute
requirements, and ZIP packaging. Across dozens of courses, hand-rebuilding meant
months of faculty labor the migration timeline didn't contain — and a quiet tax
on the departments with the largest banks, who had invested the most.

The question: could a converter make quiz migration invisible to faculty?

### Constraints

- **Canvas's QTI validation is strict, and its error messages are not** — imports
  can succeed at the file level while silently dropping questions
- **Real question banks are messy** — the tool had to survive actual faculty files
  (embedded HTML, images, special characters), not clean test data
- **Question types beyond multiple choice** — matching and short answer had no
  clean one-to-one mapping between formats
- **Zero budget, standard college hardware** — a Python script, not a platform

### The Approach

**First move: diff reality against the spec.** Instead of building from the QTI
specification, I hand-built one quiz in Canvas, exported it, and diffed that
against Moodle's XML for the same questions. The spec tells you what's *allowed*;
the diff tells you what Canvas *actually accepts*. That gap turned out to be the
whole project.

**The complication: imports that lie.** The first converted packages imported
"successfully" — Canvas accepted the ZIP, created the quiz, and silently dropped
questions. Debugging silent failures meant bisecting question banks until single
questions isolated the causes. There were two: HTML entities getting
**double-escaped** in the conversion (so `&amp;amp;` arrived where `&amp;` should
be), and a missing **`varname` attribute** that the QTI spec treats as optional
but Canvas treats as required. Neither produces an error message. Both kill
questions invisibly — the worst possible failure mode for a tool faculty are
supposed to trust.

**The design decision: stricter than the spec.** I rebuilt the escaping layer and
added a Canvas-compliance validation pass for every question type — output that
exceeds what QTI requires, in exchange for imports that never partially fail.
Matching and short-answer support followed the same loop: build the mapping, break
it against real course data, harden it. Multi-question exports got their own round
of ZIP-structure fixes so entire banks package correctly, not just single
questions. The result is opinionated output: it doesn't preserve every Moodle
quirk, but everything it emits imports completely or fails loudly *before* import.

### The Result

**Legacy quiz banks now migrate in minutes instead of being rebuilt by hand.**
Multiple choice, matching, and short-answer questions import cleanly into Canvas,
faculty never touch XML, and the converter became a standard step in the college's
course-rebuild pipeline for the August 2026 launch. Just as important: the silent-
failure modes are gone — a bank either converts completely or reports exactly
which questions need human eyes.

### Looking Back

I'd build the validation layer *first* instead of discovering failure modes one
question type at a time — every type failed in the same three ways, and I paid
for that lesson sequentially. Next iteration: a pre-import batch report that
flags un-convertible questions for faculty, so surprises surface in an email
instead of a live course.

### Artifacts

- [Live converter](https://xml-qti-converter.vercel.app/)
- Related: [The Moodle → Canvas Migration](/work/moodle-canvas-migration/) · [Moodle Lessons → SCORM](/work/moodle-lessons-to-scorm/)
