export const useTestStore = defineStore('useTestStore', () => {
  const counter = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => counter.value * 2)

  function doubleCounterPlusOne() {
    counter.value++
    return counter.value * 2 + 1
  }

  function reset() {
    counter.value = 0
  }

  return { counter, name, doubleCount, doubleCounterPlusOne, reset }
})
