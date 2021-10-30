export default function storageSubscriber(store) {
  store.subscribe((mutation, state) => {
    console.log("SI")
    localStorage.setItem('activities', JSON.stringify(state.activities.activities))
  })
}
