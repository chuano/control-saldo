import { ref } from 'vue'
import { useStore } from 'vuex'

export default function useAddActivityCreditChange(activity) {
  const store = useStore()
  const productId = ref(null)

  function addChangeToStore(amount, description) {
    const id = activity.changes.length === 0 ? 1 : activity.changes[0].id + 1
    const change = {
      id: id,
      date: new Date(),
      amount: amount,
      description: description,
    }
    activity.credit += amount
    activity.changes.unshift(change)
    store.commit('updateActivity', activity)
  }

  function addActivityCreditChange() {
    if (!productId.value) {
      alert('Selecciona un producto')
      return
    }

    const product = activity.products.find((p) => p.id === productId.value)
    const amount = product.price * -1
    const description = product.name

    addChangeToStore(amount, description)
    productId.value = null
  }

  return { productId, addActivityCreditChange, addChangeToStore }
}
