import { useStore } from 'vuex'

export default function useRemoveCreditChange() {
  const store = useStore()

  function removeCreditChange(creditChange) {
    if (!confirm(`¿Borrar el movimiento de saldo ${creditChange.description} con valor de ${creditChange.amount}`)) {
      return
    }
    store.commit('addCredit', creditChange.amount * -1)
    store.commit('removeCreditChange', creditChange)
  }

  return { removeCreditChange }
}
