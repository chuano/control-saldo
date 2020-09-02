<template>
  <form action="#" @submit.prevent="addActivityCreditChange">
    <select v-model="productId">
      <option :value="null">Selecciona producto</option>
      <option v-for="product in activity.products" :key="product.id" :value="product.id">
        {{ product.name }} - {{ product.price }}€
      </option>
    </select>
    <select v-model="dayDiff">
      <option v-for="days in daysList" :key="days" :value="days * -1">
        <template v-if="days == 0">Hoy</template>
        <template v-if="days === 1">Ayer</template>
        <template v-if="days > 1">Hace {{ days }} días</template>
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
    const daysList = [0, 1, 2, 3, 4, 5, 6, 7]
    const { dayDiff, productId, addActivityCreditChange } = useAddActivityCreditChange(props.activity)

    return {
      daysList,
      dayDiff,
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
