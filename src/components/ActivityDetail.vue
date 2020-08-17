<template>
  <input type="text" v-model="title" @keyup="saveTitle" spellcheck="false" class="h2" />
  <div class="credit-viewer">
    <activity-credit-viewer :activity="activity" />
  </div>
  <h2>Nueva anotación</h2>
  <div class="new-form">
    <activity-charge-product :activity="activity" />
  </div>
  <h2>Últimos movimientos</h2>
  <div>
    <activity-changes-list :limit="5" :activity="activity" />
  </div>
</template>

<script>
import ActivityCreditViewer from './ActivityCreditViewer'
import ActivityChargeProduct from './ActivityChargeProduct'
import ActivityChangesList from './ActivityChangesList'
import useGetActivity from '../composition/useGetActivity'
import useEditActivityTitle from '../composition/useEditActivityTitle'

export default {
  name: 'ActivityDetail',
  components: {
    ActivityCreditViewer,
    ActivityChargeProduct,
    ActivityChangesList,
  },
  props: {
    activityId: {
      default: null,
    },
  },
  setup(props) {
    const { activity } = useGetActivity(props.activityId)
    const { title, saveTitle } = useEditActivityTitle(activity.value)

    return {
      activity,
      title,
      saveTitle,
    }
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
</style>
