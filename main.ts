// One Line, One Laugh — make.fun bounty u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a
//
// Writes one funny line to entry.txt.
// The gate: UTF-8 text, 1 to 140 characters, not only white space.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My therapist says I'm avoidant. I said I'd think about it — and never called back.";

// The program self-checks the gate before writing, so a bad line can
// never be shipped by accident.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`line is ${LINE.length} characters; gate needs 1-140`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "out");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to entry.txt`);
