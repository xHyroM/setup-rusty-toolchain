import { defineConfig } from "tsup";

export function createTsupConfig({
  entry = ["src/index.ts"],
  external = [] as string[],
  noExternal = [] as string[],
  platform = "neutral",
  format = ["esm"],
  target = "es2022",
  skipNodeModulesBundle = true,
  clean = true,
  shims = true,
  minify = false,
  splitting = false,
  keepNames = true,
  dts = true,
  sourcemap = true,
  esbuildPlugins = [],
} = {}) {
  return defineConfig({
    entry,
    external,
    noExternal,
    platform,
    format,
    skipNodeModulesBundle,
    target,
    clean,
    shims,
    minify,
    splitting,
    keepNames,
    dts,
    sourcemap,
    esbuildPlugins,
  });
}

export default createTsupConfig({
  noExternal: [
    "@actions/core",
    "@actions/exec",
    "@actions/tool-cache",
    "@actions/cache",
  ],
  skipNodeModulesBundle: false,
  minify: true,
  dts: false,
  sourcemap: false,
  platform: "node",
});
