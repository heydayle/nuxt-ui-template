import type { AxiosRequestConfig } from 'axios'
import Axios from 'axios'

// Define a new type that extends Promise and includes a cancel method
interface CancelablePromise<T> extends Promise<T> {
  cancel: () => void
}
interface CustomError {
  ERR_CODE: string
  REASON: string
  RESULT: string
}

const BASE_URL = 'http://backend.127.0.0.1.nip.io:8080'
export const AXIOS_INSTANCE = Axios.create({ baseURL: BASE_URL })

export function customInstance<T>(config: AxiosRequestConfig): Promise<T> {
  const source = Axios.CancelToken.source()
  const promise = AXIOS_INSTANCE({
    ...config,
    cancelToken: source.token,
    withCredentials: true,
    headers: {
      'x-original-source': 'AT_YC',
    },
  })
    .then(({ data }) => data)
    .catch((error) => {
      // Check authentication & authorization error
      throw error.response.data
    }) as CancelablePromise<T>

  promise.cancel = () => {
    source.cancel('Query was cancelled by Vue Query')
  }

  return promise
}

export default customInstance
export type ErrorType<Error> = Error & CustomError
