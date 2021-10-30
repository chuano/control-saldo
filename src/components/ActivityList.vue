<template>
  <draggable class="dragArea list-group w-full" :list="activities" @change="saveOrder">
    <div v-for="activity in activities" :key="activity.id">
      <button class="block" @click="$emit('selection', activity)">
        {{ activity.name }}
      </button>
    </div>
  </draggable>
  <div>
    <button class="block" v-if="addButton" @click="$router.push({ name: 'NewActivityView' })">
      <img src="../assets/add-white-36dp.svg" alt="Add" />
    </button>
    <button class="block blue" @click="makeBackup">Guardar copia en la nube</button>
    <button class="block blue" @click="restoreBackup">Recuperar copia de la nube</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import useBackup from '../composition/useBackup'
import useGetActivities from '../composition/useGetActivities'
import useRestore from '../composition/useRestore'
import { VueDraggableNext } from 'vue-draggable-next'

export default {
  name: 'ActiviyList',
  components: {
    draggable: VueDraggableNext,
  },
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
    const store = useStore()
    const saveOrder = () => {
      store.commit('setActivities', activities.value)
    }

    return {
      activities,
      makeBackup,
      restoreBackup,
      saveOrder,
    }
  },
}
</script>

<style scoped>
button.block {
  margin-bottom: 8px;
}
button.blue {
  background-color: dodgerblue;
}
</style>
