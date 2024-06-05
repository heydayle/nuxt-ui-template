const styles: any = {
  colors: {
    brand: {
      solid: 'bg-utility-brand-500 text-white hover:bg-utility-brand-600 disabled:hover:bg-utility-brand-500',
      outline: 'bg-transparent hover:bg-utility-brand-50 disabled:hover:bg-transparent text-utility-brand-500 ring ring-1 ring-utility-brand-500',
      soft: 'bg-utility-brand-50 hover:bg-utility-brand-100 text-utility-brand-500 disabled:hover:bg-utility-brand-50',
      ghost: 'bg-transparent hover:bg-utility-brand-50 text-utility-brand-500 disabled:hover:bg-transparent',
    },
    red: {
      solid: 'bg-utility-error-500 hover:bg-utility-error-600 disabled:hover:bg-utility-error-500 text-white',
      outline: 'bg-transparent hover:bg-utility-error-50 disabled:hover:bg-transparent text-utility-error-500 ring ring-1 ring-red-500',
      soft: 'bg-utility-error-50 hover:bg-utility-error-100 text-utility-error-500 disabled:hover:bg-utility-error-50',
      ghost: 'bg-transparent hover:bg-utility-error-50 text-utility-error-500 disabled:hover:bg-transparent',
    },
    gray: {
      solid: 'bg-utility-gray-500 hover:bg-utility-gray-600 disabled:hover:bg-utility-gray-500 text-white ring-0',
      outline: 'bg-transparent hover:bg-utility-gray-100 disabled:hover:bg-transparent text-utility-gray-500 ring ring-1 ring-gray-500',
      soft: 'bg-utility-gray-50 hover:bg-utility-gray-100 text-utility-gray-500 disabled:hover:bg-utility-gray-50',
      ghost: 'bg-transparent hover:bg-utility-gray-50 !text-utility-gray-500 disabled:hover:bg-transparent',
    },
  },
  padding: {
    '2xs': 'px-2 py-0.5',
    'xs': 'px-3 py-1',
    'sm': 'px-3 py-2',
    'md': 'px-4 py-2.5',
    'lg': 'px-4 py-3',
    'xl': 'px-5 py-3.5',
  },
  size: {
    '2xs': 'text-xs',
    'xs': 'text-xs',
    'sm': 'text-sm',
    'md': 'text-sm',
    'lg': 'text-md',
    'xl': 'text-base',
  },
}
export default defineAppConfig({
  ui: {
    icons: {
      dynamic: true,
    },
    strategy: 'override',
    primary: 'brand',
    red: 'red',
    brandMin: '#EFF4FF',
    accordion: {
      item: {
        base: 'bg-transparent',
        padding: 'p-0',
      },
      default: {
        class: 'p-4 h-[52px] background-active text-text-sm text-text-secondary',
      },
    },
    button: {
      // default button styles
      default: {
        size: 'md',
        variant: 'solid',
        color: 'brand',
        loadingIcon: 'i-mingcute-loading-line',
      },
      // customize styles overwrite NuxtUI
      font: 'font-medium',
      rounded: 'rounded-md',
      color: {
        white: {
          ghost: 'bg-transparent hover:bg-transparent text-text-primary disabled:hover:bg-transparent',
        },
        brand: {
          solid: 'bg-utility-brand-500 text-white hover:bg-utility-brand-600 disabled:bg-utility-brand-200 disabled:hover:bg-utility-brand-200',
          outline: 'bg-transparent hover:bg-utility-brand-50 disabled:hover:bg-transparent text-utility-brand-500 ring ring-1 ring-utility-brand-500',
          soft: 'bg-utility-brand-50 hover:bg-utility-brand-100 text-utility-brand-500 disabled:hover:bg-utility-brand-50',
          ghost: 'bg-transparent hover:bg-utility-brand-50 text-utility-brand-500 disabled:hover:bg-transparent',
        },
        red: {
          solid: 'bg-utility-error-500 hover:bg-utility-error-600 disabled:bg-utility-error-200 disabled:hover:bg-utility-error-200 text-white',
          outline: 'bg-transparent hover:bg-utility-error-50 disabled:hover:bg-transparent text-utility-error-500 ring ring-1 ring-red-500',
          soft: 'bg-utility-error-50 hover:bg-utility-error-100 text-utility-error-500 disabled:hover:bg-utility-error-50',
          ghost: 'bg-transparent hover:bg-utility-error-50 text-utility-error-500 disabled:hover:bg-transparent',
        },
        neutral: {
          outline: 'font-normal bg-transparent hover:bg-utility-gray-100 disabled:hover:bg-transparent text-text-placeholder ring ring-1 ring-border-primary',
        },
        gray: {
          solid: 'bg-utility-gray-500 hover:bg-utility-gray-600 disabled:bg-utility-gray-200 disabled:text-secondary disabled:hover:bg-utility-gray-200 text-white ring-0',
          outline: 'bg-transparent hover:bg-utility-gray-100 disabled:hover:bg-transparent text-secondary ring ring-1 ring-border-primary',
          soft: 'bg-utility-gray-50 hover:bg-utility-gray-100 text-utility-gray-700 disabled:hover:bg-utility-gray-50',
          ghost: 'bg-transparent hover:bg-utility-gray-50 !text-utility-gray-500 disabled:hover:bg-transparent',
        },
        green: {
          solid: 'bg-utility-success-500 hover:bg-utility-success-600 disabled:hover:bg-utility-success-500 text-white ring-0',
          outline: 'bg-transparent hover:bg-utility-success-100 disabled:hover:bg-transparent text-utility-success-500 ring ring-1 ring-success-500',
          soft: 'bg-utility-success-50 hover:bg-utility-success-100 text-utility-success-500 disabled:hover:bg-utility-success-50',
          ghost: 'bg-transparent hover:bg-utility-success-50 !text-utility-success-500 disabled:hover:bg-transparent',
        },
        yellow: {
          solid: 'bg-utility-warning-500 hover:bg-utility-warning-600 disabled:hover:bg-utility-warning-500 text-white ring-0',
          outline: 'bg-transparent hover:bg-utility-warning-100 disabled:hover:bg-transparent text-utility-warning-500 ring ring-1 ring-warning-500',
          soft: 'bg-utility-warning-50 hover:bg-utility-warning-100 text-utility-warning-500 disabled:hover:bg-utility-warning-50',
          ghost: 'bg-transparent hover:bg-utility-warning-50 !text-utility-warning-500 disabled:hover:bg-transparent',
        },
      },
      padding: {
        '2xs': 'px-2 py-0.5',
        'xs': 'px-3 py-1',
        'sm': 'px-3 py-2',
        'md': 'px-4 py-2.5',
        'lg': 'px-4 py-3',
        'xl': 'px-5 py-3.5',
      },
      size: {
        '2xs': 'text-xs',
        'xs': 'text-xs',
        'sm': 'text-sm',
        'md': 'text-sm',
        'lg': 'text-md',
        'xl': 'text-base',
      },
      icon: {
        base: 'flex-shrink-0',
        loading: 'animate-spin',
        size: {
          '2xs': 'h-4 w-4',
          'xs': 'h-4 w-4',
          'sm': 'h-5 w-5',
          'md': 'h-5 w-5',
          'lg': 'h-5 w-5',
          'xl': 'h-6 w-6',
        },
      },
    },
    badge: {
      default: {
        size: 'sm',
        variant: 'solid',
        color: 'brand',
      },
      font: 'font-medium',
      rounded: 'rounded-full',
      size: {
        sm: 'text-sm px-2 py-1',
        md: 'text-md px-4 py-1',
        lg: 'text-md px-4 py-2',
      },
      color: {
        red: {
          solid: 'bg-utility-error-500 text-white ring-0',
          outline: 'bg-transparent text-utility-error-500 ring ring-1 ring-utility-error-500',
          soft: 'bg-utility-error-50 text-utility-error-700',
          subtle: 'bg-utility-error-50 text-utility-error-700 ring ring-1 ring-utility-error-200',
        },
        brand: {
          solid: 'bg-utility-brand-500 text-white ring-0',
          outline: 'bg-transparent text-utility-brand-500 ring ring-1 ring-utility-brand-500',
          soft: 'bg-utility-brand-50 text-utility-brand-700 ring-utility-brand-200',
        },
        gray: {
          solid: 'bg-utility-gray-500 text-white ring-0',
          outline: 'bg-transparent text-utility-gray-700 ring ring-1 ring-utility-gray-500',
          soft: 'bg-utility-gray-50 text-utility-gray-700',
          subtle: 'bg-utility-gray-50 text-utility-gray-700 ring ring-1 ring-utility-gray-200',
        },
        green: {
          solid: 'bg-utility-success-500 text-white ring-0',
          outline: 'bg-transparent text-utility-success-700 ring ring-1 ring-utility-success-500',
          soft: 'bg-utility-success-50 text-utility-success-700',
          subtle: 'bg-utility-success-50 text-utility-success-700 ring ring-1 ring-utility-success-200',
        },
        white: {
          outline: 'bg-utility-gray-200 text-text-secondary',
        },
      },
    },
    tooltip: {
      wrapper: 'relative block',
      base: '[@media(pointer:coarse)]:hidden h-auto px-4 py-4 text-sm font-normal truncate relative',
      background: 'bg-utility-gray-50',
      color: 'text-utility-gray-900',
      shadow: 'shadow-lg',
      ring: 'ring-0',
      rounded: 'rounded-lg',
      arrow: {
        background: 'before:bg-utility-gray-50 z-10',
        ring: 'before:ring-0',
      },
    },
    popover: {
      background: 'bg-background-primary',
      color: 'text-utility-gray-900',
      shadow: 'shadow-xl',
      ring: 'ring-0',
      rounded: 'rounded-xl',
      arrow: {
        background: 'before:bg-utility-gray-50 z-20',
        ring: 'before:ring-0',
      },
    },
    input: {
      placeholder: 'text-text-placeholder',
      color: {
        white: {
          outline: 'shadow-sm bg-background-primary text-utility-gray-900 ring-1 ring-inset ring-utility-gray-300 focus:ring-utility-brand-500',
        },
        gray: {
          outline: 'shadow-sm bg-background-primary text-utility-gray-900 ring-1 ring-inset ring-utility-gray-300 focus:ring-utility-brand-500',
        },
        red: {
          outline: 'shadow-sm bg-background-primary text-utility-gray-900 ring-1 ring-inset ring-utility-error-400 focus:ring-utility-error-500',
        },
      },
      variant: {
        outline: 'shadow-sm bg-background-primary ring-1 ring-inset ring-{color}-500 focus:ring-{color}-500 dark:focus:ring-{color}-400',
        none: 'bg-transparent focus:ring-0 focus:shadow-none',
      },
      padding: styles.padding,
      icon: {
        base: 'flex-shrink-0 text-gray-400 dark:text-gray-500',
        trailing: {
          wrapper: 'absolute inset-y-0 end-0 flex items-center duration-300 transform aria-[expanded=true]:rotate-180',
          pointer: '',
        },
        leading: {
          pointer: '',
        },
      },
      default: {
        loadingIcon: 'i-mingcute-loading-line',
      },
    },
    checkbox: {
      base: 'h-4 w-4 cursor-pointer dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-utility-gray-200 focus:ring-0 focus:ring-transparent focus:ring-offset-transparent',
      label: 'text-sm font-normal text-utility-gray-500',
    },
    radio: {
      base: 'h-4 w-4 dark:checked:bg-current dark:checked:border-transparent disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-utility-gray-200 focus:ring-0 focus:ring-transparent focus:ring-offset-transparent',
    },
    pagination: {
      wrapper: 'flex items-center space-x-2',
      base: 'ring-0 rounded-xl flex justify-center w-10 h-10',
      default: {
        inactiveButton: {
          color: 'gray',
          variant: 'ghost',
          inactiveClass: '!text-utility-gray-500',
        },
        activeButton: {
          color: 'brand',
          variant: 'soft',
          inactiveClass: 'bg-utility-brand-500/10',
        },
        lastButton: {
          color: 'gray',
          variant: 'ghost',
          inactiveClass: '!text-utility-gray-500 disabled:!text-utility-gray-400',
        },
        firstButton: {
          color: 'gray',
          variant: 'ghost',
          inactiveClass: '!text-utility-gray-500 disabled:!text-utility-gray-400',
        },
        nextButton: {
          color: 'gray',
          variant: 'ghost',
          inactiveClass: '!text-utility-gray-500 disabled:!text-utility-gray-400',
        },
        prevButton: {
          color: 'gray',
          variant: 'ghost',
          inactiveClass: '!text-utility-gray-500 disabled:!text-utility-gray-400',
        },
      },
    },
    tabs: {
      list: {
        width: 'w-fit',
        padding: 'px-4',
        marker: {
          wrapper: 'absolute left-[4px] duration-200 ease-out focus:outline-none',
          base: 'absolute w-full h-0.5 bottom-0',
          background: '!bg-utility-brand-500',
          rounded: 'rounded-none',
          shadow: 'shadow-sm',
        },
        background: '!bg-transparent',
        tab: {
          base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full !h-10 ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-utility-brand-500 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
          active: 'text-utility-brand-500',
        },
      },
    },
    inputMenu: {
      default: {
        loadingIcon: 'i-mingcute-loading-line',
      },
      background: 'bg-background-primary',
      ring: 'ring-1 ring-utility-gray-200',
      shadow: 'shadow-xl',
      option: {
        selectedIcon: {
          wrapper: 'absolute inset-y-0 end-0 flex items-center',
          padding: 'pe-2',
          base: 'h-5 w-5 text-utility-brand-500 flex-shrink-0',
        },
      },
    },
    select: {
      padding: {
        xs: 'px-2.5 py-1.5',
        sm: 'px-3 py-2',
        md: 'px-3 py-2',
        lg: 'px-3.5 py-2.5',
        xl: 'px-3.5 py-2.5',
      },
      default: {
        loadingIcon: 'i-mingcute-loading-line',
      },
      icon: {
        base: 'flex-shrink-0 text-gray-400 dark:text-gray-500 duration-300 transform group-aria-[expanded=true]:rotate-180',
      },
    },
    selectMenu: {
      trigger: 'group flex items-center w-full',
      width: 'w-full',
      background: 'bg-background-primary',
      ring: 'ring-1 ring-border-tertiary',
      option: {
        base: 'cursor-pointer select-none relative flex items-center justify-between gap-1',
        selectedIcon: {
          wrapper: 'absolute inset-y-0 end-0 flex items-center',
          padding: 'pe-2',
          base: 'h-5 w-5 text-utility-brand-500 flex-shrink-0',
        },
      },
    },
    modal: {
      container: 'flex min-h-full items-center sm:items-center justify-center text-center',
      background: 'bg-background-primary',
      rounded: 'rounded-xl',
      height: 'overflow-auto',
      overlay: {
        background: 'bg-utility-gray-200/75',
      },
    },
    chip: {
      base: 'absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white font-medium whitespace-nowrap',
      size: {
        xs: 'h-1.5 min-w-[0.375rem] text-[6px] p-px',
        sm: 'h-2 min-w-[0.5rem] text-[7px] p-0.5',
        md: 'h-2.5 min-w-[0.625rem] text-[8px] p-0.5',
        lg: 'h-3 min-w-[0.75rem] text-[10px] p-0.5',
        xl: 'h-3.5 min-w-[0.875rem] text-[10px] p-1',
      },
    },
    breadcrumb: {
      base: 'text-base font-medium',
      divider: {
        base: 'utility-gray-300',
      },
      active: 'font-semibold text-primary-500 font-semibold',
    },
    table: {
      divide: 'divide-y divide-utility-gray-100',
      thead: 'bg-utility-gray-100 hover:bg-utility-gray-100',
      th: {
        base: 'text-center',
        color: 'text-text-tertiary',
        font: 'font-medium',
        size: 'text-xs',
      },
      tr: {
        base: 'hover:bg-background-hover',
      },
      td: {
        base: 'text-center',
        color: 'text-text-primary',
      },
      default: {
        sortAscIcon: 'local-color:sort-asc',
        sortDescIcon: 'local-color:sort-desc',
        sortButton: {
          class: 'text-xs',
        },
      },
    },
    formGroup: {
      label: {
        base: 'text-utility-gray-700',
      },
    },
    toggle: {
      active: 'bg-utility-brand-500',
      inactive: 'bg-utility-gray-200',
    },
  },
})
