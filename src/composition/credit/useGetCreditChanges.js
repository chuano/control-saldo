import { computed } from 'vue'
import { useStore } from 'vuex'

export default function useGetCreditChanges(year, limit) {
  const store = useStore()
  const changes = computed(() =>
    store.state.credit.changes.filter((c) => new Date(c.date).getFullYear() === year).slice(0, limit),
  )

  return { changes }
}
