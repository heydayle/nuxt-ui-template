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
  computed,
  unref,
} from 'vue'
import type {
  MaybeRef,
} from 'vue'
import type {
  AppResponseChangeChapterStatusRes,
  AppResponseChapterDetailRes,
  AppResponseCheckNameExistRes,
  AppResponseExportQueueTaskRes,
  AppResponseExportTrainingResult,
  AppResponseRedirectExportChapterInput,
  AppResponseRes,
  AppResponseSearchRes,
  AppResponseString,
  ChangeChapterStatusReq,
  CheckNameExistReq,
  CreateChapterReq,
  CreateDefaultTextBoxesReq,
  CreateUpdateTextBoxesRequest,
  ExportTrainingJSONParams,
  GetExportUrlParams,
  ImportExcelReq,
  Req,
  SearchChapterManagementParams,
} from '../../models'
import { customInstance } from '../../mutator/custom-instance'
import type { ErrorType } from '../../mutator/custom-instance'

type AwaitedInput<T> = PromiseLike<T> | T

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never

export function getChapter(id: MaybeRef<number>, signal?: AbortSignal) {
  id = unref(id)

  return customInstance<AppResponseChapterDetailRes>(
    { url: `/api-v2/work/chapters/${id}`, method: 'GET', signal,
    },
  )
}

export function getGetChapterQueryKey(id: MaybeRef<number>) {
  return ['api-v2', 'work', 'chapters', id] as const
}

export function getGetChapterQueryOptions<TData = Awaited<ReturnType<typeof getChapter>>, TError = ErrorType<unknown>>(id: MaybeRef<number>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChapter>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getGetChapterQueryKey(id)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getChapter>>> = ({ signal }) => getChapter(id, signal)

  return { queryKey, queryFn, enabled: computed(() => !!(unref(id))), ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof getChapter>>, TError, TData>
}

export type GetChapterQueryResult = NonNullable<Awaited<ReturnType<typeof getChapter>>>
export type GetChapterQueryError = ErrorType<unknown>

export function useGetChapter<TData = Awaited<ReturnType<typeof getChapter>>, TError = ErrorType<unknown>>(id: MaybeRef<number>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChapter>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetChapterQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function updateChapter(id: MaybeRef<number>, createUpdateTextBoxesRequest: MaybeRef<CreateUpdateTextBoxesRequest>) {
  id = unref(id)
  createUpdateTextBoxesRequest = unref(createUpdateTextBoxesRequest)

  return customInstance<AppResponseChapterDetailRes>(
    { url: `/api-v2/work/chapters/${id}`, method: 'PUT', headers: { 'Content-Type': 'application/json' }, data: createUpdateTextBoxesRequest },
  )
}

export function getUpdateChapterMutationOptions<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateChapter>>, TError, { id: number, data: CreateUpdateTextBoxesRequest }, TContext> }): UseMutationOptions<Awaited<ReturnType<typeof updateChapter>>, TError, { id: number, data: CreateUpdateTextBoxesRequest }, TContext> {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof updateChapter>>, { id: number, data: CreateUpdateTextBoxesRequest }> = (props) => {
    const { id, data } = props ?? {}

    return updateChapter(id, data)
  }

  return { mutationFn, ...mutationOptions }
}

export type UpdateChapterMutationResult = NonNullable<Awaited<ReturnType<typeof updateChapter>>>
export type UpdateChapterMutationBody = CreateUpdateTextBoxesRequest
export type UpdateChapterMutationError = ErrorType<unknown>

export function useUpdateChapter<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateChapter>>, TError, { id: number, data: CreateUpdateTextBoxesRequest }, TContext> }): UseMutationReturnType<
        Awaited<ReturnType<typeof updateChapter>>,
        TError,
        { id: number, data: CreateUpdateTextBoxesRequest },
        TContext
      > {
  const mutationOptions = getUpdateChapterMutationOptions(options)

  return useMutation(mutationOptions)
}
export function updateChapterStatus(id: MaybeRef<number>, changeChapterStatusReq: MaybeRef<ChangeChapterStatusReq>) {
  id = unref(id)
  changeChapterStatusReq = unref(changeChapterStatusReq)

  return customInstance<AppResponseChangeChapterStatusRes>(
    { url: `/api-v2/work/chapters/${id}/change-status`, method: 'PUT', headers: { 'Content-Type': 'application/json' }, data: changeChapterStatusReq },
  )
}

export function getUpdateChapterStatusMutationOptions<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateChapterStatus>>, TError, { id: number, data: ChangeChapterStatusReq }, TContext> }): UseMutationOptions<Awaited<ReturnType<typeof updateChapterStatus>>, TError, { id: number, data: ChangeChapterStatusReq }, TContext> {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof updateChapterStatus>>, { id: number, data: ChangeChapterStatusReq }> = (props) => {
    const { id, data } = props ?? {}

    return updateChapterStatus(id, data)
  }

  return { mutationFn, ...mutationOptions }
}

export type UpdateChapterStatusMutationResult = NonNullable<Awaited<ReturnType<typeof updateChapterStatus>>>
export type UpdateChapterStatusMutationBody = ChangeChapterStatusReq
export type UpdateChapterStatusMutationError = ErrorType<unknown>

export function useUpdateChapterStatus<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateChapterStatus>>, TError, { id: number, data: ChangeChapterStatusReq }, TContext> }): UseMutationReturnType<
        Awaited<ReturnType<typeof updateChapterStatus>>,
        TError,
        { id: number, data: ChangeChapterStatusReq },
        TContext
      > {
  const mutationOptions = getUpdateChapterStatusMutationOptions(options)

  return useMutation(mutationOptions)
}
export function createChapter(createChapterReq: MaybeRef<CreateChapterReq>) {
  createChapterReq = unref(createChapterReq)

  return customInstance<AppResponseChapterDetailRes>(
    { url: `/api-v2/work/chapters`, method: 'POST', headers: { 'Content-Type': 'application/json' }, data: createChapterReq },
  )
}

export function getCreateChapterMutationOptions<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof createChapter>>, TError, { data: CreateChapterReq }, TContext> }): UseMutationOptions<Awaited<ReturnType<typeof createChapter>>, TError, { data: CreateChapterReq }, TContext> {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof createChapter>>, { data: CreateChapterReq }> = (props) => {
    const { data } = props ?? {}

    return createChapter(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type CreateChapterMutationResult = NonNullable<Awaited<ReturnType<typeof createChapter>>>
export type CreateChapterMutationBody = CreateChapterReq
export type CreateChapterMutationError = ErrorType<unknown>

export function useCreateChapter<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof createChapter>>, TError, { data: CreateChapterReq }, TContext> }): UseMutationReturnType<
        Awaited<ReturnType<typeof createChapter>>,
        TError,
        { data: CreateChapterReq },
        TContext
      > {
  const mutationOptions = getCreateChapterMutationOptions(options)

  return useMutation(mutationOptions)
}
export function createTextBoxes(id: MaybeRef<number>, createDefaultTextBoxesReq: MaybeRef<CreateDefaultTextBoxesReq>) {
  id = unref(id)
  createDefaultTextBoxesReq = unref(createDefaultTextBoxesReq)

  return customInstance<AppResponseChapterDetailRes>(
    { url: `/api-v2/work/chapters/${id}/text-boxes`, method: 'POST', headers: { 'Content-Type': 'application/json' }, data: createDefaultTextBoxesReq },
  )
}

export function getCreateTextBoxesMutationOptions<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof createTextBoxes>>, TError, { id: number, data: CreateDefaultTextBoxesReq }, TContext> }): UseMutationOptions<Awaited<ReturnType<typeof createTextBoxes>>, TError, { id: number, data: CreateDefaultTextBoxesReq }, TContext> {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof createTextBoxes>>, { id: number, data: CreateDefaultTextBoxesReq }> = (props) => {
    const { id, data } = props ?? {}

    return createTextBoxes(id, data)
  }

  return { mutationFn, ...mutationOptions }
}

export type CreateTextBoxesMutationResult = NonNullable<Awaited<ReturnType<typeof createTextBoxes>>>
export type CreateTextBoxesMutationBody = CreateDefaultTextBoxesReq
export type CreateTextBoxesMutationError = ErrorType<unknown>

export function useCreateTextBoxes<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof createTextBoxes>>, TError, { id: number, data: CreateDefaultTextBoxesReq }, TContext> }): UseMutationReturnType<
        Awaited<ReturnType<typeof createTextBoxes>>,
        TError,
        { id: number, data: CreateDefaultTextBoxesReq },
        TContext
      > {
  const mutationOptions = getCreateTextBoxesMutationOptions(options)

  return useMutation(mutationOptions)
}
export function importExcel(id: MaybeRef<number>, importExcelReq: MaybeRef<ImportExcelReq>) {
  id = unref(id)
  importExcelReq = unref(importExcelReq)

  return customInstance<AppResponseChapterDetailRes>(
    { url: `/api-v2/work/chapters/${id}/import-excel`, method: 'POST', headers: { 'Content-Type': 'application/json' }, data: importExcelReq },
  )
}

export function getImportExcelMutationOptions<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof importExcel>>, TError, { id: number, data: ImportExcelReq }, TContext> }): UseMutationOptions<Awaited<ReturnType<typeof importExcel>>, TError, { id: number, data: ImportExcelReq }, TContext> {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof importExcel>>, { id: number, data: ImportExcelReq }> = (props) => {
    const { id, data } = props ?? {}

    return importExcel(id, data)
  }

  return { mutationFn, ...mutationOptions }
}

export type ImportExcelMutationResult = NonNullable<Awaited<ReturnType<typeof importExcel>>>
export type ImportExcelMutationBody = ImportExcelReq
export type ImportExcelMutationError = ErrorType<unknown>

export function useImportExcel<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof importExcel>>, TError, { id: number, data: ImportExcelReq }, TContext> }): UseMutationReturnType<
        Awaited<ReturnType<typeof importExcel>>,
        TError,
        { id: number, data: ImportExcelReq },
        TContext
      > {
  const mutationOptions = getImportExcelMutationOptions(options)

  return useMutation(mutationOptions)
}
export function checkNameExist(checkNameExistReq: MaybeRef<CheckNameExistReq>) {
  checkNameExistReq = unref(checkNameExistReq)

  return customInstance<AppResponseCheckNameExistRes>(
    { url: `/api-v2/work/chapters/check-name-exist`, method: 'POST', headers: { 'Content-Type': 'application/json' }, data: checkNameExistReq },
  )
}

export function getCheckNameExistMutationOptions<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof checkNameExist>>, TError, { data: CheckNameExistReq }, TContext> }): UseMutationOptions<Awaited<ReturnType<typeof checkNameExist>>, TError, { data: CheckNameExistReq }, TContext> {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof checkNameExist>>, { data: CheckNameExistReq }> = (props) => {
    const { data } = props ?? {}

    return checkNameExist(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type CheckNameExistMutationResult = NonNullable<Awaited<ReturnType<typeof checkNameExist>>>
export type CheckNameExistMutationBody = CheckNameExistReq
export type CheckNameExistMutationError = ErrorType<unknown>

export function useCheckNameExist<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof checkNameExist>>, TError, { data: CheckNameExistReq }, TContext> }): UseMutationReturnType<
        Awaited<ReturnType<typeof checkNameExist>>,
        TError,
        { data: CheckNameExistReq },
        TContext
      > {
  const mutationOptions = getCheckNameExistMutationOptions(options)

  return useMutation(mutationOptions)
}
export function validateChapter(id: MaybeRef<number>, signal?: AbortSignal) {
  id = unref(id)

  return customInstance<AppResponseString>(
    { url: `/api-v2/work/chapters/${id}/validate`, method: 'GET', signal,
    },
  )
}

export function getValidateChapterQueryKey(id: MaybeRef<number>) {
  return ['api-v2', 'work', 'chapters', id, 'validate'] as const
}

export function getValidateChapterQueryOptions<TData = Awaited<ReturnType<typeof validateChapter>>, TError = ErrorType<unknown>>(id: MaybeRef<number>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof validateChapter>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getValidateChapterQueryKey(id)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof validateChapter>>> = ({ signal }) => validateChapter(id, signal)

  return { queryKey, queryFn, enabled: computed(() => !!(unref(id))), ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof validateChapter>>, TError, TData>
}

export type ValidateChapterQueryResult = NonNullable<Awaited<ReturnType<typeof validateChapter>>>
export type ValidateChapterQueryError = ErrorType<unknown>

export function useValidateChapter<TData = Awaited<ReturnType<typeof validateChapter>>, TError = ErrorType<unknown>>(id: MaybeRef<number>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof validateChapter>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getValidateChapterQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function getChapterDetailPS(id: MaybeRef<number>, signal?: AbortSignal) {
  id = unref(id)

  return customInstance<AppResponseRedirectExportChapterInput>(
    { url: `/api-v2/work/chapters/${id}/ps`, method: 'GET', signal,
    },
  )
}

export function getGetChapterDetailPSQueryKey(id: MaybeRef<number>) {
  return ['api-v2', 'work', 'chapters', id, 'ps'] as const
}

export function getGetChapterDetailPSQueryOptions<TData = Awaited<ReturnType<typeof getChapterDetailPS>>, TError = ErrorType<unknown>>(id: MaybeRef<number>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChapterDetailPS>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getGetChapterDetailPSQueryKey(id)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getChapterDetailPS>>> = ({ signal }) => getChapterDetailPS(id, signal)

  return { queryKey, queryFn, enabled: computed(() => !!(unref(id))), ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof getChapterDetailPS>>, TError, TData>
}

export type GetChapterDetailPSQueryResult = NonNullable<Awaited<ReturnType<typeof getChapterDetailPS>>>
export type GetChapterDetailPSQueryError = ErrorType<unknown>

export function useGetChapterDetailPS<TData = Awaited<ReturnType<typeof getChapterDetailPS>>, TError = ErrorType<unknown>>(id: MaybeRef<number>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChapterDetailPS>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetChapterDetailPSQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function exportPsd(id: MaybeRef<number>, signal?: AbortSignal) {
  id = unref(id)

  return customInstance<AppResponseExportQueueTaskRes>(
    { url: `/api-v2/work/chapters/${id}/export-psd`, method: 'GET', signal,
    },
  )
}

export function getExportPsdQueryKey(id: MaybeRef<number>) {
  return ['api-v2', 'work', 'chapters', id, 'export-psd'] as const
}

export function getExportPsdQueryOptions<TData = Awaited<ReturnType<typeof exportPsd>>, TError = ErrorType<unknown>>(id: MaybeRef<number>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof exportPsd>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getExportPsdQueryKey(id)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof exportPsd>>> = ({ signal }) => exportPsd(id, signal)

  return { queryKey, queryFn, enabled: computed(() => !!(unref(id))), ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof exportPsd>>, TError, TData>
}

export type ExportPsdQueryResult = NonNullable<Awaited<ReturnType<typeof exportPsd>>>
export type ExportPsdQueryError = ErrorType<unknown>

export function useExportPsd<TData = Awaited<ReturnType<typeof exportPsd>>, TError = ErrorType<unknown>>(id: MaybeRef<number>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof exportPsd>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getExportPsdQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function exportImage(id: MaybeRef<number>, signal?: AbortSignal) {
  id = unref(id)

  return customInstance<AppResponseExportQueueTaskRes>(
    { url: `/api-v2/work/chapters/${id}/export-image`, method: 'GET', signal,
    },
  )
}

export function getExportImageQueryKey(id: MaybeRef<number>) {
  return ['api-v2', 'work', 'chapters', id, 'export-image'] as const
}

export function getExportImageQueryOptions<TData = Awaited<ReturnType<typeof exportImage>>, TError = ErrorType<unknown>>(id: MaybeRef<number>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof exportImage>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getExportImageQueryKey(id)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof exportImage>>> = ({ signal }) => exportImage(id, signal)

  return { queryKey, queryFn, enabled: computed(() => !!(unref(id))), ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof exportImage>>, TError, TData>
}

export type ExportImageQueryResult = NonNullable<Awaited<ReturnType<typeof exportImage>>>
export type ExportImageQueryError = ErrorType<unknown>

export function useExportImage<TData = Awaited<ReturnType<typeof exportImage>>, TError = ErrorType<unknown>>(id: MaybeRef<number>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof exportImage>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getExportImageQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function exportExcel(id: MaybeRef<number>, signal?: AbortSignal) {
  id = unref(id)

  return customInstance<AppResponseExportQueueTaskRes>(
    { url: `/api-v2/work/chapters/${id}/export-excel`, method: 'GET', signal,
    },
  )
}

export function getExportExcelQueryKey(id: MaybeRef<number>) {
  return ['api-v2', 'work', 'chapters', id, 'export-excel'] as const
}

export function getExportExcelQueryOptions<TData = Awaited<ReturnType<typeof exportExcel>>, TError = ErrorType<unknown>>(id: MaybeRef<number>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof exportExcel>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getExportExcelQueryKey(id)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof exportExcel>>> = ({ signal }) => exportExcel(id, signal)

  return { queryKey, queryFn, enabled: computed(() => !!(unref(id))), ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof exportExcel>>, TError, TData>
}

export type ExportExcelQueryResult = NonNullable<Awaited<ReturnType<typeof exportExcel>>>
export type ExportExcelQueryError = ErrorType<unknown>

export function useExportExcel<TData = Awaited<ReturnType<typeof exportExcel>>, TError = ErrorType<unknown>>(id: MaybeRef<number>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof exportExcel>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getExportExcelQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function searchPs(signal?: AbortSignal) {
  return customInstance<AppResponseRes>(
    { url: `/api-v2/work/chapters/search-ps`, method: 'GET', signal,
    },
  )
}

export function getSearchPsQueryKey() {
  return ['api-v2', 'work', 'chapters', 'search-ps'] as const
}

export function getSearchPsQueryOptions<TData = Awaited<ReturnType<typeof searchPs>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof searchPs>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getSearchPsQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof searchPs>>> = ({ signal }) => searchPs(signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof searchPs>>, TError, TData>
}

export type SearchPsQueryResult = NonNullable<Awaited<ReturnType<typeof searchPs>>>
export type SearchPsQueryError = ErrorType<unknown>

export function useSearchPs<TData = Awaited<ReturnType<typeof searchPs>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof searchPs>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getSearchPsQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function searchChapterManagement(params: MaybeRef<SearchChapterManagementParams>, signal?: AbortSignal) {
  params = unref(params)

  return customInstance<AppResponseSearchRes>(
    { url: `/api-v2/work/chapters/management`, method: 'GET', params: unref(params), signal,
    },
  )
}

export function getSearchChapterManagementQueryKey(params: MaybeRef<SearchChapterManagementParams>) {
  return ['api-v2', 'work', 'chapters', 'management', ...(params ? [params] : [])] as const
}

export function getSearchChapterManagementQueryOptions<TData = Awaited<ReturnType<typeof searchChapterManagement>>, TError = ErrorType<unknown>>(params: MaybeRef<SearchChapterManagementParams>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof searchChapterManagement>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getSearchChapterManagementQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof searchChapterManagement>>> = ({ signal }) => searchChapterManagement(params, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof searchChapterManagement>>, TError, TData>
}

export type SearchChapterManagementQueryResult = NonNullable<Awaited<ReturnType<typeof searchChapterManagement>>>
export type SearchChapterManagementQueryError = ErrorType<unknown>

export function useSearchChapterManagement<TData = Awaited<ReturnType<typeof searchChapterManagement>>, TError = ErrorType<unknown>>(params: MaybeRef<SearchChapterManagementParams>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof searchChapterManagement>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getSearchChapterManagementQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function exportTrainingJSON(params: MaybeRef<ExportTrainingJSONParams>, signal?: AbortSignal) {
  params = unref(params)

  return customInstance<AppResponseExportTrainingResult>(
    { url: `/api-v2/work/chapters/get-training-chapters`, method: 'GET', params: unref(params), signal,
    },
  )
}

export function getExportTrainingJSONQueryKey(params: MaybeRef<ExportTrainingJSONParams>) {
  return ['api-v2', 'work', 'chapters', 'get-training-chapters', ...(params ? [params] : [])] as const
}

export function getExportTrainingJSONQueryOptions<TData = Awaited<ReturnType<typeof exportTrainingJSON>>, TError = ErrorType<unknown>>(params: MaybeRef<ExportTrainingJSONParams>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof exportTrainingJSON>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getExportTrainingJSONQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof exportTrainingJSON>>> = ({ signal }) => exportTrainingJSON(params, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof exportTrainingJSON>>, TError, TData>
}

export type ExportTrainingJSONQueryResult = NonNullable<Awaited<ReturnType<typeof exportTrainingJSON>>>
export type ExportTrainingJSONQueryError = ErrorType<unknown>

export function useExportTrainingJSON<TData = Awaited<ReturnType<typeof exportTrainingJSON>>, TError = ErrorType<unknown>>(params: MaybeRef<ExportTrainingJSONParams>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof exportTrainingJSON>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getExportTrainingJSONQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function getExportUrl(params: MaybeRef<GetExportUrlParams>, signal?: AbortSignal) {
  params = unref(params)

  return customInstance<AppResponseExportQueueTaskRes>(
    { url: `/api-v2/work/chapters/export-url`, method: 'GET', params: unref(params), signal,
    },
  )
}

export function getGetExportUrlQueryKey(params: MaybeRef<GetExportUrlParams>) {
  return ['api-v2', 'work', 'chapters', 'export-url', ...(params ? [params] : [])] as const
}

export function getGetExportUrlQueryOptions<TData = Awaited<ReturnType<typeof getExportUrl>>, TError = ErrorType<unknown>>(params: MaybeRef<GetExportUrlParams>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getExportUrl>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getGetExportUrlQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getExportUrl>>> = ({ signal }) => getExportUrl(params, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof getExportUrl>>, TError, TData>
}

export type GetExportUrlQueryResult = NonNullable<Awaited<ReturnType<typeof getExportUrl>>>
export type GetExportUrlQueryError = ErrorType<unknown>

export function useGetExportUrl<TData = Awaited<ReturnType<typeof getExportUrl>>, TError = ErrorType<unknown>>(params: MaybeRef<GetExportUrlParams>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getExportUrl>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetExportUrlQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function deleteChapter(req: MaybeRef<Req>) {
  req = unref(req)

  return customInstance<AppResponseRes>(
    { url: `/api-v2/work/chapters/`, method: 'DELETE', headers: { 'Content-Type': 'application/json' }, data: req },
  )
}

export function getDeleteChapterMutationOptions<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteChapter>>, TError, { data: Req }, TContext> }): UseMutationOptions<Awaited<ReturnType<typeof deleteChapter>>, TError, { data: Req }, TContext> {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteChapter>>, { data: Req }> = (props) => {
    const { data } = props ?? {}

    return deleteChapter(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeleteChapterMutationResult = NonNullable<Awaited<ReturnType<typeof deleteChapter>>>
export type DeleteChapterMutationBody = Req
export type DeleteChapterMutationError = ErrorType<unknown>

export function useDeleteChapter<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteChapter>>, TError, { data: Req }, TContext> }): UseMutationReturnType<
        Awaited<ReturnType<typeof deleteChapter>>,
        TError,
        { data: Req },
        TContext
      > {
  const mutationOptions = getDeleteChapterMutationOptions(options)

  return useMutation(mutationOptions)
}