import { ref } from 'vue'

import useAddActivityCreditChange from './useAddActivityCreditChange'

export default function useAddActivityCredit(activity) {
  const credit = ref(null)
  const { addChangeToStore } = useAddActivityCreditChange(activity)

  function addCredit() {
    addChangeToStore(credit.value, 'Agregar saldo')
    credit.value = null
  }

  return { credit, addCredit }
}
