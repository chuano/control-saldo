<template>
  <activity-detail-tabs :activity-id="$route.params.id" />
  <div class="container">
    <activity-detail :activity-id="$route.params.id" />
  </div>
  <floating-button icon="add" @click="openModal" />
  <div class="modal" v-if="showModal">
    <h2>Agregar saldo a "{{ activity.name.trim() }}"</h2>
    <activity-credit-viewer :activity="activity" />
    <input type="number" v-model="credit" id="credit-input" />
    <button @click="addCredit" class="block">Agregar saldo</button>
    <button @click="showModal = false" class="block">Volver</button>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import useUpdateTopbarTitle from '../composition/useUpdateTopbarTitle'
import useGetActivity from '../composition/useGetActivity'
import ActivityDetailTabs from '../components/ActivityDetailTabs'
import ActivityDetail from '../components/ActivityDetail'
import FloatingButton from '../components/FloatingButton'
import useAddActivityCredit from '../composition/useAddActivityCredit'
import ActivityCreditViewer from '../components/ActivityCreditViewer'
import { ref } from 'vue'

export default {
  name: 'ActivityView',
  components: {
    ActivityDetail,
    ActivityDetailTabs,
    FloatingButton,
    ActivityCreditViewer,
  },
  setup() {
    const { params } = useRoute()
    const { activity } = useGetActivity(params.id)
    const { updateTopbarTitle } = useUpdateTopbarTitle()
    updateTopbarTitle(activity.value.name)

    const showModal = ref(false)
    const { credit, addCredit } = useAddActivityCredit(activity.value)
    const openModal = () => {
      showModal.value = true
      setTimeout(() => document.getElementById('credit-input').focus(), 300)
    }

    return { activity, openModal, showModal, credit, addCredit }
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
.modal {
  background: #fff;
  padding: 16px;
  position: fixed;
  top: 0;
  height: 0;
  width: calc(100% - 32px);
  height: calc(100% - 32px);
  z-index: 1001;
}
.modal button {
  margin-bottom: 10px;
}
.modal input {
  width: calc(100% - 18px);
}
.floating-button {
  background-color: dodgerblue;
}
</style>
