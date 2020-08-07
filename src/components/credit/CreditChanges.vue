<template>
  <select v-model="year" v-if="showYear">
    <option
      v-for="currentYear in creditChangeYears"
      :key="currentYear"
      :value="currentYear"
    >{{ currentYear }}</option>
  </select>

  <div v-for="change in changes" :key="change.id" class="list-row">
    <div class="row">
      <div class="row">
        <div class="amount">{{ change.amount }}€ - {{ change.description }}</div>
      </div>
      <div class="row">
        <button @click="removeCreditChange(change)" class="small">
          <img src="../../assets/delete-white-24dp.svg" alt="Delete" />
        </button>
      </div>
    </div>
    <div class="date">{{ dateFormat(change.date) }}</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import useRemoveCreditChange from '../../composition/credit/useRemoveCreditChange'
import useGetCreditChanges from '../../composition/credit/useGetCreditChanges'
import useDateFormat from '../../composition/useDateFormat'
import useGetCreditChangeYears from '../../composition/credit/useGetCreditChangeYears'

export default {
  name: 'CreditChanges',
  props: {
    limit: {
      default: 1000,
    },
    showYear: {
      default: false,
    },
  },
  setup(props) {
    const year = ref(new Date().getFullYear())
    const { changes } = useGetCreditChanges(year.value, props.limit)
    const { dateFormat } = useDateFormat()
    const { removeCreditChange } = useRemoveCreditChange()
    const { creditChangeYears } = useGetCreditChangeYears()

    return {
      year,
      changes,
      dateFormat,
      removeCreditChange,
      creditChangeYears,
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
select {
  width: 100%;
  margin-bottom: 16px;
}
</style>
