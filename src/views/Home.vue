<template>
  <tabsbar />
  <div class="container">
    <credit-viewer class="credit-viewer" />
    <h2>Nueva anotación</h2>
    <charge-product class="new-form" />
    <h2>Últimos movimientos</h2>
    <credit-changes :limit="5" />
  </div>
</template>

<script>
import Tabsbar from '../components/Tabsbar'
import CreditViewer from '../components/credit/CreditViewer'
import ChargeProduct from '../components/credit/ChargeProduct'
import CreditChanges from '../components/credit/CreditChanges'

export default {
  name: 'Home',
  components: {
    CreditViewer,
    ChargeProduct,
    Tabsbar,
    CreditChanges,
  },
}
</script>

<style scoped>
.credit-viewer {
  margin-bottom: 16px;
}
.new-form {
  margin-bottom: 20px;
}
</style>
