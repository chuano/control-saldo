<template>
  <h1>Home</h1>
  <credit-viewer />
  <charge-product />
</template>

<script>
import CreditViewer from '@/components/CreditViewer'
import ChargeProduct from '@/components/ChargeProduct'
export default {
  name: 'Home',
  components: {
    CreditViewer,
    ChargeProduct,
  },
}
</script>
