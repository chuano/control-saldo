import { useStore } from 'vuex'

export default function useRemoveActivityProduct(activity) {
  const store = useStore()
  function removeProduct(product) {
    if (!confirm(`¿Quieres eliminar el producto ${product.name}?`)) {
      return
    }

    const products = activity.products.filter((x) => x.id !== product.id)
    activity.products = products
    store.commit('updateActivity', activity)
  }

  return { removeProduct }
}
