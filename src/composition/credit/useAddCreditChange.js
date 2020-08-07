import { useStore } from 'vuex'

export default function useAddCreditChange() {
  const store = useStore()

  function addCreditChange(amount, description) {
    store.commit('addCredit', amount)
    store.commit('addCreditChange', { date: new Date(), amount: amount, description: description })
  }

  return { addCreditChange }
}
