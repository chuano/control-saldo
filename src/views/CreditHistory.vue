<template>
  <tabsbar />
  <div class="container">
    <credit-viewer class="credit-viewer" />
    <h2>Añadir saldo</h2>
    <credit-form class="new-form" />
    <h2>Historial de movimientos</h2>
    <select v-model="year">
      <option v-for="currentYear in years" :key="currentYear" :value="currentYear">{{ currentYear }}</option>
    </select>
    <credit-changes :year="year" />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import Tabsbar from '@/components/Tabsbar'
import CreditForm from '@/components/CreditForm'
import CreditViewer from '@/components/CreditViewer'
import CreditChanges from '@/components/CreditChanges'
import { useStore } from 'vuex'

export default {
  name: 'CreditHistory',
  components: {
    CreditViewer,
    CreditForm,
    CreditChanges,
    Tabsbar,
  },
  setup() {
    const store = useStore()
    const year = ref(new Date().getFullYear())
    const years = computed(() => {
      const y = []
      store.state.credit.changes.forEach((change) => {
        if (!y.some((y) => y === new Date(change.date).getFullYear())) y.push(new Date(change.date).getFullYear())
      })
      return y
    })

    return { year, years }
  },
}
</script>

<style scoped>
select {
  width: 100%;
  margin-bottom: 16px;
}
.credit-viewer {
  margin-bottom: 16px;
}
.new-form {
  margin-bottom: 16px;
}
</style>
