import { useStore } from 'vuex'
import { computed } from 'vue'

export default function useGetActivities() {
  const store = useStore()
  const activities = computed(() => store.state.activities.activities)

  return { activities }
}
