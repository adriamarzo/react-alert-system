import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        exports: "named",
      },
    ],
    plugins: [
      resolve({
        extensions,
      }),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        extensions,
      }),
      commonjs({
        extensions,
      }),
      external(),
      terser(),
    ],
  },
];
