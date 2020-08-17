import { useStore } from 'vuex'

export default function useRemoveCreditChange() {
  const store = useStore()

  function removeActivityCreditChange(activity, creditChange) {
    if (!confirm(`¿Borrar el movimiento de saldo ${creditChange.description} con valor de ${creditChange.amount}`)) {
      return
    }
    const changes = activity.changes.filter((x) => x.id !== creditChange.id)
    const amount = creditChange.amount * -1
    activity.changes = changes
    activity.credit += amount
    store.commit('updateActivity', activity)
  }

  return { removeActivityCreditChange }
}
