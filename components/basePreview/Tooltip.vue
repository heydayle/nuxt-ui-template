<script setup lang="ts">
</script>

<template>
  <div>
    <h2 id="tooltip" class="mb-4 font-bold">
      # Tooltip
    </h2>
    <div class="flex space-x-4">
      <UTooltip
        :popper="{ arrow: true, placement: 'bottom' }"
      >
        <UButton color="gray" label="Hover me" />
        <template #text>
          <div>
            <div><b>This is a tooltip</b></div>
            <div>This is description</div>
          </div>
        </template>
      </UTooltip>
      <UPopover
        :popper="{
          arrow: true,
        }"
      >
        <UIcon name="i-heroicons-question-mark-circle" class="w-6 h-6" />
        <template #panel>
          <div class="p-4">
            <h4>Title tooltip</h4>
            <div>
              This is simple tooltip
            </div>
          </div>
        </template>
      </UPopover>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
