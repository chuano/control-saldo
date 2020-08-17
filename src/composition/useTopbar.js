import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default function useTopbar() {
  const store = useStore()
  const route = useRoute()
  const title = computed(() => store.state.title.title)
  const inActivity = computed(() => route.name === 'ActivityView' || route.name === 'ActivityHistoryView')
  const backUrl = computed(() => {
    if (route.name === 'ActivityView' || route.name === 'ActivityHistoryView') {
      return { name: 'ActivityListView' }
    }
    if (route.name === 'ActivityProductsView' || route.name === 'ActivitySettingsView') {
      return { name: 'ActivityView', params: { id: route.params.id } }
    }
    if (route.name === 'NewActivityView') {
      return { name: 'ActivityListView' }
    }
    return null
  })

  return { title, backUrl, inActivity }
}
