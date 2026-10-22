import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import astro from "eslint-plugin-astro";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  ...astro.configs["jsx-a11y-recommended"],
  eslintConfigPrettier,
  globalIgnores(["dist/**", "out/**", ".astro/**"]),
]);
