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
  AddRemoveUserMultiGroupReq,
  AdminUpdatePassReq,
  AppResponseAddRemoveUserMultiGroupRes,
  AppResponseAdminUpdatePassRes,
  AppResponseCreateGroupRes,
  AppResponseCreateIdentityRes,
  AppResponseDeleteGroupRes,
  AppResponseDeleteIdentitiesRes,
  AppResponseListGroupRes,
  AppResponseLogDtoRes,
  AppResponseUpdateGroupRes,
  AppResponseUserInfRes,
  AppResponseUserUpdatePassRes,
  CreateGroupReq,
  CreateIdentityReq,
  DeleteGroupParams,
  DeleteIdentitiesReq,
  GetUserInfoByAdminParams,
  LogDtoReq,
  UpdateGroupReq,
  UserUpdatePassReq,
} from '../../models'
import { customInstance } from '../../mutator/custom-instance'
import type { ErrorType } from '../../mutator/custom-instance'

type AwaitedInput<T> = PromiseLike<T> | T

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never

export function userUpdatePassword(userUpdatePassReq: MaybeRef<UserUpdatePassReq>) {
  userUpdatePassReq = unref(userUpdatePassReq)

  return customInstance<AppResponseUserUpdatePassRes>(
    { url: `/api-v1/auth/identities/update-password`, method: 'PUT', headers: { 'Content-Type': 'application/json' }, data: userUpdatePassReq },
  )
}

export function getUserUpdatePasswordMutationOptions<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof userUpdatePassword>>, TError, { data: UserUpdatePassReq }, TContext> }): UseMutationOptions<Awaited<ReturnType<typeof userUpdatePassword>>, TError, { data: UserUpdatePassReq }, TContext> {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof userUpdatePassword>>, { data: UserUpdatePassReq }> = (props) => {
    const { data } = props ?? {}

    return userUpdatePassword(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type UserUpdatePasswordMutationResult = NonNullable<Awaited<ReturnType<typeof userUpdatePassword>>>
export type UserUpdatePasswordMutationBody = UserUpdatePassReq
export type UserUpdatePasswordMutationError = ErrorType<unknown>

export function useUserUpdatePassword<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof userUpdatePassword>>, TError, { data: UserUpdatePassReq }, TContext> }): UseMutationReturnType<
        Awaited<ReturnType<typeof userUpdatePassword>>,
        TError,
        { data: UserUpdatePassReq },
        TContext
      > {
  const mutationOptions = getUserUpdatePasswordMutationOptions(options)

  return useMutation(mutationOptions)
}
export function adminUpdatePassword(adminUpdatePassReq: MaybeRef<AdminUpdatePassReq>) {
  adminUpdatePassReq = unref(adminUpdatePassReq)

  return customInstance<AppResponseAdminUpdatePassRes>(
    { url: `/api-v1/auth/admin/identities`, method: 'PUT', headers: { 'Content-Type': 'application/json' }, data: adminUpdatePassReq },
  )
}

export function getAdminUpdatePasswordMutationOptions<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminUpdatePassword>>, TError, { data: AdminUpdatePassReq }, TContext> }): UseMutationOptions<Awaited<ReturnType<typeof adminUpdatePassword>>, TError, { data: AdminUpdatePassReq }, TContext> {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof adminUpdatePassword>>, { data: AdminUpdatePassReq }> = (props) => {
    const { data } = props ?? {}

    return adminUpdatePassword(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type AdminUpdatePasswordMutationResult = NonNullable<Awaited<ReturnType<typeof adminUpdatePassword>>>
export type AdminUpdatePasswordMutationBody = AdminUpdatePassReq
export type AdminUpdatePasswordMutationError = ErrorType<unknown>

export function useAdminUpdatePassword<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminUpdatePassword>>, TError, { data: AdminUpdatePassReq }, TContext> }): UseMutationReturnType<
        Awaited<ReturnType<typeof adminUpdatePassword>>,
        TError,
        { data: AdminUpdatePassReq },
        TContext
      > {
  const mutationOptions = getAdminUpdatePasswordMutationOptions(options)

  return useMutation(mutationOptions)
}
export function createIdentities(createIdentityReq: MaybeRef<CreateIdentityReq>) {
  createIdentityReq = unref(createIdentityReq)

  return customInstance<AppResponseCreateIdentityRes>(
    { url: `/api-v1/auth/admin/identities`, method: 'POST', headers: { 'Content-Type': 'application/json' }, data: createIdentityReq },
  )
}

export function getCreateIdentitiesMutationOptions<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof createIdentities>>, TError, { data: CreateIdentityReq }, TContext> }): UseMutationOptions<Awaited<ReturnType<typeof createIdentities>>, TError, { data: CreateIdentityReq }, TContext> {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof createIdentities>>, { data: CreateIdentityReq }> = (props) => {
    const { data } = props ?? {}

    return createIdentities(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type CreateIdentitiesMutationResult = NonNullable<Awaited<ReturnType<typeof createIdentities>>>
export type CreateIdentitiesMutationBody = CreateIdentityReq
export type CreateIdentitiesMutationError = ErrorType<unknown>

export function useCreateIdentities<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof createIdentities>>, TError, { data: CreateIdentityReq }, TContext> }): UseMutationReturnType<
        Awaited<ReturnType<typeof createIdentities>>,
        TError,
        { data: CreateIdentityReq },
        TContext
      > {
  const mutationOptions = getCreateIdentitiesMutationOptions(options)

  return useMutation(mutationOptions)
}
export function deleteIdentities(deleteIdentitiesReq: MaybeRef<DeleteIdentitiesReq>) {
  deleteIdentitiesReq = unref(deleteIdentitiesReq)

  return customInstance<AppResponseDeleteIdentitiesRes>(
    { url: `/api-v1/auth/admin/identities`, method: 'DELETE', headers: { 'Content-Type': 'application/json' }, data: deleteIdentitiesReq },
  )
}

export function getDeleteIdentitiesMutationOptions<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteIdentities>>, TError, { data: DeleteIdentitiesReq }, TContext> }): UseMutationOptions<Awaited<ReturnType<typeof deleteIdentities>>, TError, { data: DeleteIdentitiesReq }, TContext> {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteIdentities>>, { data: DeleteIdentitiesReq }> = (props) => {
    const { data } = props ?? {}

    return deleteIdentities(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeleteIdentitiesMutationResult = NonNullable<Awaited<ReturnType<typeof deleteIdentities>>>
export type DeleteIdentitiesMutationBody = DeleteIdentitiesReq
export type DeleteIdentitiesMutationError = ErrorType<unknown>

export function useDeleteIdentities<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteIdentities>>, TError, { data: DeleteIdentitiesReq }, TContext> }): UseMutationReturnType<
        Awaited<ReturnType<typeof deleteIdentities>>,
        TError,
        { data: DeleteIdentitiesReq },
        TContext
      > {
  const mutationOptions = getDeleteIdentitiesMutationOptions(options)

  return useMutation(mutationOptions)
}
export function listGroup(signal?: AbortSignal) {
  return customInstance<AppResponseListGroupRes>(
    { url: `/api-v1/auth/admin/group`, method: 'GET', signal,
    },
  )
}

export function getListGroupQueryKey() {
  return ['api-v1', 'auth', 'admin', 'group'] as const
}

export function getListGroupQueryOptions<TData = Awaited<ReturnType<typeof listGroup>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listGroup>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getListGroupQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof listGroup>>> = ({ signal }) => listGroup(signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof listGroup>>, TError, TData>
}

export type ListGroupQueryResult = NonNullable<Awaited<ReturnType<typeof listGroup>>>
export type ListGroupQueryError = ErrorType<unknown>

export function useListGroup<TData = Awaited<ReturnType<typeof listGroup>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof listGroup>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getListGroupQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function updateGroup(updateGroupReq: MaybeRef<UpdateGroupReq>) {
  updateGroupReq = unref(updateGroupReq)

  return customInstance<AppResponseUpdateGroupRes>(
    { url: `/api-v1/auth/admin/group`, method: 'PUT', headers: { 'Content-Type': 'application/json' }, data: updateGroupReq },
  )
}

export function getUpdateGroupMutationOptions<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateGroup>>, TError, { data: UpdateGroupReq }, TContext> }): UseMutationOptions<Awaited<ReturnType<typeof updateGroup>>, TError, { data: UpdateGroupReq }, TContext> {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof updateGroup>>, { data: UpdateGroupReq }> = (props) => {
    const { data } = props ?? {}

    return updateGroup(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type UpdateGroupMutationResult = NonNullable<Awaited<ReturnType<typeof updateGroup>>>
export type UpdateGroupMutationBody = UpdateGroupReq
export type UpdateGroupMutationError = ErrorType<unknown>

export function useUpdateGroup<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateGroup>>, TError, { data: UpdateGroupReq }, TContext> }): UseMutationReturnType<
        Awaited<ReturnType<typeof updateGroup>>,
        TError,
        { data: UpdateGroupReq },
        TContext
      > {
  const mutationOptions = getUpdateGroupMutationOptions(options)

  return useMutation(mutationOptions)
}
export function createGroup(createGroupReq: MaybeRef<CreateGroupReq>) {
  createGroupReq = unref(createGroupReq)

  return customInstance<AppResponseCreateGroupRes>(
    { url: `/api-v1/auth/admin/group`, method: 'POST', headers: { 'Content-Type': 'application/json' }, data: createGroupReq },
  )
}

export function getCreateGroupMutationOptions<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof createGroup>>, TError, { data: CreateGroupReq }, TContext> }): UseMutationOptions<Awaited<ReturnType<typeof createGroup>>, TError, { data: CreateGroupReq }, TContext> {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof createGroup>>, { data: CreateGroupReq }> = (props) => {
    const { data } = props ?? {}

    return createGroup(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type CreateGroupMutationResult = NonNullable<Awaited<ReturnType<typeof createGroup>>>
export type CreateGroupMutationBody = CreateGroupReq
export type CreateGroupMutationError = ErrorType<unknown>

export function useCreateGroup<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof createGroup>>, TError, { data: CreateGroupReq }, TContext> }): UseMutationReturnType<
        Awaited<ReturnType<typeof createGroup>>,
        TError,
        { data: CreateGroupReq },
        TContext
      > {
  const mutationOptions = getCreateGroupMutationOptions(options)

  return useMutation(mutationOptions)
}
export function addGroupsToUser(addRemoveUserMultiGroupReq: MaybeRef<AddRemoveUserMultiGroupReq>) {
  addRemoveUserMultiGroupReq = unref(addRemoveUserMultiGroupReq)

  return customInstance<AppResponseAddRemoveUserMultiGroupRes>(
    { url: `/api-v1/auth/admin/add-groups-to-user`, method: 'PUT', headers: { 'Content-Type': 'application/json' }, data: addRemoveUserMultiGroupReq },
  )
}

export function getAddGroupsToUserMutationOptions<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof addGroupsToUser>>, TError, { data: AddRemoveUserMultiGroupReq }, TContext> }): UseMutationOptions<Awaited<ReturnType<typeof addGroupsToUser>>, TError, { data: AddRemoveUserMultiGroupReq }, TContext> {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof addGroupsToUser>>, { data: AddRemoveUserMultiGroupReq }> = (props) => {
    const { data } = props ?? {}

    return addGroupsToUser(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type AddGroupsToUserMutationResult = NonNullable<Awaited<ReturnType<typeof addGroupsToUser>>>
export type AddGroupsToUserMutationBody = AddRemoveUserMultiGroupReq
export type AddGroupsToUserMutationError = ErrorType<unknown>

export function useAddGroupsToUser<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof addGroupsToUser>>, TError, { data: AddRemoveUserMultiGroupReq }, TContext> }): UseMutationReturnType<
        Awaited<ReturnType<typeof addGroupsToUser>>,
        TError,
        { data: AddRemoveUserMultiGroupReq },
        TContext
      > {
  const mutationOptions = getAddGroupsToUserMutationOptions(options)

  return useMutation(mutationOptions)
}
export function saveLogoutLog(logDtoReq: MaybeRef<LogDtoReq>) {
  logDtoReq = unref(logDtoReq)

  return customInstance<AppResponseLogDtoRes>(
    { url: `/api-v1/auth/logout`, method: 'POST', headers: { 'Content-Type': 'application/json' }, data: logDtoReq },
  )
}

export function getSaveLogoutLogMutationOptions<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof saveLogoutLog>>, TError, { data: LogDtoReq }, TContext> }): UseMutationOptions<Awaited<ReturnType<typeof saveLogoutLog>>, TError, { data: LogDtoReq }, TContext> {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof saveLogoutLog>>, { data: LogDtoReq }> = (props) => {
    const { data } = props ?? {}

    return saveLogoutLog(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type SaveLogoutLogMutationResult = NonNullable<Awaited<ReturnType<typeof saveLogoutLog>>>
export type SaveLogoutLogMutationBody = LogDtoReq
export type SaveLogoutLogMutationError = ErrorType<unknown>

export function useSaveLogoutLog<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof saveLogoutLog>>, TError, { data: LogDtoReq }, TContext> }): UseMutationReturnType<
        Awaited<ReturnType<typeof saveLogoutLog>>,
        TError,
        { data: LogDtoReq },
        TContext
      > {
  const mutationOptions = getSaveLogoutLogMutationOptions(options)

  return useMutation(mutationOptions)
}
export function saveLoginFailedLog(logDtoReq: MaybeRef<LogDtoReq>) {
  logDtoReq = unref(logDtoReq)

  return customInstance<AppResponseLogDtoRes>(
    { url: `/api-v1/auth/login-failed`, method: 'POST', headers: { 'Content-Type': 'application/json' }, data: logDtoReq },
  )
}

export function getSaveLoginFailedLogMutationOptions<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof saveLoginFailedLog>>, TError, { data: LogDtoReq }, TContext> }): UseMutationOptions<Awaited<ReturnType<typeof saveLoginFailedLog>>, TError, { data: LogDtoReq }, TContext> {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof saveLoginFailedLog>>, { data: LogDtoReq }> = (props) => {
    const { data } = props ?? {}

    return saveLoginFailedLog(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type SaveLoginFailedLogMutationResult = NonNullable<Awaited<ReturnType<typeof saveLoginFailedLog>>>
export type SaveLoginFailedLogMutationBody = LogDtoReq
export type SaveLoginFailedLogMutationError = ErrorType<unknown>

export function useSaveLoginFailedLog<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof saveLoginFailedLog>>, TError, { data: LogDtoReq }, TContext> }): UseMutationReturnType<
        Awaited<ReturnType<typeof saveLoginFailedLog>>,
        TError,
        { data: LogDtoReq },
        TContext
      > {
  const mutationOptions = getSaveLoginFailedLogMutationOptions(options)

  return useMutation(mutationOptions)
}
export function getUserInfo(signal?: AbortSignal) {
  return customInstance<AppResponseUserInfRes>(
    { url: `/api-v1/auth/info`, method: 'GET', signal,
    },
  )
}

export function getGetUserInfoQueryKey() {
  return ['api-v1', 'auth', 'info'] as const
}

export function getGetUserInfoQueryOptions<TData = Awaited<ReturnType<typeof getUserInfo>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserInfo>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getGetUserInfoQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getUserInfo>>> = ({ signal }) => getUserInfo(signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof getUserInfo>>, TError, TData>
}

export type GetUserInfoQueryResult = NonNullable<Awaited<ReturnType<typeof getUserInfo>>>
export type GetUserInfoQueryError = ErrorType<unknown>

export function useGetUserInfo<TData = Awaited<ReturnType<typeof getUserInfo>>, TError = ErrorType<unknown>>(options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserInfo>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetUserInfoQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function getUserInfoByAdmin(params?: MaybeRef<GetUserInfoByAdminParams>, signal?: AbortSignal) {
  params = unref(params)

  return customInstance<AppResponseUserInfRes>(
    { url: `/api-v1/auth/admin/info`, method: 'GET', params: unref(params), signal,
    },
  )
}

export function getGetUserInfoByAdminQueryKey(params?: MaybeRef<GetUserInfoByAdminParams>) {
  return ['api-v1', 'auth', 'admin', 'info', ...(params ? [params] : [])] as const
}

export function getGetUserInfoByAdminQueryOptions<TData = Awaited<ReturnType<typeof getUserInfoByAdmin>>, TError = ErrorType<unknown>>(params?: MaybeRef<GetUserInfoByAdminParams>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserInfoByAdmin>>, TError, TData>> }) {
  const { query: queryOptions } = options ?? {}

  const queryKey = getGetUserInfoByAdminQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getUserInfoByAdmin>>> = ({ signal }) => getUserInfoByAdmin(params, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<Awaited<ReturnType<typeof getUserInfoByAdmin>>, TError, TData>
}

export type GetUserInfoByAdminQueryResult = NonNullable<Awaited<ReturnType<typeof getUserInfoByAdmin>>>
export type GetUserInfoByAdminQueryError = ErrorType<unknown>

export function useGetUserInfoByAdmin<TData = Awaited<ReturnType<typeof getUserInfoByAdmin>>, TError = ErrorType<unknown>>(params?: MaybeRef<GetUserInfoByAdminParams>, options?: { query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserInfoByAdmin>>, TError, TData>> }): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetUserInfoByAdminQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

export function removeGroupsFromUser(addRemoveUserMultiGroupReq: MaybeRef<AddRemoveUserMultiGroupReq>) {
  addRemoveUserMultiGroupReq = unref(addRemoveUserMultiGroupReq)

  return customInstance<AppResponseAddRemoveUserMultiGroupRes>(
    { url: `/api-v1/auth/admin/remove-groups-from-user`, method: 'DELETE', headers: { 'Content-Type': 'application/json' }, data: addRemoveUserMultiGroupReq },
  )
}

export function getRemoveGroupsFromUserMutationOptions<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof removeGroupsFromUser>>, TError, { data: AddRemoveUserMultiGroupReq }, TContext> }): UseMutationOptions<Awaited<ReturnType<typeof removeGroupsFromUser>>, TError, { data: AddRemoveUserMultiGroupReq }, TContext> {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof removeGroupsFromUser>>, { data: AddRemoveUserMultiGroupReq }> = (props) => {
    const { data } = props ?? {}

    return removeGroupsFromUser(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type RemoveGroupsFromUserMutationResult = NonNullable<Awaited<ReturnType<typeof removeGroupsFromUser>>>
export type RemoveGroupsFromUserMutationBody = AddRemoveUserMultiGroupReq
export type RemoveGroupsFromUserMutationError = ErrorType<unknown>

export function useRemoveGroupsFromUser<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof removeGroupsFromUser>>, TError, { data: AddRemoveUserMultiGroupReq }, TContext> }): UseMutationReturnType<
        Awaited<ReturnType<typeof removeGroupsFromUser>>,
        TError,
        { data: AddRemoveUserMultiGroupReq },
        TContext
      > {
  const mutationOptions = getRemoveGroupsFromUserMutationOptions(options)

  return useMutation(mutationOptions)
}
export function deleteGroup(params?: MaybeRef<DeleteGroupParams>) {
  params = unref(params)

  return customInstance<AppResponseDeleteGroupRes>(
    { url: `/api-v1/auth/admin/delete-group`, method: 'DELETE', params: unref(params),
    },
  )
}

export function getDeleteGroupMutationOptions<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteGroup>>, TError, { params?: DeleteGroupParams }, TContext> }): UseMutationOptions<Awaited<ReturnType<typeof deleteGroup>>, TError, { params?: DeleteGroupParams }, TContext> {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteGroup>>, { params?: DeleteGroupParams }> = (props) => {
    const { params } = props ?? {}

    return deleteGroup(params)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeleteGroupMutationResult = NonNullable<Awaited<ReturnType<typeof deleteGroup>>>

export type DeleteGroupMutationError = ErrorType<unknown>

export function useDeleteGroup<TError = ErrorType<unknown>, TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteGroup>>, TError, { params?: DeleteGroupParams }, TContext> }): UseMutationReturnType<
        Awaited<ReturnType<typeof deleteGroup>>,
        TError,
        { params?: DeleteGroupParams },
        TContext
      > {
  const mutationOptions = getDeleteGroupMutationOptions(options)

  return useMutation(mutationOptions)
}
