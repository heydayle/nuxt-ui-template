<script setup lang="ts">
const buttonItems = [
  {
    label: 'Primary',
    defaultOpen: true,
    slot: 'primary',
    description: 'Primary button style',
  },
  {
    label: 'Danger',
    defaultOpen: true,
    slot: 'danger',
    description: 'Danger button style',
  },
  {
    label: 'Gray',
    defaultOpen: true,
    slot: 'gray',
    description: 'Gray button style',
  },
  {
    label: 'Disabled',
    defaultOpen: true,
    slot: 'disabled',
    description: 'Disabled button style',
  },
]
</script>

<template>
  <div>
    <h2 id="button" class="mb-4 font-bold">
      # Button
    </h2>
    <UAccordion
      default-open
      multiple
      color="white"
      :items="buttonItems"
    >
      <template #primary>
        <div class="flex space-x-4">
          <UButton class="block w-10 h-10" :ui="{ rounded: 'rounded-full' }" icon="i-heroicons-folder-20-solid" />
          <UButton class="" :ui="{ rounded: 'rounded-full' }" icon="i-heroicons-folder-20-solid">
            Icon
          </UButton>
          <UButton>
            Default
          </UButton>
          <UButton variant="outline">
            Outline
          </UButton>
          <UButton variant="soft">
            Soft
          </UButton>
          <UButton variant="ghost">
            Ghost
          </UButton>
          <UButton variant="link">
            Link
          </UButton>
        </div>
      </template>
      <template #danger>
        <div class="flex space-x-4">
          <UButton class="block w-10 h-10" :ui="{ rounded: 'rounded-full' }" color="red" icon="i-heroicons-folder-20-solid" />
          <UButton class="" :ui="{ rounded: 'rounded-full' }" color="red" icon="i-heroicons-folder-20-solid">
            Icon
          </UButton>
          <UButton color="red">
            Default
          </UButton>
          <UButton color="red" variant="outline">
            Outline
          </UButton>
          <UButton color="red" variant="soft">
            Soft
          </UButton>
          <UButton color="red" variant="ghost">
            Ghost
          </UButton>
          <UButton color="red" variant="link">
            Link
          </UButton>
        </div>
      </template>
      <template #gray>
        <div class="flex space-x-4">
          <UButton class="block w-10 h-10" :ui="{ rounded: 'rounded-full' }" color="gray" icon="i-heroicons-folder-20-solid" />
          <UButton class="" :ui="{ rounded: 'rounded-full' }" color="gray" icon="i-heroicons-folder-20-solid">
            Icon
          </UButton>
          <UButton color="gray">
            Default
          </UButton>
          <UButton color="gray" variant="outline">
            Outline
          </UButton>
          <UButton color="gray" variant="soft">
            Soft
          </UButton>
          <UButton color="gray" variant="ghost">
            Ghost
          </UButton>
          <UButton color="gray" variant="link">
            Link
          </UButton>
        </div>
      </template>
      <template #disabled>
        <div class="flex space-x-4">
          <UButton disabled class="block w-10 h-10" :ui="{ rounded: 'rounded-full' }" icon="i-heroicons-folder-20-solid" />
          <UButton disabled class="" :ui="{ rounded: 'rounded-full' }" icon="i-heroicons-folder-20-solid">
            Icon
          </UButton>
          <UButton disabled>
            Default
          </UButton>
          <UButton disabled variant="outline">
            Outline
          </UButton>
          <UButton disabled variant="soft">
            Soft
          </UButton>
          <UButton disabled variant="ghost">
            Ghost
          </UButton>
          <UButton disabled variant="link">
            Link
          </UButton>
        </div>
      </template>
    </UAccordion>
    <hr class="my-4">
    <h2 id="button" class="mb-4 font-bold">
      # Block button
    </h2>
    <div class="space-y-4">
      <UButton block>
        Button
      </UButton>
      <UButton block color="red">
        Button
      </UButton>
      <UButton block color="gray">
        Button
      </UButton>
      <UButton block disabled>
        Button
      </UButton>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
