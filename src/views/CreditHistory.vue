<template>
  <tabsbar />
  <div class="container">
    <credit-viewer class="credit-viewer" />
    <h2>Añadir saldo</h2>
    <credit-form class="new-form" />
    <h2>Historial de movimientos</h2>
    <credit-changes :showYear="true" />
  </div>
</template>

<script>
import Tabsbar from '../components/Tabsbar'
import CreditForm from '../components/credit/CreditForm'
import CreditViewer from '../components/credit/CreditViewer'
import CreditChanges from '../components/credit/CreditChanges'

export default {
  name: 'CreditHistory',
  components: {
    CreditViewer,
    CreditForm,
    CreditChanges,
    Tabsbar,
  },
}
</script>

<style scoped>
.credit-viewer {
  margin-bottom: 16px;
}
.new-form {
  margin-bottom: 16px;
}
</style>
