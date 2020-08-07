import { computed } from 'vue'
import { useStore } from 'vuex'

export default function useGetProducts() {
  const store = useStore()
  const products = computed(() => store.state.products.products)

  return { products }
}
