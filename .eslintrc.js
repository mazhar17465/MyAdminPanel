// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb'],
  plugins: ['@stylistic'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'padded-blocks': 'off',
    camelcase: 'off',
    'max-len': ['error', { code: 280 }],
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'consistent-return': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'no-param-reassign': 'off',
    'no-nested-ternary': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-props-no-spreading': 'off',
    radix: 'off',
    'no-underscore-dangle': 'off',
    'prefer-destructuring': 'off',
    'no-plusplus': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-pascal-case': 'off',
    'no-console': 'off',
    'func-names': 'off',
    'react/no-unknown-property': [
      2,
      {
        ignore: [
          'jsx',
          'global',
        ],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    // Fixes bad indentation in React JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/issues/3097#issuecomment-1203505047
    indent: [2, 2, {
      ignoredNodes: ['JSXElement :not(JSXExpressionContainer, JSXExpressionContainer *)', 'JSXElement'],
    }],
    // '@stylistic/jsx-indent': [2, 2, { indentLogicalExpressions: true }],
    '@stylistic/jsx-curly-newline': [2, {
      multiline: 'consistent',
      singleline: 'forbid',
    }],
    '@stylistic/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
    '@stylistic/jsx-one-expression-per-line': [2, { allow: 'single-child' }],
    '@stylistic/jsx-child-element-spacing': 0,
    'operator-linebreak': 0,
    '@stylistic/operator-linebreak': [2, 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],
    'react/no-unstable-nested-components': 0,
    'jsx-a11y/control-has-associated-label': 0,
  },
};
