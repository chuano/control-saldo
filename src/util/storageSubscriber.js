export default function storageSubscriber(store) {
  store.subscribe((mutation, state) => {
    localStorage.setItem('activities', JSON.stringify(state.activities.activities))
  })
}
