module.exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    '@react-native-community',
    'prettier',
    'prettier/react',
  ],
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'import/no-unresolved': [
      2,
      {
        ignore: ['@'],
      },
    ],
    'import/extensions': [
      2,
      {
        js: 'never',
        json: 'always',
        png: 'always',
        jpg: 'always',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        packageDir: './',
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'react/destructuring-assignment': [0],
    'max-len': [2, 200, 2, { ignoreUrls: true }],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'no-use-before-define': [
      'error',
      {
        variables: false,
      },
    ],
    'react/prefer-stateless-function': [0],
    'react/forbid-prop-types': [
      1,
      {
        forbid: ['any', 'array'],
      },
    ],
    'react/no-did-mount-set-state': 0,
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'default-param-last': 'off',
    'import/no-relative-packages': 'off',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'global-require': 'off',
  },
  plugins: ['react', 'react-native'],
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
    jest: true,
    'react-native/react-native': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
