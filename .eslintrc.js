const OFF = 0
const WARN = 1
const ON = 2
const YES = true
const USE = false

module.exports = {
  root: YES,

  parserOptions: {
    ecmaVersion: 2016,
    impliedStrict: YES,
    sourceType: 'module',
  },

  // https://github.com/sindresorhus/globals/blob/master/globals.json
  env: {
    node: YES,
  },

  // https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js
  extends: [
    'eslint:recommended',
  ],

  rules: {
    'array-bracket-spacing': [ON, 'never'],
    'array-callback-return': ON,
    'arrow-parens': ON,
    'arrow-spacing': ON,
    'block-scoped-var': ON,
    'block-spacing': ON,
    'brace-style': [ON, '1tbs'],
    'comma-dangle': [ON, 'always-multiline'],
    'comma-spacing': ON,
    'comma-style': ON,
    'computed-property-spacing': ON,
    'consistent-return': ON,
    'consistent-this': [ON, '_self'],
    'curly': ON,
    'dot-location': [ON, 'property'],
    'dot-notation': WARN,
    'eol-last': ON,
    'eqeqeq': [ON, 'smart'],
    'func-call-spacing': ON,
    'guard-for-in': WARN,
    'handle-callback-err': [ON, '^err(or)?$'],
    'implicit-arrow-linebreak': ON,
    'indent': [ON, 2, { flatTernaryExpressions: YES, SwitchCase: 1 }],
    'jsx-quotes': [ON, 'prefer-double'],
    'key-spacing': [ON, { mode: 'minimum' }],
    'keyword-spacing': ON,
    'linebreak-style': [ON, 'unix'],
    'max-depth': [ON, 5],
    'max-len': [1, 120, 4, { ignoreUrls: YES, ignorePattern: '=\\s+/.+/' }],
    'max-nested-callbacks': [ON, 5],
    'new-parens': ON,
    'no-alert': ON,
    'no-array-constructor': ON,
    'no-caller': ON,
    'no-catch-shadow': ON,
    'no-confusing-arrow': [ON, { allowParens: YES }],
    'no-console': OFF,
    'no-div-regex': ON,
    'no-duplicate-imports': [ON, { includeExports: YES }],
    'no-eval': ON,
    'no-extend-native': ON,
    'no-extra-bind': ON,
    'no-floating-decimal': ON,
    'no-implicit-globals': ON,
    'no-implied-eval': ON,
    'no-iterator': ON,
    'no-label-var': ON,
    'no-lone-blocks': ON,
    'no-lonely-if': ON,
    'no-loop-func': ON,
    'no-multi-str': ON,
    'no-multiple-empty-lines': [ON, { max: 2 }],
    'no-native-reassign': ON,
    'no-new-func': ON,
    'no-new-object': ON,
    'no-new-wrappers': ON,
    'no-new': ON,
    'no-octal-escape': ON,
    'no-proto': ON,
    'no-prototype-builtins': WARN,
    'no-return-assign': [ON, 'except-parens'],
    'no-script-url': ON,
    'no-self-compare': ON,
    'no-sequences': ON,
    'no-shadow-restricted-names': ON,
    'no-template-curly-in-string': ON,
    'no-throw-literal': ON,
    'no-trailing-spaces': ON,
    'no-undef': OFF,              // handled by TS
    'no-undef-init': ON,
    'no-unexpected-multiline': ON,
    'no-unmodified-loop-condition': WARN,
    'no-unneeded-ternary': ON,
    'no-unused-expressions': ON,
    'no-unused-vars': OFF,        // handled by TS
    'no-use-before-define': [ON, { functions: USE, variables: USE }],
    'no-useless-call': ON,
    'no-useless-computed-key': ON,
    'no-useless-rename': ON,
    'no-useless-return': ON,
    'no-var': ON,
    'no-void': ON,
    'no-whitespace-before-property': ON,
    'no-with': ON,
    'object-curly-spacing': [ON, 'always'],
    'object-shorthand': ON,
    'one-var-declaration-per-line': ON,
    'operator-linebreak': ON,
    'prefer-const': [ON, { destructuring: 'all' }],
    'prefer-numeric-literals': ON,
    'prefer-promise-reject-errors': ON,
    'quote-props': [ON, 'consistent'],
    'quotes': [ON, 'single', 'avoid-escape'],
    'radix': ON,
    'require-await': ON,
    'require-yield': ON,
    'rest-spread-spacing': ON,
    'semi-spacing': ON,
    'semi': [ON, 'never'],
    'space-before-blocks': ON,
    'space-before-function-paren': [ON, 'always'],
    'space-in-parens': ON,
    'space-unary-ops': ON,
    'switch-colon-spacing': [ON, { after: YES }],
    'template-curly-spacing': ON,
    'unicode-bom': [ON, 'never'],
    'wrap-iife': [ON, 'inside'],
    'yield-star-spacing': ON,
    'yoda': [ON, 'never'],
  },

  'overrides': [
    {
      files: ['test/', 'spec/'],
      env: {
        jasmine: YES,
      },
      rules: {
        'no-console': OFF,
        'prefer-arrow-callback': OFF,
      }
    }
  ]
}
