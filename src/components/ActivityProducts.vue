<template>
  <h2>Nuevo producto</h2>
  <product-form class="new-form" :activity="activity" />
  <h2>Productos</h2>
  <product-list :activity="activity" />
</template>

<script>
import ProductForm from './ActivityProductForm'
import ProductList from './ActivityProductsList'
import useGetActivity from '../composition/useGetActivity'

export default {
  name: 'ActivityProducts',
  components: {
    ProductForm,
    ProductList,
  },
  props: {
    activityId: {
      default: null,
    },
  },
  setup(props) {
    const { activity } = useGetActivity(props.activityId)

    return {
      activity,
    }
  },
}
</script>

<style scoped>
h2 {
  margin-top: 18px;
}
</style>
