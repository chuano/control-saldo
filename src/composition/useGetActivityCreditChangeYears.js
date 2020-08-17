import { computed } from 'vue'

export default function useGetActivityCreditChangeYears(activity) {
  const creditChangeYears = computed(() => {
    const years = []
    activity.changes.forEach((change) => {
      const year = new Date(change.date).getFullYear()
      if (!years.some((x) => x === year)) {
        years.push(year)
      }
    })
    return years
  })

  return { creditChangeYears }
}
