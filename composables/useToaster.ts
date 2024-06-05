// Documents: packages/web-base/contents/alert.md
import type { SweetAlertOptions } from 'sweetalert2'

const SuccessIcon = new URL(`./../assets/icons/monotone/check.svg`, import.meta.url).href
const ErrorIcon = new URL(`./../assets/icons/monotone/error.svg`, import.meta.url).href
const WarningIcon = new URL(`./../assets/icons/monotone/warning.svg`, import.meta.url).href
const InfoIcon = new URL(`./../assets/icons/monotone/info.svg`, import.meta.url).href

type IToast = SweetAlertOptions & {
  title?: string
  text?: string
  confirmButtonText?: string
  customClass?: 'ec-toast success' | 'ec-toast error' | 'ec-toast warning' | 'ec-toast info' | 'ec-toast secondary' | string
  actionConfirm?: () => void
  actionCancel?: () => void
  imageUrl?: 'successIcon' | 'errorIcon' | 'warningIcon' | 'infoIcon' | string
}
interface IDefaultSweetAlert {
  fire: (options: IToast, attr1?: any, attr2?: any) => any
}
const icons = {
  successIcon: SuccessIcon,
  errorIcon: ErrorIcon,
  warningIcon: WarningIcon,
  infoIcon: InfoIcon,
}
export function useToaster() {
  const toast = inject<IDefaultSweetAlert>('Toast') as IDefaultSweetAlert
  const show = (options?: IToast) => {
    toast.fire({
      ...options,
      imageUrl: icons?.[options?.imageUrl] || options?.imageUrl,
      html: `<div>
              <div class="toast-title">${options?.title || 'Error'}</div>
              <div class="toast-message">${options?.text || 'Message'}</div>
            </div>`,
    })
  }
  const toastError = (options?: IToast) => {
    toast.fire({
      ...options,
      customClass: 'ec-toast error',
      buttonsStyling: 'toast-button',
      imageUrl: ErrorIcon,
      html: `<div>
              <div class="toast-title">${options?.title || 'Error'}</div>
              <div class="toast-message">${options?.text || 'Message'}</div>
            </div>`,
    })
  }
  const toastWarning = (options?: IToast) => {
    toast.fire({
      ...options,
      customClass: 'ec-toast warning',
      imageUrl: WarningIcon,
      html: `<div>
              <div class="toast-title">${options?.title || 'Warning'}</div>
              <div class="toast-message">${options?.text || 'Message'}</div>
            </div>`,
    })
  }
  const toastSuccess = (options?: IToast) => {
    toast.fire({
      ...options,
      customClass: 'ec-toast success',
      imageUrl: SuccessIcon,
      html: `<div>
              <div class="toast-title">${options?.title || 'Success'}</div>
              <div class="toast-message">${options?.text || 'Message'}</div>
            </div>`,
    })
  }
  const toastInfo = (options?: IToast) => {
    toast.fire({
      ...options,
      customClass: 'ec-toast info',
      imageUrl: InfoIcon,
      html: `<div>
              <div class="toast-title">${options?.title || 'Info'}</div>
              <div class="toast-message">${options?.text || 'Message'}</div>
            </div>`,
    })
  }
  const toastSecondary = (options?: IToast) => {
    toast.fire({
      ...options,
      customClass: 'ec-toast secondary',
      imageUrl: '',
      html: `<div>
              <div class="toast-title">${options?.title || 'Secondary'}</div>
              <div class="toast-message">${options?.text || 'Message'}</div>
            </div>`,
    })
  }
  return {
    toast,
    show,
    error: toastError,
    warning: toastWarning,
    success: toastSuccess,
    info: toastInfo,
    secondary: toastSecondary,
  }
}
