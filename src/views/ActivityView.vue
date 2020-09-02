<template>
  <activity-detail-tabs :activity-id="$route.params.id" />
  <div class="container">
    <activity-detail :activity-id="$route.params.id" />
  </div>
  <floating-button icon="add" @click="displayAddCreditForm" />
</template>

<script>
import { useRoute } from 'vue-router'
import useUpdateTopbarTitle from '../composition/useUpdateTopbarTitle'
import useGetActivity from '../composition/useGetActivity'
import ActivityDetailTabs from '../components/ActivityDetailTabs'
import ActivityDetail from '../components/ActivityDetail'
import FloatingButton from '../components/FloatingButton'
import useAddActivityCredit from '../composition/useAddActivityCredit'

export default {
  name: 'ActivityView',
  components: {
    ActivityDetail,
    ActivityDetailTabs,
    FloatingButton,
  },
  setup() {
    const { params } = useRoute()
    const { activity } = useGetActivity(params.id)
    const { updateTopbarTitle } = useUpdateTopbarTitle()
    const { credit, addCredit } = useAddActivityCredit(activity.value)
    updateTopbarTitle(activity.value.name)

    const displayAddCreditForm = () => {
      credit.value = convertNumber(prompt(`Agregar crédito a "${activity.value.name}".`, '') || 0)
      if (credit.value === 0) return
      if (isNaN(credit.value)) return alert('Debes introducir un número.')
      addCredit()
    }

    const convertNumber = (amount) => {
      if (!amount) return 0
      let converted = amount.indexOf(',') === -1 ? amount : amount.replace(/\./g, '').replace(',', '.')
      return parseFloat(converted)
    }

    return { displayAddCreditForm }
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
