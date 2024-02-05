<template>
  <div>
    <ComponentNavbar />
    <router-view></router-view>
    <ComponentFooter />
  </div>
</template>

<script>
import ComponentNavbar from './components/ComponentNavbar.vue';
import ComponentFooter from './components/ComponentFooter.vue';
export default {
  name: 'App',
  components: { ComponentNavbar, ComponentFooter },
};
</script>

<style></style>
