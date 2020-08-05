const state = {
  products: JSON.parse(localStorage.getItem('products') ?? '[]'),
  product: { id: null, name: null, price: null },
}

const mutations = {
  addProduct(state, product) {
    product.id = state.products.length > 0 ? state.products[state.products.length - 1].id + 1 : 1
    state.products.push(product)
    localStorage.setItem('products', JSON.stringify(state.products))
  },

  removeProduct(state, product) {
    state.products = state.products.filter((x) => x.id !== product.id)
    localStorage.setItem('products', JSON.stringify(state.products))
  },

  updateProduct(state, product) {
    const index = state.products.findIndex((x) => x.id === product.id)
    state.products[index] = product
    localStorage.setItem('products', JSON.stringify(state.products))
  },

  selectProduct(state, product) {
    state.product = product
  },

  clearSelectedProduct(state) {
    state.product = { id: null, name: null, price: null }
  },
}

export default {
  state,
  mutations,
}
