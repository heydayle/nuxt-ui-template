<script setup lang="ts">
import { z } from 'zod'

const schema = z.object({
  email: z.string({
    required_error: 'Email is required',
    invalid_type_error: 'Email must be a string',
  }).email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters'),
})

const state = reactive({
  email: undefined,
  password: undefined,
})
</script>

<template>
  <div>
    <h2 id="form" class="mb-4 font-bold">
      # Form
    </h2>
    <div class="">
      <UForm class="space-y-4" :schema="schema" :state="state">
        <UFormGroup label="Email" name="email" help="This is a hint">
          <UInput v-model="state.email" placeholder="example@gmail.com" icon="i-heroicons-envelope">
            <template #trailing>
              <UTooltip text="This is your email" :popper="{ placement: 'top', arrow: true }">
                <UIcon name="i-heroicons-question-mark-circle" />
              </UTooltip>
            </template>
          </UInput>
        </UFormGroup>
        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" placeholder="**********" icon="i-heroicons-lock-closed" type="password" />
        </UFormGroup>
        <UButton type="submit">
          Submit
        </UButton>
      </UForm>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
