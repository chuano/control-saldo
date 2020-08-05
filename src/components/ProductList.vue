<template>
  <div v-for="product in products" :key="product.id">
    <div>
      <a href="#" @click.prevent="select(product)">{{ product.name }}</a>
      <button @click="remove(product)">Eliminar</button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import useProductHandler from '@/composition/useProductHandler'
import { computed } from 'vue'

export default {
  name: 'ProductList',
  setup() {
    const store = useStore()
    const handler = useProductHandler()
    const products = computed(() => store.state.products.products)

    const select = (product) => handler.select(product)
    const remove = (product) => {
      if (!confirm(`¿Quieres eliminar el producto ${product.name}?`)) {
        return
      }
      handler.remove(product)
    }

    return {
      products,
      select,
      remove,
    }
  },
}
</script>
