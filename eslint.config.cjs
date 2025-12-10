// eslint.config.cjs
const js = require("@eslint/js");
const securityPlugin = require("eslint-plugin-security");
const sonarjs = require("eslint-plugin-sonarjs");
const noSecrets = require("eslint-plugin-no-secrets"); 
const globals = require("globals");

module.exports = [
  js.configs.recommended,
  securityPlugin.configs.recommended,
  sonarjs.configs.recommended,
  {
    plugins: {
      "no-secrets": noSecrets, 
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      
      "security/detect-object-injection": "warn",
      "security/detect-non-literal-fs-filename": "warn",
      "security/detect-eval-with-expression": "error",
      "security/detect-unsafe-regex": "error",
      "security/detect-child-process": "warn",
      
   
      "sonarjs/no-ignored-exceptions": "warn",
      "sonarjs/x-powered-by": "error",
      
      "no-secrets/no-secrets": ["error", { "tolerance": 4.0 }], 
      
     
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-unused-vars": "warn",
    },
    ignores: ["node_modules/", "dist/", "*.json", "package-lock.json"],
  },
];