<template>
  <form action="#" @submit.prevent="addActivityCreditChange">
    <select v-model="productId">
      <option :value="null">Selecciona producto</option>
      <option v-for="product in activity.products" :key="product.id" :value="product.id">
        {{ product.name }} - {{ product.price }}€
      </option>
    </select>
    <date-picker v-model="day">
      <template v-slot="{ inputValue, inputEvents }">
        <input :value="inputValue" v-on="inputEvents" style="width: calc(100% - 18px); text-align: center" />
      </template>
    </date-picker>
    <button class="block">Anotar</button>
  </form>
</template>

<script>
import { DatePicker } from 'v-calendar'
import useAddActivityCreditChange from '../composition/useAddActivityCreditChange'

export default {
  name: 'ActivityChargeProduct',
  components: {
    DatePicker,
  },
  props: {
    activity: {
      default: () => {},
    },
  },
  setup(props) {
    const daysList = [0, 1, 2, 3, 4, 5, 6, 7]
    const { day, productId, addActivityCreditChange } = useAddActivityCreditChange(props.activity)

    return {
      day,
      daysList,
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
