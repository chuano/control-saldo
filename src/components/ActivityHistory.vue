<template>
  <input type="text" v-model="title" @keyup="saveTitle" spellcheck="false" class="h2" />
  <div class="credit-viewer">
    <activity-credit-viewer :activity="activity" />
  </div>
  <h2>Añadir saldo</h2>
  <div class="new-form">
    <activity-credit-form :activity="activity" />
  </div>
  <h2>Historial de movimientos</h2>
  <div class="history-list">
    <activity-changes-list :showYear="true" :activity="activity" />
  </div>
</template>

<script>
import useGetActivity from '../composition/useGetActivity'
import useEditActivityTitle from '../composition/useEditActivityTitle'

import ActivityCreditViewer from './ActivityCreditViewer'
import ActivityChangesList from './ActivityChangesList'
import ActivityCreditForm from './ActivityCreditForm'

export default {
  name: 'ActivityHistory',
  components: {
    ActivityCreditViewer,
    ActivityChangesList,
    ActivityCreditForm,
  },
  props: {
    activityId: {
      default: null,
    },
  },
  setup(props) {
    const { activity } = useGetActivity(props.activityId)
    const { title, saveTitle } = useEditActivityTitle(activity.value)

    return { activity, title, saveTitle }
  },
}
</script>

<style scoped>
.credit-viewer {
  margin-bottom: 24px;
}
.new-form {
  margin-bottom: 24px;
  margin-top: -8px;
}
.history-list {
  margin-top: -8px;
}
</style>
