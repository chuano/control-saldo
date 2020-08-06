<template>
  <form action="#" @submit.prevent="addCredit">
    <input type="number" step="0.5" placeholder="Importe" v-model="credit" />
    <button>
      <img src="../assets/add-white-36dp.svg" alt="Add" />
    </button>
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

<style scoped>
button {
  vertical-align: middle;
  margin-top: -1px;
  width: calc(30% - 9px);
}
input {
  width: calc(70% - 9px);
}
</style>
