<template>
  <form action="#" @submit.prevent="save">
    <input type="text" v-model="product.name" placeholder="Producto" class="name" />
    <input type="number" step="0.5" v-model="product.price" placeholder="Precio" class="price" />
    <button class="block">
      <img src="../assets/save-white-36dp.svg" alt="Save" />
    </button>
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

<style scoped>
input.name {
  width: calc(100% - 96px);
  margin-right: 10px;
}
input.price {
  width: 50px;
}
</style>
