<template>
  <div>
    <h2 class="nomargin">Nombre de la actividad</h2>
    <input type="text" v-model="title" @keyup="saveTitle" spellcheck="false" />
  </div>

  <div>
    <h2>Añadir saldo</h2>
    <div class="credit-viewer">
      <activity-credit-viewer :activity="activity" />
    </div>
    <activity-credit-form :activity="activity" />
  </div>

  <div>
    <h2>Nuevo producto</h2>
    <activity-product-form class="new-form" :activity="activity" />
    <h2>Productos</h2>
    <activity-product-list :activity="activity" />
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

import useEditActivityTitle from '../composition/useEditActivityTitle'
import useGetActivity from '../composition/useGetActivity'
import useUpdateTopbarTitle from '../composition/useUpdateTopbarTitle'

import ActivityProductForm from '../components/ActivityProductForm'
import ActivityProductList from '../components/ActivityProductsList'
import ActivityCreditForm from '../components/ActivityCreditForm'
import ActivityCreditViewer from '../components/ActivityCreditViewer'

export default {
  name: 'ActicvitySettings',
  components: {
    ActivityProductForm,
    ActivityProductList,
    ActivityCreditForm,
    ActivityCreditViewer,
  },
  props: {
    activityId: {
      default: null,
    },
  },
  setup() {
    const { params } = useRoute()
    const { activity } = useGetActivity(params.id)
    const { title, saveTitle } = useEditActivityTitle(activity.value)
    const { updateTopbarTitle } = useUpdateTopbarTitle()
    updateTopbarTitle(activity.value.name)

    return { activity, title, saveTitle }
  },
}
</script>

<style scoped>
input {
  width: calc(100% - 18px);
}
h2 {
  margin-bottom: 0;
  margin-top: 18px;
}
h2.nomargin {
  margin-top: 0;
}
.credit-viewer {
  margin-top: 6px;
}
</style>
