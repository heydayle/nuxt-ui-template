<script setup lang="ts">
const page = ref(1)
const pageSize = ref(10)
const items = ref(Array(1000))

const _page = ref(1)
const _pageSize = ref(10)
const _items = ref(Array(60))
</script>

<template>
  <div>
    <h2 id="pagination" class="mb-4 font-bold">
      # Pagination
    </h2>
    <div class="">
      <UPagination v-model="page" :page-count="pageSize" :total="items.length" show-last show-first />
    </div>
    <div class="mt-4">
      <UPagination v-model="_page" :page-count="_pageSize" :total="_items.length" show-last show-first />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
