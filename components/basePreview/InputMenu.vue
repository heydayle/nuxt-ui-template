<script setup lang="ts">
const items = ['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']
const people = []
const selected = ref(items[0])
const selectedPeople = ref(people[0])

const loading = ref(false)
async function search(q: string) {
  loading.value = true

  const users = await $fetch<any[]>('https://jsonplaceholder.typicode.com/users', { params: { q } })

  loading.value = false

  return users
}
</script>

<template>
  <div>
    <h2 id="dropdown" class="mb-4 font-bold">
      # Input menu
    </h2>
    <div class="grid grid-cols-3 gap-4">
      <UInputMenu v-model="selected" :options="items" />
      <UInputMenu v-model="selected" :options="items">
        <template #option="{ option }">
          <div>
            {{ option }} <span class="text-xs text-gray-400">@{{ option }}</span>
          </div>
        </template>
      </UInputMenu>
      <UInputMenu
        v-model="selected"
        :search="search"
        :loading="loading"
        placeholder="Search for a user..."
        option-attribute="name"
        trailing
        by="id"
      />
    </div>
    <hr class="my-4">
    <h2 id="dropdown" class="mb-4 font-bold">
      # Select menu
    </h2>
    <div class="grid grid-cols-3 gap-4 my-4">
      <div>
        <USelectMenu
          v-model="selectedPeople"
          :options="people"
          :loading="loading"
          :searchable="search"
          by="id"
          trailing
          searchable-placeholder="Search a person..."
          option-attribute="name"
          placeholder="Select a person"
        >
          <template #leading>
            <UIcon name="i-heroicons-user-circle" class="w-5 h-5" />
          </template>
        </USelectMenu>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
[aria-expanded="true"] span:last-child svg,
[aria-expanded="true"] > svg {
  transform: rotate(180deg);
  transition: 300ms ;
}
[aria-expanded="false"] span:last-child svg,
[aria-expanded="false"] > svg {
  transition: 300ms ;
}
</style>
