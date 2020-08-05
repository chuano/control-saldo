<template>
  <button @click="clear">Nuevo</button>
  <form action="#" @submit.prevent="save">
    <input type="text" v-model="product.name" placeholder="Producto" />
    <input type="number" step="0.5" v-model="product.price" placeholder="Precio" />
    <button>Save</button>
  </form>
</template>

<script>
import { useStore } from 'vuex'
import useProductHandler from '@/composition/useProductHandler'
import { computed } from 'vue'

export default {
  name: 'ProductForm',
  setup() {
    const store = useStore()
    const handler = useProductHandler()
    const product = computed(() => store.state.products.product)

    const clear = () => handler.clearSelection()
    const save = () => handler.save(product.value)

    return {
      save,
      clear,
      product,
    }
  },
}
</script>
