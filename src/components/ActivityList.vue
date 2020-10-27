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
  <div class="row">
    <div>
      <button class="block-inline" @click="makeBackup">Guardar copia en la nube</button>
    </div>
    <div>
      <button class="block-inline" @click="restoreBackup">Recuperar copia de la nube</button>
    </div>
  </div>
</template>

<script>
import useBackup from '../composition/useBackup'
import useGetActivities from '../composition/useGetActivities'
import useRestore from '../composition/useRestore'

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
    const { makeBackup } = useBackup()
    const { restoreBackup } = useRestore()

    return {
      activities,
      makeBackup,
      restoreBackup,
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
button.block-inline {
  width: 100%;
  height: 20vw;
  background-color: dodgerblue;
}
</style>
