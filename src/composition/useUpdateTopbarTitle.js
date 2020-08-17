import { useStore } from 'vuex'

export default function useUpdateTopbarTitle() {
  const store = useStore()
  function updateTopbarTitle(title) {
    store.commit('setTitle', title)
  }

  return { updateTopbarTitle }
}
