<script lang="ts" setup>
import { useVModel } from '@vueuse/core'
import { type Duration, format, isSameDay, sub } from 'date-fns'

export interface TimeRange {
  start?: Date
  end?: Date
}
interface Props {
  timeRange: TimeRange
}
interface Emits {
  (e: 'update:timeRange', value: TimeRange): void
}
const props = defineProps<Props>()
const emits = defineEmits<Emits>()
const selected = useVModel(props, 'timeRange', emits)

const ranges = [
  { label: 'Last 7 days', duration: { days: 7 } },
  { label: 'Last 14 days', duration: { days: 14 } },
  { label: 'Last 30 days', duration: { days: 30 } },
  { label: 'Last 3 months', duration: { months: 3 } },
  { label: 'Last 6 months', duration: { months: 6 } },
  { label: 'Last year', duration: { years: 1 } },
]

function isRangeSelected(duration: Duration) {
  if (selected.value?.start && selected.value?.end)
    return isSameDay(selected.value.start, sub(new Date(), duration)) && isSameDay(selected.value.end, new Date())

  return false
}
function selectRange(duration: Duration) {
  selected.value = { start: sub(new Date(), duration), end: new Date() }
}

const dateFormatted = computed(() => {
  if (selected.value?.start && selected.value?.end)
    return `${format(selected.value.start, 'd MMM, yyy')} - ${format(selected.value.end, 'd MMM, yyy')}`

  return 'Select time'
})

function onClear() {
  selected.value = { start: undefined, end: undefined }
}
watch(selected, (value) => {
  console.log(value)
})
</script>

<template>
  <UPopover
    :popper="{ placement: 'bottom-start' }"
    :ui="{
      base: 'border border-border-tertiary',
    }"
  >
    <UButton color="neutral" variant="outline" icon="heroicons:calendar">
      <template #trailing>
        <UIcon v-if="selected?.start && selected?.end" name="heroicons:x-mark-solid" @click="onClear" />
        <UIcon v-else name="heroicons:chevron-down-solid" />
      </template>
      <span :class="[selected?.start ? 'text-text-primary' : 'text-text-placeholder']">{{ dateFormatted }}</span>
    </UButton>

    <template #panel="{ close }">
      <div class="flex items-center sm:divide-x divide-gray-200 dark:divide-gray-800">
        <div class="flex flex-col py-4">
          <UButton
            v-for="(range, index) in ranges"
            :key="index"
            :label="range.label"
            color="gray"
            variant="ghost"
            class="rounded-none px-6"
            :class="[isRangeSelected(range.duration) ? 'bg-utility-gray-100' : 'hover:bg-utility-gray-50']"
            truncate
            @click="selectRange(range.duration)"
          />
        </div>
        <CommonDatePickerBase v-model="selected" type="DateRange" @close="close" />
      </div>
    </template>
  </UPopover>
</template>
