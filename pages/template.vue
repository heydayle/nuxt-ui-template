<script setup lang="ts">
definePageMeta({ layout: 'blank' })
useSeoMeta({
  title: 'Template',
})
const colorMode = useColorMode()
const alert = useAlert()
const toast = useToaster()
function changeTheme() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
const menus = [
  {
    name: 'Button',
    id: 'button',
  },
  {
    name: 'Alert',
    id: 'alert',
  },
  {
    name: 'Badge',
    id: 'badge',
  },
  {
    name: 'Tooltip',
    id: 'tooltip',
  },
  {
    name: 'Dropdown',
    id: 'dropdown',
  },
  {
    name: 'Input',
    id: 'input',
  },
  {
    name: 'Form',
    id: 'form',
  },
  {
    name: 'Toggle',
    id: 'toggle',
  },
  {
    name: 'Pagination',
    id: 'pagination',
  },
  {
    name: 'Tabs',
    id: 'tabs',
  },
  {
    name: 'Input menu',
    id: 'input-menu',
  },
  {
    name: 'Table',
    id: 'table',
  },
  {
    name: 'Date Range Picker',
    id: 'date range picker',
  },
  {
    name: 'Modal',
    id: 'modal',
  },
]
</script>

<template>
  <div>
    <header class="px-4 fixed top-0">
      <UButton
        class="inline-block text-sm px-4 py-2 leading-none border rounded border-white hover:border-transparent mt-4 lg:mt-0"
        @click="changeTheme"
      >
        <UIcon v-show="$colorMode.value === 'dark'" name="heroicons:moon-16-solid" />
        <UIcon v-show="$colorMode.value === 'light'" name="heroicons:sun-16-solid" />
      </UButton>
      <div class="py-4 w-32 flex flex-col space-y-4">
        <NuxtLink v-for="item in menus" :key="item.id" :to="`#${item.id}`" class="hover:underline">
          # {{ item.name }}
        </NuxtLink>
      </div>
    </header>
    <div class="base grid grid-cols-[100px, 1fr]">
      <div />
      <UContainer class="p-4">
        <div class="py-4">
          <b class="text-xl mr-4 pb-4">TEMPLATE</b>
          <div class="flex font-bold">
            All style default in base component using color name is
            <span class="mx-1 font-bold text-brand-500">Brand</span>
          </div>
          <hr class="my-2">
          <BasePreviewPalette />
          <hr class="my-2">
          <div>
            <div>
              <h2 id="alert" class="my-2 font-bold">
                # Alert
              </h2>
            </div>
            <div class="flex space-x-4">
              <UButton color="green" @click="alert.success()">
                Success
              </UButton>
              <UButton color="red" @click="alert.error()">
                Error
              </UButton>
              <UButton color="yellow" @click="alert.warning()">
                Warning
              </UButton>
            </div>
          </div>
          <hr class="my-2">
          <div>
            <div>
              <h2 id="alert" class="my-2 font-bold">
                # Toast
              </h2>
            </div>
            <div class="flex space-x-4">
              <UButton color="green" @click="toast.success()">
                Success
              </UButton>
              <UButton color="red" @click="toast.error()">
                Error
              </UButton>
              <UButton color="yellow" @click="toast.warning()">
                Warning
              </UButton>
              <UButton @click="toast.info()">
                Info
              </UButton>
              <UButton
                color="gray" @click="toast.secondary({
                  title: 'Notification',
                  text: 'This is a message in notification, This is a message in notification, This is a message in notification, This is a message in notification, This is a message in notification, This is a message in notification, ',
                })"
              >
                Secondary
              </UButton>
              <UButton
                color="green"
                variant="soft"
                @click="toast.show({
                  customClass: 'ec-toast success',
                  title: 'Custom',
                  text: 'Custom notification',
                  imageUrl: 'successIcon',
                })"
              >
                Custom
              </UButton>
            </div>
          </div>
        </div>
        <hr class="my-2">
        <div class="h-10 w-20 bg-utility-brand-50" />
        <hr class="my-2">
        <div class="flex flex-col space-y-4">
          <BasePreviewButton />
          <hr>
          <BasePreviewBadge />
          <hr>
          <BasePreviewTooltip />
          <hr>
          <BasePreviewDropdown />
          <hr>
          <BasePreviewInput />
          <hr>
          <BasePreviewForm />
          <hr>
          <BasePreviewPagination />
          <hr>
          <BasePreviewTabs />
          <hr>
          <BasePreviewInputMenu />
          <hr>
          <BasePreviewTable />
          <hr>
          <BasePreviewTableCustom />
          <hr>
          <BasePreviewDateRangePicker />
          <hr>
          <BasePreviewModal />
        </div>
      </UContainer>
    </div>
  </div>
</template>

<style scoped lang="scss">
.base {
  scroll-behavior: smooth;
}
</style>
