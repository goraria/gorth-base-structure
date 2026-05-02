/// <reference types="node" />

import { defineConfig } from "tsup"

export default defineConfig({
  clean: true,
  dts: true,
  bundle: true,
  // Keep shared modules (e.g. React contexts) in common chunks
  // so different entrypoints consume the same runtime instance.
  splitting: true,
  entry: [
    "src/index.ts",
    "src/components/*/*.ts",
    "src/common/*.ts",
    "src/lib/*.ts",
    "src/cores/*.ts",
    "src/express/*.ts",
    "src/next/*.ts",
  ],
  format: ["esm"],
  sourcemap: false,
  minify: false,
  target: "es2024",
  outDir: "dist",
  treeshake: true,

  external: [""],
})