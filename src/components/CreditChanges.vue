<template>
  <div v-for="change in changes" :key="change.id">
    {{ dateFormat(change.date) }} - {{ change.description }} - {{ change.amount }}€
    <button
      @click="removeChange(change)"
    >Eliminar</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import useCreditHandler from '@/composition/useCreditHandler'

export default {
  name: 'CreditChanges',
  setup() {
    const store = useStore()
    const changes = computed(() => store.state.credit.changes)
    const handler = useCreditHandler()

    const dateFormat = (dateString) => new Date(dateString).toLocaleString()
    const removeChange = (creditChange) => {
      if (!confirm(`¿Borrar el movimiento de saldo ${creditChange.description} con valor de ${creditChange.amount}`)) {
        return
      }
      handler.removeCreditChange(creditChange)
    }

    return {
      changes,
      dateFormat,
      removeChange,
    }
  },
}
</script>
