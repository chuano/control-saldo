import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import useGetActivity from './useGetActivity'
import useGetActivities from './useGetActivities'

export default function useAddActivity(activityId) {
  const store = useStore()
  const router = useRouter()
  const { activity } = useGetActivity(activityId)
  const { activities } = useGetActivities()

  function save() {
    if (activityId) {
      store.commit('updateActivity', activity.value)
    } else {
      activity.value.id = activities.value.length > 0 ? activities.value[activities.value.length - 1].id + 1 : 1
      store.commit('addActivity', activity.value)
    }
    router.push({ name: 'ActivityView', params: { id: activity.value.id } })
  }

  return { activity, save }
}
