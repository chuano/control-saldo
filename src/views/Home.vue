<template>
  <tabsbar />
  <h1>Home</h1>
  <credit-viewer />
  <charge-product />
</template>

<script>
import Tabsbar from '@/components/Tabsbar'
import CreditViewer from '@/components/CreditViewer'
import ChargeProduct from '@/components/ChargeProduct'
export default {
  name: 'Home',
  components: {
    CreditViewer,
    ChargeProduct,
    Tabsbar,
  },
}
</script>
