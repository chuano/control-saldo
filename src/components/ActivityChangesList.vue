<template>
  <select v-model="year" v-if="showYear">
    <option v-for="currentYear in creditChangeYears" :key="currentYear" :value="currentYear">
      {{ currentYear }}
    </option>
  </select>
  <div class="wrapper">
    <div v-for="change in changes" :key="change.id" class="list-row">
      <div class="row">
        <div class="row">
          <div class="amount">{{ change.amount.toFixed(2) }}€ - {{ change.description }}</div>
        </div>
        <div class="row">
          <button @click="removeActivityCreditChange(activity, change)" class="small">
            <img src="../assets/delete-white-24dp.svg" alt="Delete" />
          </button>
        </div>
      </div>
      <div class="date">{{ dateFormat(change.date) }}</div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import useDateFormat from '../composition/useDateFormat'
import useGetActivityCreditChangeYears from '../composition/useGetActivityCreditChangeYears'
//import useGetActivityCreditChanges from '../composition/useGetActivityCreditChanges'
import useRemoveActivityCreditChange from '../composition/useRemoveActivityCreditChange'
import { compareProperty } from '../util/compareProperty'

export default {
  name: 'ActivityChangesList',
  props: {
    activity: {
      default: null,
    },
    limit: {
      default: 1000,
    },
    showYear: {
      default: false,
    },
  },
  setup(props) {
    const year = ref(new Date().getFullYear())
    const { dateFormat } = useDateFormat()
    const { removeActivityCreditChange } = useRemoveActivityCreditChange()
    const { creditChangeYears } = useGetActivityCreditChangeYears(props.activity)
    //const { changes } = useGetActivityCreditChanges(props.activity, year.value, props.limit)
    const changes = computed(() => {
      const yearChanges = props.activity.changes.filter((c) => new Date(c.date).getFullYear() === year.value)
      yearChanges.sort(compareProperty('date', 'desc'))
      return yearChanges.slice(0, props.limit)
    })

    return {
      year,
      changes,
      dateFormat,
      removeActivityCreditChange,
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
.wrapper {
  padding-bottom: 30px;
}
</style>
