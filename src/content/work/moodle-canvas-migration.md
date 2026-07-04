---
title: "The Moodle → Canvas Migration"
summary: "A state-bid contract chose the LMS. The machinery I built decided what survived the move."
order: 1
tools: ["Canvas", "SCORM 1.2", "Python", "H5P"]
featured: true
---
**A state-bid contract decided Blue Ridge's LMS for it. We had one academic year
to move every course off OpenLMS — and a choice about whether to survive the move
or come out better than we went in.**

### At a Glance

| | |
|---|---|
| **Role** | Core builder — I designed and built the course-rebuild machinery: conversion pipelines, templates, and the component system. (The transition itself was led by our Canvas project lead; this page covers my slice, precisely.) |
| **Context** | College-wide Moodle/OpenLMS → Canvas migration, Blue Ridge Community College |
| **Deadline** | August 17, 2026 go-live — fixed, external, non-negotiable |
| **Tools** | Canvas LMS, SCORM 1.2, HTML/CSS/JS, Python, H5P, Articulate Rise/Storyline |

### The Problem

LMS migrations driven by procurement rather than pedagogy carry a specific risk:
the timeline is set by a contract, not by how long good course design takes. Two
kinds of content were in real danger of not surviving the move at all — Moodle's
interactive Lesson activities, which have no Canvas equivalent, and years of
faculty-built quiz banks locked in Moodle's XML format. The default outcome for
both is quiet degradation: lessons flattened into static pages, quizzes rebuilt
by hand or abandoned.

My job was to make sure the default didn't happen.

### The Approach (in three builds)

Rather than rebuilding courses one at a time, I built **machinery** — three
systems that turned one-off rescue jobs into repeatable pipelines:

**1. A lesson-conversion pipeline.** Moodle Lessons became accessible, interactive
SCORM 1.2 packages powered by a shared engine — one tested runtime handling API
calls, gated knowledge checks, and brand styling, so each new lesson is a content
problem, not an engineering problem.
→ Full case study: [Moodle Lessons → SCORM](/work/moodle-lessons-to-scorm/)

**2. A quiz-bank converter.** A custom Moodle XML → QTI tool that survives Canvas's
stricter-than-spec import validation, carrying multiple choice, matching, and
short-answer questions across without faculty ever touching XML.
→ Full case study: [Moodle XML → QTI Converter](/work/qti-converter/)

**3. A component system.** A WCAG-minded, Canvas-safe HTML component library —
documented in a shared knowledge base with a live preview workflow — so every
rebuilt page is consistent, accessible, and buildable by anyone on the team.
→ Lab entry: [BRCC HTML Component Library](/lab/)

The connective tissue between all three: **solve it once, encode it.** Every
hard-won fix — a SCORM video failure, a QTI escaping bug, a contrast ratio that
failed AA — became a documented, reusable pattern instead of tribal knowledge.

### The Result

**Content the procurement timeline had scheduled for deletion instead arrives
in Canvas upgraded** — more accessible, more consistent, and maintainable by more
people than the originals. The pipelines and component system became standard
infrastructure for rebuilds across multiple courses (ACA-122, CIS-110, DME-115),
ahead of the August 2026 go-live.

### Looking Back

I'd formalize the machinery-first approach from day one rather than discovering
it under deadline. The instinct to stop mid-crisis and build a tool feels like
lost time; it was the single highest-leverage decision of the migration.
