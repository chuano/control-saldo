const state = {
  credit: parseInt(localStorage.getItem('credit') ?? '0'),
  changes: JSON.parse(localStorage.getItem('creditChanges') ?? '[]'),
}

const mutations = {
  addCredit(state, amount) {
    state.credit += amount
    localStorage.setItem('credit', state.credit)
  },
  removeCredit(state, amount) {
    state.credit -= amount
    localStorage.setItem('credit', state.credit)
  },
  addCreditChange(state, creditChange) {
    creditChange.id = state.changes.length > 0 ? state.changes[0].id + 1 : 1
    state.changes.unshift(creditChange)
    localStorage.setItem('creditChanges', JSON.stringify(state.changes))
  },
  removeCreditChange(state, creditChange) {
    state.changes = state.changes.filter((x) => x.id !== creditChange.id)
    localStorage.setItem('creditChanges', JSON.stringify(state.changes))
  },
}

export default {
  state,
  mutations,
}
