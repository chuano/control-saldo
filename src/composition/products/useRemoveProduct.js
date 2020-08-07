import { useStore } from 'vuex'

export default function useRemoveProduct() {
  const store = useStore()
  function removeProduct(product) {
    if (!confirm(`¿Quieres eliminar el producto ${product.name}?`)) {
      return
    }
    store.commit('removeProduct', product)
  }

  return { removeProduct }
}
