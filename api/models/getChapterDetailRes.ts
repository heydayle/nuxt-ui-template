/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type { GetChapterDetailResCRAWLERDATA } from './getChapterDetailResCRAWLERDATA'
import type { ListLang } from './listLang'
import type { ContentTrans } from './contentTrans'

export interface GetChapterDetailRes {
  CHAPTER_NAME?: string
  COMIC_ID?: number
  COMIC_NAME?: string
  CRAWLER_DATA?: GetChapterDetailResCRAWLERDATA
  CREATED_AT?: string
  ID?: number
  LIST_LANG?: ListLang[]
  SITE?: string
  TRANSLATED?: ContentTrans[]
  UPDATED_AT?: string
}
