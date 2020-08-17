<template>
  <div class="container">
    <h2>Actividades</h2>
    <activity-list :add-button="true" @selection="goToActivity($event)" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

import ActivityList from '../components/ActivityList'

import useUpdateTopbarTitle from '../composition/useUpdateTopbarTitle'

export default {
  name: 'ActivityListView',
  components: {
    ActivityList,
  },
  setup() {
    const router = useRouter()
    const { updateTopbarTitle } = useUpdateTopbarTitle()
    updateTopbarTitle('Control de saldo')

    function goToActivity(activity) {
      router.push({ name: 'ActivityView', params: { id: activity.id } })
    }

    return { goToActivity }
  },
}
</script>
