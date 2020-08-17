<template>
  <form action="#" @submit.prevent="save">
    <input type="text" v-model="name" placeholder="Tipo" class="name" />
    <input type="number" step="0.5" v-model="price" placeholder="Precio" class="price" />
    <button class="block">
      <img src="../assets/save-white-36dp.svg" alt="Save" />
    </button>
  </form>
</template>

<script>
import useAddActivityProduct from '../composition/useAddActivityProduct'

export default {
  name: 'ActivityProductForm',
  props: {
    activity: {
      default: () => {},
    },
  },
  setup(props) {
    const { name, price, save } = useAddActivityProduct(props.activity)

    return {
      save,
      name,
      price,
    }
  },
}
</script>

<style scoped>
input.name {
  width: calc(100% - 96px);
  margin-right: 10px;
}
input.price {
  width: 50px;
}
</style>
