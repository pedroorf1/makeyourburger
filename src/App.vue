<template>
  <div>
    <ComponentNavbar />
    <router-view></router-view>
  </div>
</template>

<script>
import ComponentNavbar from './components/ComponentNavbar.vue';
export default {
  name: 'App',
  components: { ComponentNavbar },
};
</script>

<style></style>
