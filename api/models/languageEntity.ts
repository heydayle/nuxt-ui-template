/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type { ChapterEntity } from './chapterEntity'
import type { ImageEntity } from './imageEntity'

export interface LanguageEntity {
  CHAPTER?: ChapterEntity
  CHAPTER_ID?: number
  CREATED_AT?: string
  ID?: number
  IMAGES?: ImageEntity[]
  IS_ORIGINAL?: boolean
  LOCALE?: string
  TEXT_NUMBER?: number
  UPDATED_AT?: string
}