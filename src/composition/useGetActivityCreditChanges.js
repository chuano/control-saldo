import { computed } from 'vue'
import { compareProperty } from '../util/compareProperty'

export default function useGetActivityCreditChanges(activity, year, limit) {
  const changes = computed(() => {
    const yearChanges = activity.changes.filter((c) => new Date(c.date).getFullYear() === year)
    yearChanges.sort(compareProperty('date', 'desc'))
    return yearChanges.slice(0, limit)
  })

  return { changes }
}
