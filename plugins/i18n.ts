import { z } from 'zod'
import { makeZodI18nMap } from 'zod-vue-i18n/src/index.ts'
import { createI18n } from 'vue-i18n'

import enZod from '../locales/zod/en.json'
import koZod from '../locales/zod/ko.json'
import viZod from '../locales/zod/vi.json'

import en from '../locales/en.json'
import ko from '../locales/ko.json'
import vi from '../locales/vi.json'

const i18n = createI18n({
  locale: 'ko',
  messages: {
    en: {
      ...en,
      ...enZod,
    },
    ko: {
      ...ko,
      ...koZod,
    },
    vi: {
      ...vi,
      ...viZod,
    },
  },
})

export default defineNuxtPlugin((nuxtApp) => {
  z.setErrorMap(makeZodI18nMap(i18n))
  nuxtApp.vueApp.use(i18n)
})

export { z }
