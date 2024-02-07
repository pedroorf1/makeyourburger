<template>
  <h1 class="main-container">
    <h1>Gerenciar Pedidos</h1>
    <ComponentDashboard />
  </h1>
</template>

<script>
import ComponentDashboard from '@/components/ComponentDashboard.vue';
export default {
  name: 'pedidos',
  components: { ComponentDashboard },
};
</script>

<style scoped></style>
