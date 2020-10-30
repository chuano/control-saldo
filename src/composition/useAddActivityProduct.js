import { ref } from 'vue'
import { useStore } from 'vuex'

export default function useAddActivityProduct(activity) {
  const store = useStore()
  const name = ref(null)
  const price = ref(null)

  function validateProduct(product) {
    if (product.name === null || product.name === '') throw new Error('Product name is required')
    if (product.price <= 0) throw new Error('Price is required')
    if (!product.id && activity.products.some((x) => x.name === product.name)) throw new Error('Product exists')
  }

  function addProduct(product) {
    validateProduct(product)
    product.id = activity.products.length === 0 ? 1 : activity.products[activity.products.length - 1].id + 1
    activity.products.push(product)
    store.commit('updateActivity', activity)
  }

  function save() {
    const floatPrice = parseFloat(price.value)
    if (isNaN(floatPrice)) {
      alert('El precio debe ser numérico.')
      return
    }
    try {
      addProduct({ name: name.value, price: floatPrice })
      name.value = null
      price.value = null
    } catch (e) {
      alert(e.message)
    }
  }

  return { name, price, save }
}
