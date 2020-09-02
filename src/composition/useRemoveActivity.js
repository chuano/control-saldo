import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import useGetActivity from './useGetActivity'

export default function useAddActivity(activityId) {
  const store = useStore()
  const router = useRouter()
  const { activity } = useGetActivity(activityId)
  console.log(activity)

  function removeActivity() {
    if (!confirm(`¿Eliminar la actividad "${activity.value.name}"?`)) {
      return
    }
    router.replace({ name: 'ActivityListView' }).then(() => store.commit('removeActivity', activity.value))
  }

  return { removeActivity }
}
