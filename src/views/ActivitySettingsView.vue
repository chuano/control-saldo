<template>
  <div class="container">
    <activity-settings :activity-id="$route.params.id" />
  </div>
</template>

<script>
import ActivitySettings from '../components/ActivitySettings'

export default {
  name: 'ActivitySettingsView',
  components: {
    ActivitySettings,
  },
}
</script>
