const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: 'airbnb-base',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 9,
  },
  rules: {
    camelcase: ERROR,
    semi: [ERROR, 'never'],
    'consistent-return': OFF,
    'no-alert': OFF,
    'class-methods-use-this': OFF,
    'arrow-parens': [ERROR, 'as-needed'],
    'global-require': OFF,
    'no-unreachable': ERROR,
    'no-restricted-syntax': [ERROR, {
      'selector': 'ExportDefaultDeclaration',
      'message': 'Use named exports, please.'
    }],
    'comma-dangle': [ERROR, 'never'],
    'object-curly-newline': [ERROR, {
      ImportDeclaration: { multiline: true }
    }],
    'no-unreachable': ERROR,
    'import/prefer-default-export': OFF,
    'import/no-anonymous-default-export': [ERROR, {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowCallExpression: false,
      allowLiteral: false,
      allowObject: false
    }],
    'import/no-unresolved': OFF,
    'import/extensions': OFF,
    'import/no-extraneous-dependencies': OFF,
    'no-param-reassign': OFF,
    'no-multi-assign': OFF,
    'no-restricted-syntax': ['off', 'ForInStatement'],
    'no-console': OFF,
    'no-confusing-arrow': [ERROR, { allowParens: true }],
    'max-len': [ERROR, {
      code: 150,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreRegExpLiterals: true
    }],
    'prefer-destructuring': [ERROR, {
      object: true,
      array: false
    }],
    'react/sort-comp': OFF,
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }]
  }
}
