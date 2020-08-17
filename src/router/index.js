import { createRouter, createWebHashHistory } from 'vue-router'
import ActivityView from '../views/ActivityView.vue'
import ActivityListView from '../views/ActivityListView.vue'
import ActivityHistoryView from '../views/ActivityHistoryView.vue'
import NewActivityView from '../views/NewActivityView.vue'
import ActivitySettingsView from '../views/ActivitySettingsView.vue'

const routes = [
  {
    path: '/',
    name: 'ActivityListView',
    component: ActivityListView,
  },
  {
    path: '/new_activity',
    name: 'NewActivityView',
    component: NewActivityView,
  },
  {
    path: '/activity/:id',
    name: 'ActivityView',
    component: ActivityView,
  },
  {
    path: '/activity/:id/settings',
    name: 'ActivitySettingsView',
    component: ActivitySettingsView,
  },
  {
    path: '/activity/:id/credit-history',
    name: 'ActivityHistoryView',
    component: ActivityHistoryView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
