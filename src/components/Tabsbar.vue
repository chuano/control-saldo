<template>
  <router-link :to="{ name: 'Home' }">Home</router-link>|
  <router-link :to="{ name: 'CreditHistory' }">Historial</router-link>
</template>

<script>
export default {
  name: 'Tabsbar',
}
</script>
