module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'project': './tsconfig.json'
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  plugins: [
    '@typescript-eslint',
    'react', 
    'jsx-a11y', 
    'import', 
    'react-hooks',
  ],
  settings: {
    "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    'import/resolver': {
      'node': {
        'extensions': [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts', '.js', '.jsx'] }],
    'import/no-extraneous-dependencies': [2, { devDependencies: ['**/test.tsx', '**/test.ts'] }],
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'react/no-array-index-key': 'warn',
    'jsx-a11y/media-has-caption': 'warn',
    'padded-blocks': 1,
    'no-return-assign': ['error', 'except-parens'],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ],
   'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
  },
};
