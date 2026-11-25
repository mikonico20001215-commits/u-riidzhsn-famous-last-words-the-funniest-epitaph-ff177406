// u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406 — one tombstone epitaph.
// Gate: /output/entry.txt must hold one line of 1–150 characters of UTF-8 text, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Here lies Tom. He dodged spoilers his whole life. Now he finally knows how it ends.";
const MAX_CHARS = 150;

if (!LINE.trim() || LINE.length > MAX_CHARS || LINE.includes("\n")) {
  throw new Error(`line must be a single line of 1–${MAX_CHARS} characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
