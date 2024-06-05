/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import {
  useQuery,
} from '@tanstack/vue-query'
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryReturnType,
} from '@tanstack/vue-query'
import {
  computed,
  unref,
} from 'vue'
import type {
  MaybeRef,
} from 'vue'
import type {
  AppResponseListSiteEntity,
  AppResponseOptionalSiteEntity,
} from '../../models'
import { customInstance } from '../../mutator/custom-instance'
import type { ErrorType } from '../../mutator/custom-instance'

type AwaitedInput<T> = PromiseLike<T> | T

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never

export function getAllSite(signal?: AbortSignal) {
  return customInstance<AppResponseListSiteEntity>(
    { url: `/api-v2/work/site`, method: 'GET', signal,
    },
  )
}

export function getGetAllSiteQueryKey() {
  return ['api-v2', 'work', 'site'] as const
}

export function getGetAllSiteQueryOptions<TData = Awaited<ReturnType<typeof getAllSite>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllSite>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getGetAllSiteQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getAllSite>>> = ({ signal }) => getAllSite(signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof getAllSite>>, TError, TData>
}

export type GetAllSiteQueryResult = NonNullable<Awaited<ReturnType<typeof getAllSite>>>
export type GetAllSiteQueryError = ErrorType<unknown>

export function useGetAllSite<TData = Awaited<ReturnType<typeof getAllSite>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllSite>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetAllSiteQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function getOneSite(id: MaybeRef<number>, signal?: AbortSignal) {
  id = unref(id)

  return customInstance<AppResponseOptionalSiteEntity>(
    { url: `/api-v2/work/site/${id}`, method: 'GET', signal,
    },
  )
}

export function getGetOneSiteQueryKey(id: MaybeRef<number>) {
  return ['api-v2', 'work', 'site', id] as const
}

export function getGetOneSiteQueryOptions<TData = Awaited<ReturnType<typeof getOneSite>>, TError = ErrorType<unknown>>(id: MaybeRef<number>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getOneSite>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getGetOneSiteQueryKey(id)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getOneSite>>> = ({ signal }) => getOneSite(id, signal)

  return { queryKey, queryFn, enabled: computed(() => !!(unref(id))), ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof getOneSite>>, TError, TData>
}

export type GetOneSiteQueryResult = NonNullable<Awaited<ReturnType<typeof getOneSite>>>
export type GetOneSiteQueryError = ErrorType<unknown>

export function useGetOneSite<TData = Awaited<ReturnType<typeof getOneSite>>, TError = ErrorType<unknown>>(id: MaybeRef<number>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getOneSite>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetOneSiteQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}
