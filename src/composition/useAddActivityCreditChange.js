import { ref } from 'vue'
import { useStore } from 'vuex'

export default function useAddActivityCreditChange(activity) {
  const store = useStore()
  const productId = ref(null)
  const dayDiff = ref(0)

  function addChangeToStore(amount, description) {
    const id = activity.changes.length === 0 ? 1 : activity.changes[0].id + 1
    const change = {
      id: id,
      date: new Date().setDate(new Date().getDate() + dayDiff.value),
      amount: amount,
      description: description,
    }
    activity.credit += amount
    activity.changes.unshift(change)
    store.commit('updateActivity', activity)
  }

  function addActivityCreditChange() {
    if (activity.products.length === 0) {
      alert(
        `Primero debes crear los productos, puedes hacerlo tocando el icono del engranaje.
        \nEscribe el nombre del producto y el precio donde pone "Nuevo producto"`,
      )
      return
    }
    if (!productId.value) {
      alert('Selecciona un producto')
      return
    }

    const product = activity.products.find((p) => p.id === productId.value)
    const amount = product.price * -1
    const description = product.name

    addChangeToStore(amount, description)
    productId.value = null
    dayDiff.value = 0
  }

  return { dayDiff, productId, addActivityCreditChange, addChangeToStore }
}
