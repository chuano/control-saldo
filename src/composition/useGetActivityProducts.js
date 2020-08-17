import { computed } from 'vue'

export default function useGetProducts(activity) {
  const products = computed(() => activity.products)

  return { products }
}
