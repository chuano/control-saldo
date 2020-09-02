<template>
  <form action="#" @submit.prevent="addCredit">
    <input type="number" placeholder="Importe" v-model="credit" />
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
  width: calc(20% - 16px);
  margin-left: 8px;
  padding: 0;
}
input {
  width: calc(80% - 10px);
}
</style>
