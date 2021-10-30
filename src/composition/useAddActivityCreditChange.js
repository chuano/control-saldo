import { ref } from 'vue'
import { useStore } from 'vuex'

export default function useAddActivityCreditChange(activity) {
  const store = useStore()
  const productId = ref(null)
  const day = ref(new Date())

  function addChangeToStore(amount, description, date) {
    const id = activity.changes.length === 0 ? 1 : activity.changes[0].id + 1
    const floatAmount = parseFloat(amount)
    if (isNaN(floatAmount)) {
      alert('El importe debe ser numérico')
      return
    }

    const change = {
      id: id,
      date: date,
      amount: floatAmount,
      description: description,
    }
    activity.credit += floatAmount
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

    addChangeToStore(amount, description, day.value.getTime())
    productId.value = null
    day.value = new Date()
  }

  return { day, productId, addActivityCreditChange, addChangeToStore }
}
