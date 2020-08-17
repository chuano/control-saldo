<template>
  <form action="#" @submit.prevent="addCredit">
    <input type="number" step="0.5" placeholder="Importe" v-model="credit" />
    <button>
      <img src="../assets/add-white-36dp.svg" alt="Add" />
    </button>
  </form>
</template>

<script>
import useAddActivityCredit from '../composition/useAddActivityCredit'

export default {
  name: 'ActivityCreditForm',
  props: {
    activity: {
      default: () => {},
    },
  },
  setup(props) {
    const { credit, addCredit } = useAddActivityCredit(props.activity)

    return {
      credit,
      addCredit,
    }
  },
}
</script>

<style scoped>
button {
  vertical-align: middle;
  margin-top: -1px;
  width: calc(25% - 17px);
  margin-left: 8px;
}
input {
  width: calc(75% - 9px);
}
</style>
