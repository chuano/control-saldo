/* eslint-disable prettier/prettier */
<template>
  <form action="#" @submit.prevent="charge">
    <select v-model="productId">
      <option :value="null">Selecciona tipo</option>
      <option v-for="product in products" :key="product.id" :value="product.id">
        {{ product.name }} - {{ product.price }}€
      </option>
    </select>
    <button class="block">Anotar</button>
  </form>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import useAddCreditChange from '../../composition/credit/useAddCreditChange'

export default {
  name: 'ChargeProduct',
  setup() {
    const { addCreditChange } = useAddCreditChange()
    const store = useStore()
    const products = computed(() => store.state.products.products)
    const productId = ref(null)

    function charge() {
      const product = products.value.find((p) => p.id === productId.value)
      if (!product) {
        alert('Selecciona un producto')
        return
      }
      addCreditChange(product.price * -1, product.name)
      productId.value = null
    }

    return { products, productId, charge }
  },
}
</script>

<style scoped>
select {
  width: 100%;
}
</style>
