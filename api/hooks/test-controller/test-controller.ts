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
  unref,
} from 'vue'
import { customInstance } from '../../mutator/custom-instance'
import type { ErrorType } from '../../mutator/custom-instance'

type AwaitedInput<T> = PromiseLike<T> | T

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never

export function testSessionBindingCleaner(signal?: AbortSignal) {
  return customInstance<void>(
    { url: `/api-v2/test/test-kratos-session-binding-cleaner`, method: 'GET', signal,
    },
  )
}

export function getTestSessionBindingCleanerQueryKey() {
  return ['api-v2', 'test', 'test-kratos-session-binding-cleaner'] as const
}

export function getTestSessionBindingCleanerQueryOptions<TData = Awaited<ReturnType<typeof testSessionBindingCleaner>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof testSessionBindingCleaner>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getTestSessionBindingCleanerQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof testSessionBindingCleaner>>> = ({ signal }) => testSessionBindingCleaner(signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof testSessionBindingCleaner>>, TError, TData>
}

export type TestSessionBindingCleanerQueryResult = NonNullable<Awaited<ReturnType<typeof testSessionBindingCleaner>>>
export type TestSessionBindingCleanerQueryError = ErrorType<unknown>

export function useTestSessionBindingCleaner<TData = Awaited<ReturnType<typeof testSessionBindingCleaner>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof testSessionBindingCleaner>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getTestSessionBindingCleanerQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function testCleaner(signal?: AbortSignal) {
  return customInstance<void>(
    { url: `/api-v2/test/test-cleaner`, method: 'GET', signal,
    },
  )
}

export function getTestCleanerQueryKey() {
  return ['api-v2', 'test', 'test-cleaner'] as const
}

export function getTestCleanerQueryOptions<TData = Awaited<ReturnType<typeof testCleaner>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof testCleaner>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getTestCleanerQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof testCleaner>>> = ({ signal }) => testCleaner(signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof testCleaner>>, TError, TData>
}

export type TestCleanerQueryResult = NonNullable<Awaited<ReturnType<typeof testCleaner>>>
export type TestCleanerQueryError = ErrorType<unknown>

export function useTestCleaner<TData = Awaited<ReturnType<typeof testCleaner>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof testCleaner>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getTestCleanerQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function testChapterCleaner(signal?: AbortSignal) {
  return customInstance<void>(
    { url: `/api-v2/test/test-chapter-cleaner`, method: 'GET', signal,
    },
  )
}

export function getTestChapterCleanerQueryKey() {
  return ['api-v2', 'test', 'test-chapter-cleaner'] as const
}

export function getTestChapterCleanerQueryOptions<TData = Awaited<ReturnType<typeof testChapterCleaner>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof testChapterCleaner>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getTestChapterCleanerQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof testChapterCleaner>>> = ({ signal }) => testChapterCleaner(signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof testChapterCleaner>>, TError, TData>
}

export type TestChapterCleanerQueryResult = NonNullable<Awaited<ReturnType<typeof testChapterCleaner>>>
export type TestChapterCleanerQueryError = ErrorType<unknown>

export function useTestChapterCleaner<TData = Awaited<ReturnType<typeof testChapterCleaner>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof testChapterCleaner>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getTestChapterCleanerQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}