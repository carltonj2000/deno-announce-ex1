#!/usr/bin/env -S deno run --allow-read

async function tree(dir: string): Promise<string[]> {
  const de: string[] = [];
  for await (const dirEntry of Deno.readDir(dir)) {
    de.push(dirEntry.name);
  }
  return de;
}

const t = await tree(Deno.args[0] || "./");
console.log("%c" + t.join(" "), "background-color: blue;");
