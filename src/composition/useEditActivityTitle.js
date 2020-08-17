import { ref } from 'vue'
import { useStore } from 'vuex'

export default function useEditActivityTitle(activity) {
  const store = useStore()
  const title = ref(activity.name)

  function saveTitle() {
    activity.name = title.value
    store.commit('updateActivity', activity)
  }

  return { title, saveTitle }
}
