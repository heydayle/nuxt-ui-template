import antfu from '@antfu/eslint-config'

export default antfu(
  {
    rules: {
      'no-undef': 'off',
      'node/prefer-global/process': 'off',
    },
  },
  {
    ignores: [
      '**/api/hooks/',
      '**/api/models/',
      '**/docs/components/',
    ],
  },
)
