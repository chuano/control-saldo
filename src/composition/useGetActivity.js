import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default function useGetActivity(id) {
  const router = useRouter()
  const store = useStore()
  const activity = computed(() => {
    if (id) {
      const activity = store.state.activities.activities.find((x) => x.id === parseInt(id))
      if (activity) return activity
      router.replace({ name: 'ActivityListView' })
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
