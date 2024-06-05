import { createThemes } from 'tw-colors'

const colorsConfig = {
  black: '#000000',
  white: '#FFFFFF',
  overlay: '#000000',
  brand: {
    50: '#EFF4FF',
    100: '#D1E0FF',
    200: '#B2CCFF',
    300: '#84ADFF',
    400: '#528BFF',
    500: '#2970FF',
    600: '#155EEF',
    700: '#004EEB',
    800: '#0040C1',
    900: '#00359E',
    950: '#002266',
    DEFAULT: '#2970FF',
  },
  error: {
    50: '#FEF3F2',
    100: '#FEE4E2',
    200: '#FECDCA',
    300: '#FDA29B',
    400: '#F97066',
    500: '#F04438',
    600: '#D92D20',
    700: '#B42318',
    800: '#B42318',
    900: '#7A271A',
    950: '#55160C',
    DEFAULT: '#F04438',
  },
  warning: {
    50: '#FFFAEB',
    100: '#FEF0C7',
    200: '#FEF08A',
    300: '#FEDF89',
    400: '#FEC84B',
    500: '#F79009',
    600: '#DC6803',
    700: '#B54708',
    800: '#93370D',
    900: '#7A2E0E',
    950: '#4E1D09',
    DEFAULT: '#F79009',
  },
  success: {
    50: '#ECFDF3',
    100: '#DCFAE6',
    200: '#ABEFC6',
    300: '#75E0A7',
    400: '#47CD89',
    500: '#17B26A',
    600: '#079455',
    700: '#067647',
    800: '#085D3A',
    900: '#074D31',
    950: '#053321',
    DEFAULT: '#17B26A',
  },
  gray: {
    50: '#F9FAFB',
    100: '#F2F4F7',
    200: '#EAECF0',
    300: '#D0D5DD',
    400: '#98A2B3',
    500: '#667085',
    600: '#475467',
    700: '#344054',
    800: '#182230',
    900: '#101828',
    950: '#0C111D',
    DEFAULT: '#667085',
  },
}

const themes = createThemes({
  light: {
    // Gray
    'utility-gray-50': colorsConfig.gray[50],
    'utility-gray-100': colorsConfig.gray[100],
    'utility-gray-200': colorsConfig.gray[200],
    'utility-gray-300': colorsConfig.gray[300],
    'utility-gray-400': colorsConfig.gray[400],
    'utility-gray-500': colorsConfig.gray[500],
    'utility-gray-600': colorsConfig.gray[600],
    'utility-gray-700': colorsConfig.gray[700],
    'utility-gray-800': colorsConfig.gray[800],
    'utility-gray-900': colorsConfig.gray[900],

    // Error
    'utility-error-50': colorsConfig.error[50],
    'utility-error-100': colorsConfig.error[100],
    'utility-error-200': colorsConfig.error[200],
    'utility-error-300': colorsConfig.error[300],
    'utility-error-400': colorsConfig.error[400],
    'utility-error-500': colorsConfig.error[500],
    'utility-error-600': colorsConfig.error[600],
    'utility-error-700': colorsConfig.error[700],

    // Warning
    'utility-warning-50': colorsConfig.warning[50],
    'utility-warning-100': colorsConfig.warning[100],
    'utility-warning-200': colorsConfig.warning[200],
    'utility-warning-300': colorsConfig.warning[300],
    'utility-warning-400': colorsConfig.warning[400],
    'utility-warning-500': colorsConfig.warning[500],
    'utility-warning-600': colorsConfig.warning[600],
    'utility-warning-700': colorsConfig.warning[700],

    // Brand
    'utility-brand-50': colorsConfig.brand[50],
    'utility-brand-100': colorsConfig.brand[100],
    'utility-brand-200': colorsConfig.brand[200],
    'utility-brand-300': colorsConfig.brand[300],
    'utility-brand-400': colorsConfig.brand[400],
    'utility-brand-500': colorsConfig.brand[500],
    'utility-brand-600': colorsConfig.brand[600],
    'utility-brand-700': colorsConfig.brand[700],
    'utility-brand-800': colorsConfig.brand[800],
    'utility-brand-900': colorsConfig.brand[900],

    // Success
    'utility-success-50': colorsConfig.success[50],
    'utility-success-100': colorsConfig.success[100],
    'utility-success-200': colorsConfig.success[200],
    'utility-success-300': colorsConfig.success[300],
    'utility-success-400': colorsConfig.success[400],
    'utility-success-500': colorsConfig.success[500],
    'utility-success-600': colorsConfig.success[600],
    'utility-success-700': colorsConfig.success[700],

    // Text
    'text-primary': colorsConfig.gray[900],
    'text-brand-primary': colorsConfig.white,
    'text-secondary': colorsConfig.gray[700],
    'text-brand-secondary': colorsConfig.brand[200],
    'text-tertiary': colorsConfig.gray[500],
    'text-white': colorsConfig.white,
    'text-disabled': colorsConfig.gray[400],
    'text-placeholder': colorsConfig.gray[500],
    'text-system-brand': colorsConfig.brand[500],
    'text-error': colorsConfig.error[500],
    'text-warning': colorsConfig.warning[500],
    'text-success': colorsConfig.success[500],

    // Border
    'border-primary': colorsConfig.gray[300],
    'border-secondary': colorsConfig.gray[200],
    'border-tertiary': colorsConfig.gray[100],
    'border-disabled': colorsConfig.gray[300],
    'border-system-brand': colorsConfig.brand[400],
    'border-error': colorsConfig.error[400],
    'border-success': colorsConfig.success[400],
    'border-warning': colorsConfig.warning[400],

    // Background
    'background-primary': colorsConfig.white,
    'background-secondary': colorsConfig.gray[100],
    'background-disabled': colorsConfig.gray[100],
    'background-active': colorsConfig.gray[100],
    'background-hover': colorsConfig.gray[50],
  },
  dark: {
    // Gray
    'utility-gray-50': colorsConfig.gray[900],
    'utility-gray-100': colorsConfig.gray[800],
    'utility-gray-200': colorsConfig.gray[700],
    'utility-gray-300': colorsConfig.gray[700],
    'utility-gray-400': colorsConfig.gray[600],
    'utility-gray-500': colorsConfig.gray[500],
    'utility-gray-600': colorsConfig.gray[400],
    'utility-gray-700': colorsConfig.gray[300],
    'utility-gray-800': colorsConfig.gray[200],
    'utility-gray-900': colorsConfig.gray[100],

    // Error
    'utility-error-50': colorsConfig.error[950],
    'utility-error-100': colorsConfig.error[900],
    'utility-error-200': colorsConfig.error[800],
    'utility-error-300': colorsConfig.error[700],
    'utility-error-400': colorsConfig.error[600],
    'utility-error-500': colorsConfig.error[500],
    'utility-error-600': colorsConfig.error[400],
    'utility-error-700': colorsConfig.error[300],

    // Warning
    'utility-warning-50': colorsConfig.warning[950],
    'utility-warning-100': colorsConfig.warning[900],
    'utility-warning-200': colorsConfig.warning[800],
    'utility-warning-300': colorsConfig.warning[700],
    'utility-warning-400': colorsConfig.warning[600],
    'utility-warning-500': colorsConfig.warning[500],
    'utility-warning-600': colorsConfig.warning[400],
    'utility-warning-700': colorsConfig.warning[300],

    // Brand
    'utility-brand-50': colorsConfig.brand[950],
    'utility-brand-100': colorsConfig.brand[900],
    'utility-brand-200': colorsConfig.brand[800],
    'utility-brand-300': colorsConfig.brand[700],
    'utility-brand-400': colorsConfig.brand[600],
    'utility-brand-500': colorsConfig.brand[500],
    'utility-brand-600': colorsConfig.brand[400],
    'utility-brand-700': colorsConfig.brand[300],
    'utility-brand-800': colorsConfig.brand[200],
    'utility-brand-900': colorsConfig.brand[100],

    // Success
    'utility-success-50': colorsConfig.success[950],
    'utility-success-100': colorsConfig.success[900],
    'utility-success-200': colorsConfig.success[800],
    'utility-success-300': colorsConfig.success[700],
    'utility-success-400': colorsConfig.success[600],
    'utility-success-500': colorsConfig.success[500],
    'utility-success-600': colorsConfig.success[400],
    'utility-success-700': colorsConfig.success[300],

    // Text
    'text-primary': colorsConfig.gray[50],
    'text-brand-primary': colorsConfig.gray[50],
    'text-secondary': colorsConfig.gray[300],
    'text-brand-secondary': colorsConfig.gray[300],
    'text-tertiary': colorsConfig.gray[400],
    'text-white': colorsConfig.white,
    'text-disabled': colorsConfig.gray[400],
    'text-placeholder': colorsConfig.gray[500],
    'text-system-brand': colorsConfig.brand[400],
    'text-error': colorsConfig.error[400],
    'text-warning': colorsConfig.warning[400],
    'text-success': colorsConfig.success[400],

    // Border
    'border-primary': colorsConfig.gray[700],
    'border-secondary': colorsConfig.gray[800],
    'border-tertiary': colorsConfig.gray[800],
    'border-disabled': colorsConfig.gray[700],
    'border-system-brand': colorsConfig.brand[500],
    'border-error': colorsConfig.error[500],
    'border-success': colorsConfig.success[500],
    'border-warning': colorsConfig.warning[500],

    // Background
    'background-primary': colorsConfig.gray[950],
    'background-secondary': colorsConfig.gray[800],
    'background-disabled': colorsConfig.gray[800],
    'background-active': colorsConfig.gray[800],
    'background-hover': colorsConfig.gray[900],
  },

})

module.exports = {
  darkMode: 'class',
  theme: {
    screens: {},
    extend: {
      colors: colorsConfig,
    },
  },
  variants: {},
  plugins: [
    themes,
  ],
  purge: {},
}