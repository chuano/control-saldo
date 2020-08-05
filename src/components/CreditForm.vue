<template>
  <form action="#" @submit.prevent="addCredit">
    <input type="number" step="0.5" placeholder="Importe" v-model="credit" />
    <button>Agregar saldo</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useCreditHandler from '@/composition/useCreditHandler'

export default {
  name: 'CreditForm',
  setup() {
    const credit = ref(null)
    const handler = useCreditHandler()

    const addCredit = () => {
      handler.creditChange({ date: new Date(), amount: credit.value, description: 'Agregar saldo' })
      credit.value = null
    }

    return {
      credit,
      addCredit,
    }
  },
}
</script>
