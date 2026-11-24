// One-Star Review of Something Essential — make.fun entry.
// Writes a single deadpan one-star review (one line, <= 160 chars)
// to /output/entry.txt. Node 22, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "Sleep: eight hours in, zero rest out, and it still expects me back tonight.";

// Gate: the entry must be one line of 1-160 UTF-8 characters.
if (review.length < 1 || review.length > 160 || review.includes("\n")) {
  throw new Error(`review fails the gate (${review.length} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
