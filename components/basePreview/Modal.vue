<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <div>
    <div>
      <h2 id="modal" class="my-2 font-bold">
        # Modal
      </h2>
    </div>
    <UButton @click="isOpen = !isOpen">
      Open
    </UButton>
    <UModal v-model="isOpen" :ui="{ width: 'w-1/3' }">
      <p class="p-4">
        This is a modal sample
      </p>
      <div class="text-right p-4">
        <UButton class="mt-4" size="xs" variant="ghost" @click="isOpen = !isOpen">
          Close
        </UButton>
      </div>
    </UModal>
  </div>
</template>

<style scoped lang="scss">

</style>
