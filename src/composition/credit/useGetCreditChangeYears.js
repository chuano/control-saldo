import { computed } from 'vue'
import { useStore } from 'vuex'

export default function useGetCreditChangeYears() {
  const store = useStore()

  const creditChangeYears = computed(() => {
    const y = []
    store.state.credit.changes.forEach((change) => {
      const year = new Date(change.date).getFullYear()
      if (!y.some((y) => y === year)) {
        y.push(year)
      }
    })
    return y
  })

  return { creditChangeYears }
}
