/* eslint-env node */

const defaultConfig = {
  // web-ext global options:
  sourceDir: "./src/",
  artifactsDir: "./dist/",
  ignoreFiles: [".DS_Store"],

  // web-ext subcommand options:
  build: {
    overwriteDest: true,
  },
  run: {
    firefox: process.env.FIREFOX_BINARY || "nightly",
    browserConsole: true,
    startUrl: ["about:debugging"],
    pref: ["shieldStudy.logLevel=All"],
  },
};

module.exports = defaultConfig;
