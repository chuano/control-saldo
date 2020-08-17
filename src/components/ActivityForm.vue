<template>
  <h2>Nombre</h2>
  <input type="text" v-model="activity.name" />
  <button class="block" @click="save">
    <img src="../assets/save-white-36dp.svg" alt="Save" />
  </button>
</template>

<script>
import useAddActivity from '../composition/useAddActivity'

export default {
  name: 'ActivityForm',
  props: {
    activityId: {
      default: null,
    },
  },
  setup(props) {
    const { activity, save } = useAddActivity(props.activityId)

    return {
      activity,
      save,
    }
  },
}
</script>

<style scoped>
input {
  width: calc(100% - 18px);
  margin-bottom: 18px;
}
h2 {
  margin-bottom: 0;
}
</style>
