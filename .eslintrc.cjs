module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : process.cwd(),
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'filename-rules',
    'unused-imports',
    'sort-keys-fix'
  ],
  extends: [
    'airbnb/base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    browser: false,
    node: true,
    jest: true,
  },
  ignorePatterns: ['..eslintrc.js'],
  rules: {
    // folder names are in `kebab-case`, add the corresponding suffix when nesting, separated by `.`, e.g. `man2json5.http-client.service.ts`
    'filename-rules/match': [
      2,  /^([a-z0-9]+-)*[a-z0-9]+(?:\..*)?$/
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      // interfaces should start with the prefix I, e.g. `IPlatform`
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I([A-Z][a-z0-9]+)*[A-Z][a-z0-9]*$",
          "match": true
        }
      },
      // `class`, `type`, `interface` and `enum` are all in `PascalCase`, e.g. `PlatformRsp`
      {
        "selector": ["class", "typeAlias", "enum"],
        "format": ["PascalCase"],
        "custom": {
          "regex": "^([A-Z][a-z0-9]+)*[A-Z][a-z0-9]*$",
          "match": true
        }
      },
      // enum member should be SCREAMING_SNAKE_CASE
      {
        "selector": ["enumMember"],
        "format": ["UPPER_CASE", "snake_case"],
        "custom": {
          "regex": "^[A-Z0-9]+(?:_[A-Z0-9]+)*$",
          "match": true
        }
      }
    ],
    // disable CR/ LF checking
    'prettier/prettier': [
      'error', {
        'endOfLine': 'auto'
      }
    ],
    // unused import and unused vars, ignore _ pattern
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
    ],
    // disable no-restricted-syntax
    "no-restricted-syntax": [
      "error",
      "LabeledStatement",
      "WithStatement"
    ],
    // disabled unused rules
    'no-useless-concat': 'off',
    'no-await-in-loop': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/return-await': 'off',
    'no-return-await': 'off',
    'no-useless-constructor': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ["error", {"devDependencies": true}],
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-async-promise-executor': 'off',
    'no-void': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  },
  "overrides": [
    // rules for constant folder only
    {
      "files": ["src/constant/**/*/*.ts"],
      "rules": {
        // constant names are in `SCREAMING_SNAKE_CASE`, e.g. `MAN2JSON5_CONSTANT`
        "@typescript-eslint/naming-convention": [
          "error",
          {
            "selector": "variable",
            "format": ["UPPER_CASE"]
          }
        ],
        // sorting const keys order
        "sort-keys-fix/sort-keys-fix": [
          "error",
          "asc"
        ],
      }
    }
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
};
