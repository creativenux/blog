---
title: "Spaces vs Tabs: A Practical Take"
date: 2024-01-15
description: "The age-old debate, with a focus on consistency and team happiness over dogma."
topics: ["tooling", "opinion"]
---

The spaces vs. tabs debate has produced memes, flame wars, and surprisingly strong opinions. Here's a pragmatic view.

## Consistency matters most

The worst outcome is a codebase that mixes both. It ruins diffs, makes alignment unpredictable, and frustrates everyone. **Pick one and enforce it.**

- **Prettier** or **ESLint** can format on save so nobody has to think about it.
- Add an `.editorconfig` so different editors behave the same.

## My preference: spaces

I use 2 spaces. Reasons:

1. **Rendering** — Tabs can render at different widths (2, 4, 8) depending on editor or site. Spaces always look the same.
2. **Alignment** — When you align things across lines (e.g. in object literals), spaces keep alignment exact. Tabs can break it when someone uses a different tab width.
3. **Ecosystem** — Many style guides and tools assume spaces. It's the path of least friction.

That said, if your team has already standardized on tabs and it's enforced, **don't rewrite the codebase**. The cost outweighs the benefit.

## What actually helps

- **Format on save** — Removes the debate from daily work.
- **Pre-commit hooks** — Prevent inconsistent formatting from landing.
- **Document the choice** — One line in the README or `CONTRIBUTING.md` is enough.

Spend your energy on architecture and readability. Indent with whatever your team agrees on, and move on.
