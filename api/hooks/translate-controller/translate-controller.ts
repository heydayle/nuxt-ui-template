/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import {
  useMutation,
  useQuery,
} from '@tanstack/vue-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationReturnType,
  UseQueryOptions,
  UseQueryReturnType,
} from '@tanstack/vue-query'
import {
  unref,
} from 'vue'
import type {
  MaybeRef,
} from 'vue'
import type {
  AppResponseListLocaleRes,
  AppResponseListTargetLocale,
  AppResponseListTranslateEngineEntity,
  AppResponseObject,
  AppResponseTranslatePtsRes,
  AppResponseTranslateRes,
  ComicTranslateLocaleParams,
  GetTranslateLocaleListForPtsParams,
  GetTranslateLocaleListParams,
  TranslatePtsReq,
  TranslateReq,
  TranslateTextBoxesReq,
} from '../../models'
import { customInstance } from '../../mutator/custom-instance'
import type { ErrorType } from '../../mutator/custom-instance'

type AwaitedInput<T> = PromiseLike<T> | T

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never

export function translate(translateReq: MaybeRef<TranslateReq>) {
  translateReq = unref(translateReq)

  return customInstance<AppResponseTranslateRes>(
    { url: `/api-v2/work/translate`, method: 'POST', headers: { 'Content-Type': 'application/json' }, data: translateReq },
  )
}

export function getTranslateMutationOptions<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof translate>>, TError, { data: TranslateReq }, TContext> }): UseMutationOptions<Awaited<ReturnType<typeof translate>>, TError, { data: TranslateReq }, TContext> {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof translate>>, { data: TranslateReq }> = (props) => {
    const { data } = props ?? {}

    return translate(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type TranslateMutationResult = NonNullable<Awaited<ReturnType<typeof translate>>>
export type TranslateMutationBody = TranslateReq
export type TranslateMutationError = ErrorType<unknown>

export function useTranslate<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof translate>>, TError, { data: TranslateReq }, TContext> }): UseMutationReturnType<
        Awaited<ReturnType<typeof translate>>,
        TError,
        { data: TranslateReq },
        TContext
      > {
  const mutationOptions = getTranslateMutationOptions(options)

  return useMutation(mutationOptions)
}
export function translateTextBoxes(translateTextBoxesReq: MaybeRef<TranslateTextBoxesReq>) {
  translateTextBoxesReq = unref(translateTextBoxesReq)

  return customInstance<AppResponseObject>(
    { url: `/api-v2/work/translate/translate-textboxes`, method: 'POST', headers: { 'Content-Type': 'application/json' }, data: translateTextBoxesReq },
  )
}

export function getTranslateTextBoxesMutationOptions<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof translateTextBoxes>>, TError, { data: TranslateTextBoxesReq }, TContext> }): UseMutationOptions<Awaited<ReturnType<typeof translateTextBoxes>>, TError, { data: TranslateTextBoxesReq }, TContext> {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof translateTextBoxes>>, { data: TranslateTextBoxesReq }> = (props) => {
    const { data } = props ?? {}

    return translateTextBoxes(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type TranslateTextBoxesMutationResult = NonNullable<Awaited<ReturnType<typeof translateTextBoxes>>>
export type TranslateTextBoxesMutationBody = TranslateTextBoxesReq
export type TranslateTextBoxesMutationError = ErrorType<unknown>

export function useTranslateTextBoxes<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof translateTextBoxes>>, TError, { data: TranslateTextBoxesReq }, TContext> }): UseMutationReturnType<
        Awaited<ReturnType<typeof translateTextBoxes>>,
        TError,
        { data: TranslateTextBoxesReq },
        TContext
      > {
  const mutationOptions = getTranslateTextBoxesMutationOptions(options)

  return useMutation(mutationOptions)
}
export function translatePts(translatePtsReq: MaybeRef<TranslatePtsReq>) {
  translatePtsReq = unref(translatePtsReq)

  return customInstance<AppResponseTranslatePtsRes>(
    { url: `/api-v2/work/translate/translate-pts`, method: 'POST', headers: { 'Content-Type': 'application/json' }, data: translatePtsReq },
  )
}

export function getTranslatePtsMutationOptions<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof translatePts>>, TError, { data: TranslatePtsReq }, TContext> }): UseMutationOptions<Awaited<ReturnType<typeof translatePts>>, TError, { data: TranslatePtsReq }, TContext> {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof translatePts>>, { data: TranslatePtsReq }> = (props) => {
    const { data } = props ?? {}

    return translatePts(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type TranslatePtsMutationResult = NonNullable<Awaited<ReturnType<typeof translatePts>>>
export type TranslatePtsMutationBody = TranslatePtsReq
export type TranslatePtsMutationError = ErrorType<unknown>

export function useTranslatePts<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof translatePts>>, TError, { data: TranslatePtsReq }, TContext> }): UseMutationReturnType<
        Awaited<ReturnType<typeof translatePts>>,
        TError,
        { data: TranslatePtsReq },
        TContext
      > {
  const mutationOptions = getTranslatePtsMutationOptions(options)

  return useMutation(mutationOptions)
}
export function getTranslateLocaleList(params: MaybeRef<GetTranslateLocaleListParams>, signal?: AbortSignal) {
  params = unref(params)

  return customInstance<AppResponseListTargetLocale>(
    { url: `/api-v2/work/translate/target-locales`, method: 'GET', params: unref(params), signal,
    },
  )
}

export function getGetTranslateLocaleListQueryKey(params: MaybeRef<GetTranslateLocaleListParams>) {
  return ['api-v2', 'work', 'translate', 'target-locales', ...(params ? [params] : [])] as const
}

export function getGetTranslateLocaleListQueryOptions<TData = Awaited<ReturnType<typeof getTranslateLocaleList>>, TError = ErrorType<unknown>>(params: MaybeRef<GetTranslateLocaleListParams>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getTranslateLocaleList>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getGetTranslateLocaleListQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getTranslateLocaleList>>> = ({ signal }) => getTranslateLocaleList(params, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof getTranslateLocaleList>>, TError, TData>
}

export type GetTranslateLocaleListQueryResult = NonNullable<Awaited<ReturnType<typeof getTranslateLocaleList>>>
export type GetTranslateLocaleListQueryError = ErrorType<unknown>

export function useGetTranslateLocaleList<TData = Awaited<ReturnType<typeof getTranslateLocaleList>>, TError = ErrorType<unknown>>(params: MaybeRef<GetTranslateLocaleListParams>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getTranslateLocaleList>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetTranslateLocaleListQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function getTranslateLocaleListForPts(params: MaybeRef<GetTranslateLocaleListForPtsParams>, signal?: AbortSignal) {
  params = unref(params)

  return customInstance<AppResponseListTargetLocale>(
    { url: `/api-v2/work/translate/target-locales-pts`, method: 'GET', params: unref(params), signal,
    },
  )
}

export function getGetTranslateLocaleListForPtsQueryKey(params: MaybeRef<GetTranslateLocaleListForPtsParams>) {
  return ['api-v2', 'work', 'translate', 'target-locales-pts', ...(params ? [params] : [])] as const
}

export function getGetTranslateLocaleListForPtsQueryOptions<TData = Awaited<ReturnType<typeof getTranslateLocaleListForPts>>, TError = ErrorType<unknown>>(params: MaybeRef<GetTranslateLocaleListForPtsParams>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getTranslateLocaleListForPts>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getGetTranslateLocaleListForPtsQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getTranslateLocaleListForPts>>> = ({ signal }) => getTranslateLocaleListForPts(params, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof getTranslateLocaleListForPts>>, TError, TData>
}

export type GetTranslateLocaleListForPtsQueryResult = NonNullable<Awaited<ReturnType<typeof getTranslateLocaleListForPts>>>
export type GetTranslateLocaleListForPtsQueryError = ErrorType<unknown>

export function useGetTranslateLocaleListForPts<TData = Awaited<ReturnType<typeof getTranslateLocaleListForPts>>, TError = ErrorType<unknown>>(params: MaybeRef<GetTranslateLocaleListForPtsParams>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getTranslateLocaleListForPts>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetTranslateLocaleListForPtsQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function getSourceLocale(signal?: AbortSignal) {
  return customInstance<AppResponseListLocaleRes>(
    { url: `/api-v2/work/translate/source-locales`, method: 'GET', signal,
    },
  )
}

export function getGetSourceLocaleQueryKey() {
  return ['api-v2', 'work', 'translate', 'source-locales'] as const
}

export function getGetSourceLocaleQueryOptions<TData = Awaited<ReturnType<typeof getSourceLocale>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getSourceLocale>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getGetSourceLocaleQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getSourceLocale>>> = ({ signal }) => getSourceLocale(signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof getSourceLocale>>, TError, TData>
}

export type GetSourceLocaleQueryResult = NonNullable<Awaited<ReturnType<typeof getSourceLocale>>>
export type GetSourceLocaleQueryError = ErrorType<unknown>

export function useGetSourceLocale<TData = Awaited<ReturnType<typeof getSourceLocale>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getSourceLocale>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetSourceLocaleQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function getLocaleList(signal?: AbortSignal) {
  return customInstance<AppResponseListLocaleRes>(
    { url: `/api-v2/work/translate/locales`, method: 'GET', signal,
    },
  )
}

export function getGetLocaleListQueryKey() {
  return ['api-v2', 'work', 'translate', 'locales'] as const
}

export function getGetLocaleListQueryOptions<TData = Awaited<ReturnType<typeof getLocaleList>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getLocaleList>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getGetLocaleListQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getLocaleList>>> = ({ signal }) => getLocaleList(signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof getLocaleList>>, TError, TData>
}

export type GetLocaleListQueryResult = NonNullable<Awaited<ReturnType<typeof getLocaleList>>>
export type GetLocaleListQueryError = ErrorType<unknown>

export function useGetLocaleList<TData = Awaited<ReturnType<typeof getLocaleList>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getLocaleList>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetLocaleListQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function localeFilter(signal?: AbortSignal) {
  return customInstance<AppResponseListLocaleRes>(
    { url: `/api-v2/work/translate/locale-filter`, method: 'GET', signal,
    },
  )
}

export function getLocaleFilterQueryKey() {
  return ['api-v2', 'work', 'translate', 'locale-filter'] as const
}

export function getLocaleFilterQueryOptions<TData = Awaited<ReturnType<typeof localeFilter>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof localeFilter>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getLocaleFilterQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof localeFilter>>> = ({ signal }) => localeFilter(signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof localeFilter>>, TError, TData>
}

export type LocaleFilterQueryResult = NonNullable<Awaited<ReturnType<typeof localeFilter>>>
export type LocaleFilterQueryError = ErrorType<unknown>

export function useLocaleFilter<TData = Awaited<ReturnType<typeof localeFilter>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof localeFilter>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getLocaleFilterQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function getEngineList(signal?: AbortSignal) {
  return customInstance<AppResponseListTranslateEngineEntity>(
    { url: `/api-v2/work/translate/engines`, method: 'GET', signal,
    },
  )
}

export function getGetEngineListQueryKey() {
  return ['api-v2', 'work', 'translate', 'engines'] as const
}

export function getGetEngineListQueryOptions<TData = Awaited<ReturnType<typeof getEngineList>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getEngineList>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getGetEngineListQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getEngineList>>> = ({ signal }) => getEngineList(signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof getEngineList>>, TError, TData>
}

export type GetEngineListQueryResult = NonNullable<Awaited<ReturnType<typeof getEngineList>>>
export type GetEngineListQueryError = ErrorType<unknown>

export function useGetEngineList<TData = Awaited<ReturnType<typeof getEngineList>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getEngineList>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetEngineListQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function comicTranslateLocale(params: MaybeRef<ComicTranslateLocaleParams>, signal?: AbortSignal) {
  params = unref(params)

  return customInstance<AppResponseListLocaleRes>(
    { url: `/api-v2/work/translate/comic-translate-locale`, method: 'GET', params: unref(params), signal,
    },
  )
}

export function getComicTranslateLocaleQueryKey(params: MaybeRef<ComicTranslateLocaleParams>) {
  return ['api-v2', 'work', 'translate', 'comic-translate-locale', ...(params ? [params] : [])] as const
}

export function getComicTranslateLocaleQueryOptions<TData = Awaited<ReturnType<typeof comicTranslateLocale>>, TError = ErrorType<unknown>>(params: MaybeRef<ComicTranslateLocaleParams>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof comicTranslateLocale>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getComicTranslateLocaleQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof comicTranslateLocale>>> = ({ signal }) => comicTranslateLocale(params, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof comicTranslateLocale>>, TError, TData>
}

export type ComicTranslateLocaleQueryResult = NonNullable<Awaited<ReturnType<typeof comicTranslateLocale>>>
export type ComicTranslateLocaleQueryError = ErrorType<unknown>

export function useComicTranslateLocale<TData = Awaited<ReturnType<typeof comicTranslateLocale>>, TError = ErrorType<unknown>>(params: MaybeRef<ComicTranslateLocaleParams>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof comicTranslateLocale>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getComicTranslateLocaleQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}
