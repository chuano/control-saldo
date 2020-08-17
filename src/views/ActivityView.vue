<template>
  <activity-detail-tabs :activity-id="$route.params.id" />
  <div class="container">
    <activity-detail :activity-id="$route.params.id" />
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import useUpdateTopbarTitle from '../composition/useUpdateTopbarTitle'
import useGetActivity from '../composition/useGetActivity'
import ActivityDetailTabs from '../components/ActivityDetailTabs'
import ActivityDetail from '../components/ActivityDetail'

export default {
  name: 'ActivityView',
  components: {
    ActivityDetail,
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
  margin-bottom: 20px;
}
</style>
