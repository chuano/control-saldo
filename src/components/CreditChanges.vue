<template>
  <div v-for="change in changes" :key="change.id" class="list-row">
    <div class="row">
      <div class="row">
        <div class="amount">{{ change.amount }}€ - {{ change.description }}</div>
      </div>
      <div class="row">
        <button @click="removeChange(change)" class="small">
          <img src="../assets/delete-white-24dp.svg" alt="Delete" />
        </button>
      </div>
    </div>
    <div class="date">{{ dateFormat(change.date) }}</div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import useCreditHandler from '@/composition/useCreditHandler'

export default {
  name: 'CreditChanges',
  props: {
    limit: {
      default: 1000,
    },
    year: {
      default: new Date().getFullYear(),
    },
  },
  setup(props) {
    const store = useStore()
    const changes = computed(() =>
      store.state.credit.changes.filter((c) => new Date(c.date).getFullYear() === props.year).slice(0, props.limit),
    )
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

<style scoped>
.list-row {
  border-bottom: 1px solid #ccc;
  margin-bottom: 8px;
  padding-bottom: 6px;
}

h3 {
  margin: 0;
  padding: 0;
  font-size: 18px;
}
.date {
  font-size: 12px;
  margin-top: -12px;
}
.amount {
  justify-self: right;
  text-align: right;
}
</style>
