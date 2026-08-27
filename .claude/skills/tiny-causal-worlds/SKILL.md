---
name: tiny-causal-worlds
description: "Design and build bounded instructional simulations that teach one causal relationship through learner action and observable consequences. Use when turning a topic, misconception, process, system, lesson, or course corpus into an explorable conceptual model; do not use for decorative gamification or simple recall activities that do not benefit from simulation."
---

# Tiny Causal Worlds

Create small worlds in which the interaction is the explanation. The world should contain state, rules, relationships, and consequences that feel present before the learner acts. Reveal the underlying model through prediction, manipulation, observation, comparison, and replay rather than through exposition alone.

Do not begin with code. Establish the instructional target and causal truth first. Keep discovery conversational: ask only questions whose answers materially change the world, normally one concise question at a time. Use information already supplied, make expert recommendations when the user asks you to choose, and defend consequential decisions.

## Route the request

- For a single topic, misconception, process, or proposed activity, proceed to causal modeling.
- For a Canvas course, syllabus, assignment set, presentation collection, readings, videos, or other course corpus, read [references/course-opportunity-scan.md](references/course-opportunity-scan.md) and identify the best simulation opportunity before modeling it.
- Before defining entities, variables, rules, and learner actions, read [references/causal-world-framework.md](references/causal-world-framework.md).
- Before choosing a visual direction, read [references/design-system-selection.md](references/design-system-selection.md).
- After the second approval checkpoint and before implementation, read [references/build-and-validation.md](references/build-and-validation.md).

## Evidence rule

Treat course materials as authoritative for the intended curriculum, terminology, scope, and assessed performance. Use reliable external sources to verify causal accuracy and fill genuine gaps. Do not silently overwrite intentional course framing. Flag consequential conflicts, distinguish sourced facts from design assumptions, and resolve them before building.

## Two approval checkpoints

### Checkpoint 1: Opportunity Gate

When scanning a course corpus, rank the three strongest opportunities, recommend one, and explain why it offers the greatest instructional leverage. Stop and obtain the user's approval before developing that activity into a world.

Skip this gate when the user has already selected the exact instructional target.

### Checkpoint 2: World Gate

Present a concise build brief containing:

- the primary causal claim and aligned learning outcome;
- the relevant misconception or performance problem;
- entities, state, learner-controlled variables, rules, constraints, boundaries, and simplifications;
- the predict-act-observe-revise-replay loop;
- visible feedback and intentionally latent state;
- the selected bundled design system and a concrete defense;
- the intended platform, deliverable, accessibility approach, and validation criteria.

Stop and obtain approval before coding or producing the final simulation. Approval at the Opportunity Gate does not authorize implementation.

## Build principle

After approval, build the smallest truthful world that can make the causal relationship discoverable. Add complexity only when it improves the mental model or preserves domain truth. A polished interface cannot compensate for a false, inert, or instructionally irrelevant model.
