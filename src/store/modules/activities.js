const state = {
  activities: JSON.parse(localStorage.getItem('activities') || '[]'),
}

const mutations = {
  setActivities(state, activities) {
    state.activities = activities
  },
  addActivity(state, activity) {
    state.activities.push(activity)
  },
  removeActivity(state, activity) {
    state.activities = state.activities.filter((x) => x.id != activity.id)
  },
  updateActivity(state, activity) {
    const index = state.activities.findIndex((x) => x.id === activity.id)
    state.activities[index] = activity
  },
}

export default {
  state,
  mutations,
}
