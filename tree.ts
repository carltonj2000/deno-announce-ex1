#!/usr/bin/env -S deno run --allow-read
import { walk } from "jsr:@std/fs@1";
import { relative } from "node:path";

export async function tree(dir: string): Promise<string[]> {
  const de: string[] = [];
  for await (const dirEntry of walk(dir)) {
    de.push(relative(dir, dirEntry.path));
  }
  return de;
}

if (import.meta.main) {
  const t = await tree(Deno.args[0]);
  console.log(t.join("\n"));
}
