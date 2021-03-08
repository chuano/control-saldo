<template>
  <form action="#" @submit.prevent="save">
    <input type="text" v-model="name" placeholder="Nombre del producto" class="name" />
    <input type="number" step="0.01" v-model="price" placeholder="Precio" class="price" />
    <button>
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
  width: calc(60% - 20px);
}
input.price {
  width: calc(20% - 16px);
  margin-left: 6px;
}
button {
  vertical-align: middle;
  margin-top: -1px;
  width: calc(20% - 12px);
  margin-left: 6px;
  padding: 0;
}
</style>
