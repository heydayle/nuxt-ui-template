<script setup lang="ts">
import { sub } from 'date-fns'

const selected = ref({ start: sub(new Date(), { days: 14 }), end: new Date() })

</script>

<template>
  <h2 id="date range picker" class="mb-4 font-bold">
    # Date range picker
  </h2>
  <CommonDatePickerRange v-model:timeRange="selected" />
</template>
