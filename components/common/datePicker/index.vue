<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { format } from 'date-fns'

interface Props {
  date: Date | undefined
}
interface Emits {
  (e: 'update:date', value: Date | undefined): void
}
const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const date = useVModel(props, 'date', emits)
const dateFormatted = computed(() => {
  if (date.value)
    return format(date.value, 'd MMM, yyy')

  return 'Select date'
})
function onClear() {
  date.value = undefined
}
</script>

<template>
  <UPopover
    :popper="{ placement: 'bottom-start' }"
    :ui="{
      base: 'border boder-border-tertiary',
    }"
  >
    <UButton
      color="neutral"
      variant="outline"
      icon="heroicons:calendar"
    >
      <template #trailing>
        <UIcon v-if="date" name="heroicons:x-mark-solid" @click="onClear" />
        <UIcon v-else name="heroicons:chevron-down-solid" />
      </template>
      <span :class="[date ? 'text-text-primary' : 'text-text-placeholder']">{{ dateFormatted }}</span>
    </UButton>
    <template #panel="{ close }">
      <CommonDatePickerBase v-model="date" type="DatePicker" @close="close" />
    </template>
  </UPopover>
</template>
