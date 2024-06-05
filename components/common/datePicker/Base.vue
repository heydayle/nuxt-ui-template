<script setup lang="ts">
import { DatePicker as VCalendarDatePicker } from 'v-calendar'
import type { DatePickerDate, DatePickerRangeObject } from 'v-calendar/dist/types/src/use/datePicker'
import 'v-calendar/dist/style.css'

const props = defineProps({
  modelValue: {
    type: [Date, Object] as PropType<DatePickerDate | DatePickerRangeObject | null>,
    default: null,
  },
  type: {
    type: String as PropType<'DatePicker' | 'DateRange'>,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue', 'close'])

const date = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
    emit('close')
  },
})

const attrs = {
  'transparent': true,
  'borderless': true,
  'color': 'echomakr',
  'is-dark': { selector: 'html', darkClass: 'dark' },
  'first-day-of-week': 2,
  'dot': true,
}
const attributes = [
  {
    key: 'today',
    dot: true,
    dates: new Date(),
  },
]
</script>

<template>
  <VCalendarDatePicker
    v-if="type === 'DateRange'"
    v-model.range="date"
    :columns="2"
    :attributes="attributes"
    v-bind="{ ...attrs, ...$attrs }"
    :masks="{ weekdays: 'WW' }"
  />
  <VCalendarDatePicker
    v-else
    v-model="date"
    :attributes="attributes"
    v-bind="{ ...attrs, ...$attrs }"
    :masks="{ weekdays: 'WW' }"
  />
</template>

<style>
:root {
  --vc-text-lg: 16px;
  --vc-font-bold: 500;
  --vc-gray-200: theme('colors.utility-gray-100');
  --color-gray-200: theme('colors.utility-brand-500');
}
.vc-echomakr {
  --vc-accent-50: #f0f9ff;
  --vc-accent-100: #e0f2fe;
  --vc-accent-200: theme('colors.utility-gray-100');
  --vc-accent-300: #7dd3fc;
  --vc-accent-400: #38bdf8;
  --vc-accent-500: theme('colors.utility-brand-500');
  --vc-accent-600: theme('colors.utility-brand-500');
  --vc-accent-700: #0369a1;
  --vc-accent-800: #075985;
  --vc-accent-900: theme('colors.text-secondary');
}

.vc-highlight-content-outline {
  color: theme('colors.white');
  background-color: theme('colors.utility-brand-500');
}
.vc-day-content:hover {
  color: theme('colors.white');
  background-color: theme('colors.utility-brand-500');
}
.vc-nav-title {
  font-weight: 600;
}
.vc-pane {
  border-left: 1px solid theme('colors.border-tertiary');
}
</style>
