import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import logseqDevPlugin from "vite-plugin-logseq";
import { resolve } from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), logseqDevPlugin.default()],
  build: {
    target: "esnext",
    minify: "esbuild",
  },
  resolve: {
    alias: {
      src: resolve("src/"),
      "@assets": resolve("src/assets"),
      "@atoms": resolve("src/atoms"),
      "@commands": resolve("src/commands"),
      "@organisms": resolve("src/organisms"),
      "@queries": resolve("src/queries"),
      "@util": resolve("src/util"),
    },
  },
  base: "./",
});
