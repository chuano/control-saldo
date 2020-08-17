<template>
  <activity-detail-tabs :activity-id="$route.params.id" />
  <div class="container">
    <activity-history :activity-id="$route.params.id" />
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import ActivityDetailTabs from '../components/ActivityDetailTabs'
import ActivityHistory from '../components/ActivityHistory'
import useUpdateTopbarTitle from '../composition/useUpdateTopbarTitle'
import useGetActivity from '../composition/useGetActivity'

export default {
  name: 'CreditHistoryView',
  components: {
    ActivityHistory,
    ActivityDetailTabs,
  },
  setup() {
    const { params } = useRoute()
    const { activity } = useGetActivity(params.id)
    const { updateTopbarTitle } = useUpdateTopbarTitle()
    updateTopbarTitle(activity.value.name)
  },
}
</script>

<style scoped>
.credit-viewer {
  margin-bottom: 16px;
}
.new-form {
  margin-bottom: 16px;
}
</style>
