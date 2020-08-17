<template>
  <form action="#" @submit.prevent="addActivityCreditChange">
    <select v-model="productId">
      <option :value="null">Selecciona tipo</option>
      <option v-for="product in activity.products" :key="product.id" :value="product.id">
        {{ product.name }} - {{ product.price }}€
      </option>
    </select>
    <button class="block">Anotar</button>
  </form>
</template>

<script>
import useAddActivityCreditChange from '../composition/useAddActivityCreditChange'

export default {
  name: 'ActivityChargeProduct',
  props: {
    activity: {
      default: () => {},
    },
  },
  setup(props) {
    const { productId, addActivityCreditChange } = useAddActivityCreditChange(props.activity)

    return {
      productId,
      addActivityCreditChange,
    }
  },
}
</script>

<style scoped>
select {
  width: 100%;
}
</style>
