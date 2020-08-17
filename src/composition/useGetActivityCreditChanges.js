import { computed } from 'vue'

export default function useGetActivityCreditChanges(activity, year, limit) {
  const changes = computed(() =>
    activity.changes.filter((c) => new Date(c.date).getFullYear() === year).slice(0, limit),
  )

  return { changes }
}
