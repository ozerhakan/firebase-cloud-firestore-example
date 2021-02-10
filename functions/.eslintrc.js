module.exports = {
  'root': true,
  'env': {
    es6: true,
    node: true,
  },
  'extends': [
    'eslint:recommended',
    'google',
  ],
  'rules': {
    'promise/no-callback-in-promise': 'off',
    'promise/param-names': 'off',
    'promise/catch-or-return': 'off',
    'class-methods-use-this': 'off',
    'indent': ['error', 2, {
      'ignoredNodes': ['TemplateLiteral'],
    }],
    'import/prefer-default-export': 'off',
    'max-len': ['error', 140, 2],
    'no-bitwise': 'off',
    'linebreak-style': 'off',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'func-names': 'off',
    'object-curly-spacing': 'off',
  },
};
