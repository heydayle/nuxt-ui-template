<script setup lang="ts">
const tabs = [{
  icon: 'i-heroicons-information-circle',
  label: 'Getting Started',
  content: 'This is the content shown for Tab1',
  slot: 'started',
}, {
  icon: 'i-heroicons-arrow-down-tray',
  label: 'Installation',
  content: 'And, this is the content for Tab2',
  slot: 'installation',
}, {
  icon: 'i-heroicons-eye-dropper',
  label: 'Theming',
  content: 'Finally, this is the content for Tab3',
  slot: 'theming',
}]

const people = [{
  id: 1,
  name: 'Lindsay Walton',
  title: 'Front-end Developer',
  email: 'lindsay.walton@example.com',
  role: 'Member',
}, {
  id: 2,
  name: 'Courtney Henry',
  title: 'Designer',
  email: 'courtney.henry@example.com',
  role: 'Admin',
}, {
  id: 3,
  name: 'Tom Cook',
  title: 'Director of Product',
  email: 'tom.cook@example.com',
  role: 'Member',
}, {
  id: 4,
  name: 'Whitney Francis',
  title: 'Copywriter',
  email: 'whitney.francis@example.com',
  role: 'Admin',
}, {
  id: 5,
  name: 'Leonard Krasner',
  title: 'Senior Designer',
  email: 'leonard.krasner@example.com',
  role: 'Owner',
}, {
  id: 6,
  name: 'Floyd Miles',
  title: 'Principal Designer',
  email: 'floyd.miles@example.com',
  role: 'Member',
}]
</script>

<template>
  <div>
    <h2 id="tabs" class="mb-4 font-bold">
      # Tabs
    </h2>
    <div class="">
      <UTabs :items="tabs">
        <template #default="{ item, selected }">
          <div class="flex items-center gap-2 relative truncate">
            <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0" />

            <span class="truncate">{{ item.label }}</span>

            <span v-if="selected" class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400" />
          </div>
        </template>
        <template #started="{ item }">
          <div class="p-4">
            <b>{{ item.label }}</b>
            <UTable :rows="people" />
          </div>
        </template>
        <template #installation="{ item }">
          <div class="p-4">
            <b>{{ item.label }}</b>
            <UTable :rows="people" />
          </div>
        </template>
        <template #theming="{ item }">
          <div class="p-4">
            <b>{{ item.label }}</b>
            <UTable :rows="people" />
          </div>
        </template>
      </UTabs>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
