<template>
  <card title="Tu saldo" :color="color">{{ credit }} €</card>
</template>

<script>
import Card from '@/components/Card'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'CreditViewer',
  components: {
    Card,
  },
  setup() {
    const store = useStore()
    const credit = computed(() => store.state.credit.credit)
    const color = computed(() => (credit.value > 0 ? 'green' : 'red'))

    return {
      credit,
      color,
    }
  },
}
</script>
