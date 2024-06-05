<script setup lang="ts">
const columns = [
  {
    key: 'select',
    label: 'Select',
  },
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'status',
    label: 'Status',
  },
  {
    key: 'actions',
    label: 'Actions',
    class: 'text-right',
  },
]

const people = ref([
  {
    id: 1,
    name: 'Lindsay Walton',
    disabled: true,
    isSelect: false,
  },
  {
    id: 2,
    name: 'Courtney Henry',
    disabled: false,
    isSelect: false,
  },
  {
    id: 3,
    name: 'Courtney Henry 1',
    disabled: false,
    isSelect: false,
  },
  {
    id: 4,
    name: 'Courtney Henry 2',
    disabled: false,
    isSelect: false,
  },
  {
    id: 5,
    name: 'Courtney Henry 3',
    disabled: false,
    isSelect: false,
  },
  {
    id: 6,
    name: 'Courtney Henry 4',
    disabled: false,
    isSelect: false,
  },
  {
    id: 7,
    name: 'Courtney Henry 5',
    disabled: false,
    isSelect: false,
  },
])

const refCheckboxAll = ref(null)
const selectAll = ref<boolean>(false)
const selected = computed(() => people.value.filter(e => e.isSelect))
function selectRow(row: any) {
  if (!row.isSelect && selectAll.value)
    selectAll.value = false
}
function onSelectAll(value: boolean) {
  people.value.forEach((e) => {
    e.isSelect = value && !e.disabled
  })
}
function openDetail(id: any) {
  navigateTo(`?id=${id}`)
}
</script>

<template>
  <div>
    <div class="mb-4 font-bold">
      <h2># Custom table</h2>
    </div>
    <div class="my-4">
      Selected: {{ JSON.stringify(selected.map(e => e.name)) }}
    </div>
    <UTable :rows="people" :columns="columns">
      <template #name-data="{ row }">
        <span :class="[row.isSelect && 'text-primary-500 dark:text-primary-400']">{{ row.name }}</span>
      </template>
      <template #select-header>
        <UCheckbox ref="refCheckboxAll" v-model="selectAll" @change="onSelectAll" />
      </template>
      <template #select-data="{ row }">
        <UCheckbox v-model="row.isSelect" :disabled="row.disabled" @change="selectRow(row)" />
      </template>
      <template #status-data="{ row }">
        <UToggle v-model="row.disabled" />
      </template>
      <template #actions-header>
        Actions
      </template>
      <template #actions-data="{ row }">
        <div class="text-right">
          <UButton icon="i-heroicons-pencil-square" variant="ghost" @click="openDetail(row.id)" />
        </div>
      </template>
    </UTable>
  </div>
</template>
