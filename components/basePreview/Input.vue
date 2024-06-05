<script setup lang="ts">
const PHONE_CODES = [
  { code: '+1', name: 'United States', country_code: 'US' },
  { code: '+44', name: 'United Kingdom', country_code: 'GB' },
  { code: '+91', name: 'India', country_code: 'IN' },
  { code: '+86', name: 'China', country_code: 'CN' },
  { code: '+81', name: 'Japan', country_code: 'JP' },
  { code: '+84', name: 'Vietnam', country_code: 'VN' },
]
const CURRENCIES = [
  { code: 'USD', name: 'United States Dollar', icon: 'i-f7-money-dollar', type: '$' },
  { code: 'EUR', name: 'Euro', icon: 'i-material-symbols-light-euro-symbol', type: '€' },
  { code: 'VND', name: 'Vietnam Dong', icon: 'i-tabler-currency-dong', type: '₫' },
  { code: 'KRW', name: 'Korean Won', icon: 'i-clarity-won-line', type: '₩' },
]
const keyword = ref('')
const date = ref('')
const codePhone = ref({ code: '+84', name: 'Vietnam', country_code: 'VN' })
const currency = ref({ code: 'VND', name: 'Vietnam Dong', icon: 'i-tabler-currency-dong', type: '₫' })
const yourCurrency = ref('')

// region [Options for maska]
const options = computed(() => ({
  preProcess: (val: any) => {
    const regex = new RegExp(`[${currency.value.type},]`, 'g')
    return val.replace(regex, '')
  },
  postProcess: (val: any) => {
    if (!val)
      return ''

    const sub = 3 - (val.includes('.') ? val.length - val.indexOf('.') : 0)
    const value = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.value.code,
    }).format(val)
    const isCurrencyNotDecimalSeparator = ['VND', 'KRW']
    return !isCurrencyNotDecimalSeparator.includes(currency.value.code)
      // region [return USD | EURO]
      // $ format 0.99 or 1.99 --> input: 1000 NumberFormat return $1000.00, we need remove .00 at end value --> $1000
      // after we just get value not symbol $
      ? value.slice(0, sub ? -sub : undefined).slice(1, value.length)
      // endregion
      // region [return another currency]
      : value.slice(1, value.length)
      // endregion
  },
}))
const USDCurrency = {
  preProcess: (val: any) => val.replace(/[$,]/g, ''),
  postProcess: (val: any) => {
    if (!val)
      return ''

    const sub = 3 - (val.includes('.') ? val.length - val.indexOf('.') : 0)
    const value = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(val)

    return value.slice(0, sub ? -sub : undefined).slice(1, value.length)
  },
}
// endregion

const toggle1 = ref(false)
const toggle2 = ref(true)
const toggle3 = ref(false)

const optionsCheckbox = [
  {
    value: 'email',
    label: 'Email',
  },
  {
    value: 'sms',
    label: 'Phone (SMS)',
  },
  {
    value: 'push',
    label: 'Push notification',
    disabled: true,
  },
]
const radio = ref('')
const groupRadio = ref('')
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <!-- region Input String  -->
    <div>
      <h2 id="input" class="mb-4 font-bold">
        # Input
      </h2>
      <!-- region Sample  -->
      <div>
        <label>Sample</label>
        <UInput placeholder="Sample input" />
      </div>
      <!-- endregion Sample  -->
      <!-- region Searching  -->
      <div class="mt-4">
        <label>Search</label>
        <UInput
          v-model="keyword"
          icon="i-heroicons-magnifying-glass"
          placeholder="Enter your keyword"
          autocomplete="off"
        >
          <template #trailing>
            <UButton
              v-show="keyword !== ''"
              color="gray"
              variant="link"
              icon="i-heroicons-x-mark-20-solid"
              :padded="false"
              @click="keyword = ''"
            />
          </template>
        </UInput>
      </div>
      <!-- endregion Searching  -->
      <!-- region Date  -->
      <div class="mt-4">
        <label>Date</label>
        <UInput
          v-model="date"
          v-maska
          data-maska="#0/#0/####"
          data-maska-tokens="0:\d:optional"
          icon="i-heroicons-calendar-days-20-solid"
          placeholder="dd/MM/YYYY"
          autocomplete="off"
        >
          <template #trailing>
            <UButton
              v-show="keyword !== ''"
              color="gray"
              variant="link"
              icon="i-heroicons-x-mark-20-solid"
              :padded="false"
              @click="keyword = ''"
            />
          </template>
        </UInput>
      </div>
      <!-- endregion Searching  -->
      <!-- region USD currency  -->
      <div class="mt-4">
        <label>Currency</label>
        <UInput
          v-maska:[USDCurrency]
          data-maska="0.99"
          data-maska-tokens="0:\d:multiple|9:\d:optional"
          inputmode="numeric"
          icon="i-f7-money-dollar"
        >
          <template #trailing>
            <span class="text-gray-500 dark:text-gray-400 text-xs">USD</span>
          </template>
        </UInput>
      </div>
      <!-- endregion USD currency  -->
      <!-- region Dynamic currency  -->
      <div class="mt-4">
        <label>Dynamic currency</label>
        <UInput
          v-model="yourCurrency"
          v-maska:[options]
          data-maska="0.99"
          data-maska-tokens="0:\d:multiple|9:\d:optional"
          inputmode="numeric"
          :ui="{ leading: { padding: { sm: 'pe-16 ps-9' } }, wrapper: 'relative z-10' }"
        >
          <template #trailing>
            <div>
              <USelectMenu v-model="currency" class="!ring-0 select-currency" :options="CURRENCIES" option-attribute="country_code">
                <UButton color="white" class="ring-0 px-0 pl-5 py-0">
                  {{ currency.code }}
                  <UIcon name="i-heroicons-chevron-down-20-solid" class="w-5 h-5 transition-transform text-gray-400 dark:text-gray-500 group-aria-[expanded=true]:rotate-180" />
                </UButton>
                <template #option="{ option }">
                  <div class="px-1">
                    {{ option.code }}
                  </div>
                </template>
              </USelectMenu>
            </div>
          </template>
          <template #leading>
            <UIcon :name="currency.icon" class="w-5 h-5 transition-transform text-gray-400 dark:text-gray-500" />
          </template>
        </UInput>
      </div>
      <!-- endregion -->
      <!-- region Phone number  -->
      <div class="mt-4">
        <label>Phone number</label>
        <UInput v-maska :ui="{ leading: { padding: { sm: 'ps-[6.5rem]' } } }" data-maska="#### ### ###" placeholder="0000 000 000" data-maska-eager>
          <template #leading>
            <div>
              <USelectMenu v-model="codePhone" class="!ring-0" :options="PHONE_CODES" option-attribute="country_code">
                <UButton color="white" class="ring-0 px-0 py-0">
                  {{ codePhone.country_code }}
                  <UIcon name="i-heroicons-chevron-down-20-solid" class="w-5 h-5 mr-2 transition-transform text-gray-400 dark:text-gray-500" />
                  <span>{{ codePhone.code }}</span>
                </UButton>
                <template #option="{ option: phone }">
                  <span>
                    {{ phone.country_code }} <span class="text-gray-500">{{ phone.code }}</span>
                  </span>
                </template>
              </USelectMenu>
            </div>
          </template>
        </UInput>
      </div>
      <!-- endregion -->
      <!-- region Link  -->
      <div class="mt-4">
        <label>Link</label>
        <UInput placeholder="example.com.vn" :ui="{ leading: { padding: { sm: 'ps-[5rem]' } } }">
          <template #leading>
            <div class="text-gray-500 border-r border-r-1 border-r-gray-300 dark:border-r-gray-600 pr-2 py-1.5">
              https://
            </div>
          </template>
        </UInput>
      </div>
      <!-- endregion Link  -->
      <!-- region Credit card  -->
      <div class="mt-4">
        <label>Credit</label>
        <UInput v-maska data-maska="####-####-####-####" placeholder="0000-0000-0000-0000">
          <template #leading>
            <UIcon name="i-logos-mastercard" class="mt-1 w-5 h-5" />
          </template>
        </UInput>
      </div>
      <!-- endregion Credit card  -->
    </div>
    <!-- endregion Input String  -->
    <div>
      <!-- region Toggle  -->
      <h2 id="toggle" class="mb-4 font-bold">
        # Toggle
      </h2>
      <div class="flex space-x-4">
        <UToggle v-model="toggle1" />
        <UToggle v-model="toggle1" disabled />
        <UToggle v-model="toggle2" disabled />
        <UToggle v-model="toggle3" disabled />
      </div>
      <!-- endregion Toggle  -->
      <!-- region Checkbox  -->
      <h2 id="checkbox" class="my-4 font-bold">
        # Checkbox
      </h2>
      <div class="flex space-x-4">
        <UCheckbox label="Checkbox" />
        <UCheckbox label="Checkbox 1" />
        <UCheckbox label="Checkbox 2" disabled />
      </div>
      <!-- endregion Checkbox  -->
      <!-- region Radio  -->
      <h2 id="radio" class="my-4 font-bold">
        # Radio
      </h2>
      <div class="flex space-x-4">
        <URadio v-for="item in optionsCheckbox" :key="item.value" v-model="radio" :disabled="item.disabled" v-bind="item" />
      </div>
      <div class="mt-4">
        Group radio
        <URadioGroup v-model="groupRadio" class="mt-2" :options="optionsCheckbox" />
      </div>
      <!-- endregion Radio  -->
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
