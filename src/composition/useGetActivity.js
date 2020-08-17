import { useStore } from 'vuex'
import { computed } from 'vue'

export default function useGetActivity(id) {
  const store = useStore()
  const activity = computed(() => {
    if (id) {
      return store.state.activities.activities.find((x) => x.id === parseInt(id))
    }
    return {
      id: 0,
      name: null,
      credit: 0,
      products: [],
      changes: [],
    }
  })

  return { activity }
}
