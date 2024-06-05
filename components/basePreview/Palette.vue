<script setup lang="ts">
const red: any = ['bg-utility-error-50', 'bg-utility-error-100', 'bg-utility-error-200', 'bg-utility-error-300', 'bg-utility-error-400', 'bg-utility-error-500', 'bg-utility-error-600', 'bg-utility-error-700', 'bg-utility-error-800', 'bg-utility-error-900', 'bg-utility-error-950']
const brand: any = ['bg-utility-brand-50', 'bg-utility-brand-100', 'bg-utility-brand-200', 'bg-utility-brand-300', 'bg-utility-brand-400', 'bg-utility-brand-500', 'bg-utility-brand-600', 'bg-utility-brand-700', 'bg-utility-brand-800', 'bg-utility-brand-900', 'bg-utility-brand-950']
const gray: any = ['bg-utility-gray-50', 'bg-utility-gray-100', 'bg-utility-gray-200', 'bg-utility-gray-300', 'bg-utility-gray-400', 'bg-utility-gray-500', 'bg-utility-gray-600', 'bg-utility-gray-700', 'bg-utility-gray-800', 'bg-utility-gray-900', 'bg-utility-gray-950']
const green: any = ['bg-utility-success-50', 'bg-utility-success-100', 'bg-utility-success-200', 'bg-utility-success-300', 'bg-utility-success-400', 'bg-utility-success-500', 'bg-utility-success-600', 'bg-utility-success-700', 'bg-utility-success-800', 'bg-utility-success-900', 'bg-utility-success-950']
const yellow: any = ['bg-utility-warning-50', 'bg-utility-warning-100', 'bg-utility-warning-200', 'bg-utility-warning-300', 'bg-utility-warning-400', 'bg-utility-warning-500', 'bg-utility-warning-600', 'bg-utility-warning-700', 'bg-utility-warning-800', 'bg-utility-warning-900', 'bg-utility-warning-950']
const colors = [
  { name: 'Error', palette: red },
  { name: 'Brand', palette: brand },
  { name: 'Gray', palette: gray },
  { name: 'Success', palette: green },
  { name: 'Warning', palette: yellow },
]
</script>

<template>
  <div>
    <div class="mt-4">
      PALETTE
    </div>
    <div>
      <div>
        <div class="flex text-xs my-2 text-center">
          <div class="text-left w-20">
            Color
          </div>
          <div class="w-10 h-6">
            50
          </div>
          <div v-for="item in 9" :key="item" class="w-10 h-6">
            {{ item * 100 }}
          </div>
          <div class="w-10 h-6">
            950
          </div>
        </div>
        <div v-for="(color, index) in colors" :key="index" class="flex">
          <div class="w-20">
            {{ color.name }}
          </div>
          <div v-for="item in 11" :key="item" class="w-10 h-6" :class="color.palette[item - 1]" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
