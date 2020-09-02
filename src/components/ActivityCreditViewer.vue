<template>
  <card title="Tu saldo" :color="color">{{ activity.credit.toFixed(2) }} €</card>
</template>

<script>
import { computed } from 'vue'
import Card from './Card'

export default {
  name: 'ActivityCreditViewer',
  components: {
    Card,
  },
  props: {
    activity: {
      default: null,
    },
  },
  setup(props) {
    const color = computed(() => (props.activity.credit.value > 0 ? 'green' : 'red'))

    return {
      color,
    }
  },
}
</script>
