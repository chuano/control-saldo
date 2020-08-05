<template>
  <h1>Historial de saldo</h1>
  <credit-viewer />
  <credit-form />
  <credit-changes />
</template>

<script>
import CreditForm from '@/components/CreditForm'
import CreditViewer from '@/components/CreditViewer'
import CreditChanges from '@/components/CreditChanges'

export default {
  name: 'CreditHistory',
  components: {
    CreditViewer,
    CreditForm,
    CreditChanges,
  },
}
</script>
