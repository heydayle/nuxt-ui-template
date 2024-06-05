<script setup lang="ts">

</script>

<template>
  <div>
    <h2 id="badge" class="mb-4 font-bold">
      # Badge
    </h2>
    <div class="mb-4">
      Limit size: <UKbd>'sm'</UKbd>, <UKbd>'md'</UKbd>, <UKbd>'lg'</UKbd>
    </div>
    <div class="grid grid-cols-3">
      <div>
        <div class="flex space-x-4">
          <UBadge>Primary</UBadge>
          <UBadge color="red">
            Danger
          </UBadge>
          <UBadge color="gray">
            Gray
          </UBadge>
          <UBadge color="green">
            Green
          </UBadge>
        </div>
        <div class="mt-4 flex space-x-4">
          <UBadge size="md">
            Primary
          </UBadge>
          <UBadge size="md" color="red">
            Danger
          </UBadge>
          <UBadge size="md" color="gray">
            Gray
          </UBadge>
          <UBadge size="md" color="green">
            Green
          </UBadge>
        </div>
      </div>
      <div>
        <div class="flex space-x-4">
          <UBadge variant="outline">
            Primary
          </UBadge>
          <UBadge variant="outline" color="red">
            Danger
          </UBadge>
          <UBadge variant="outline" color="gray">
            Gray
          </UBadge>
          <UBadge variant="outline" color="green">
            Green
          </UBadge>
        </div>
        <div class="mt-4 flex space-x-4">
          <UBadge variant="outline">
            Primary
          </UBadge>
          <UBadge variant="outline" color="red">
            Danger
          </UBadge>
          <UBadge variant="outline" color="gray">
            Gray
          </UBadge>
          <UBadge variant="outline" color="green">
            Green
          </UBadge>
        </div>
      </div>
      <div>
        <div class="flex space-x-4">
          <UBadge variant="subtle">
            Primary
          </UBadge>
          <UBadge variant="subtle" color="red">
            Danger
          </UBadge>
          <UBadge variant="subtle" color="gray">
            Gray
          </UBadge>
          <UBadge variant="subtle" color="green">
            Green
          </UBadge>
        </div>
        <div class="mt-4 flex space-x-4">
          <UBadge variant="soft">
            Primary
          </UBadge>
          <UBadge variant="soft" color="red">
            Danger
          </UBadge>
          <UBadge variant="soft" color="gray">
            Gray
          </UBadge>
          <UBadge variant="soft" color="green">
            Green
          </UBadge>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
