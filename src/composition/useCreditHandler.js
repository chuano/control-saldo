import { useStore } from 'vuex'

const useCreditHandler = () => {
  const store = useStore()

  const creditChange = (creditChange) => {
    store.commit('addCredit', creditChange.amount)
    store.commit('addCreditChange', creditChange)
  }

  const removeCreditChange = (creditChange) => {
    store.commit('addCredit', creditChange.amount * -1)
    store.commit('removeCreditChange', creditChange)
  }

  return {
    creditChange,
    removeCreditChange,
  }
}

export default useCreditHandler
