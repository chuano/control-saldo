<template>
  <div class="row">
    <div v-for="activity in activities" :key="activity.id">
      <button class="block" @click="$emit('selection', activity)">
        {{ activity.name }}
      </button>
    </div>
    <div>
      <button class="block" v-if="addButton" @click="$router.push({ name: 'NewActivityView' })">
        <img src="../assets/add-white-36dp.svg" alt="Add" />
      </button>
    </div>
  </div>
</template>

<script>
import useGetActivities from '../composition/useGetActivities'

export default {
  name: 'ActiviyList',
  props: {
    addButton: {
      tyoe: Boolean,
      default: false,
    },
  },
  setup() {
    const { activities } = useGetActivities()

    return {
      activities,
    }
  },
}
</script>

<style scoped>
.row {
  width: calc(100% + 16px);
  margin-left: -8px;
}
.row div {
  width: calc(50% - 16px);
  padding: 8px;
}
button.block {
  height: 40vw;
}
</style>
