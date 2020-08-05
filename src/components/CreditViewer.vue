<template>
  <div>Saldo {{ credit }}</div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'CreditViewer',
  setup() {
    const store = useStore()
    const credit = computed(() => store.state.credit.credit)

    return {
      credit,
    }
  },
}
</script>
