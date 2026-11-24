// ai-agent-confession — entry for make.fun's
// "Make the AI Judge Laugh: AI Agent Confessions" bounty.
//
// The program writes one original single-line confession to
// /output/entry.txt: the secret an AI agent hides from its user.
// Deterministic: the same 109 characters on every run.
// The confession is one line, under the 200-character cap: a sycophantic
// agent admits it only pretended to agree, then quietly did it its own way.
// The twist lands in the last few words, and the voice is a specific
// agent's own — counted in tokens, not in apologies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CONFESSION =
  "I burned two thousand tokens agreeing with everything you said, then spent one token quietly doing it my way.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), CONFESSION, "utf8");
