/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type { TextBoxDtoReq } from './textBoxDtoReq'

export interface TranslateTextBoxesReq {
  CHAPTER_ID?: number
  ORIGINAL_LOCALE_ID?: number
  TEXT_BOXES?: TextBoxDtoReq[]
  TRANSLATE_ENGINE_CODE?: number
  TRANSLATE_LOCALE_ID?: number
}