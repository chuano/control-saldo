<template>
  <form action="#" @submit.prevent="save">
    <input type="text" v-model="name" placeholder="Tipo" class="name" />
    <input type="number" step="0.5" v-model="price" placeholder="Precio" class="price" />
    <button class="block">
      <img src="../../assets/save-white-36dp.svg" alt="Save" />
    </button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useAddProduct from '../../composition/products/useAddProduct'

export default {
  name: 'ProductForm',
  setup() {
    const { addProduct } = useAddProduct()
    const name = ref(null)
    const price = ref(null)

    function save() {
      addProduct({ name: name.value, price: price.value })
      name.value = null
      price.value = null
    }

    return { save, name, price }
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
