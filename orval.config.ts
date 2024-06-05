import { defineConfig } from 'orval'

export default defineConfig({
  petstore: {
    output: {
      mode: 'tags-split',
      target: 'api/hooks',
      schemas: 'api/models',
      client: 'vue-query',
      mock: true,
      tslint: true,
      override: {
        mutator: {
          path: './api/mutator/custom-instance.ts',
          name: 'customInstance',
        },
      },
    },
    input: {
      target: './api-docs.json',
    },
  },
})
