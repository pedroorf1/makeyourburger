<template>
  <div>
    <ComponentBanner />
    <div class="main-container">
      <h1>Monte o seu burger:</h1>
      <ComponentBurgerForm />
    </div>
  </div>
</template>

<script>
import ComponentBanner from '../components/ComponentBanner.vue';
import ComponentBurgerForm from '../components/ComponentBurgerForm.vue';
export default {
  name: 'home',
  components: { ComponentBanner, ComponentBurgerForm },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
}
</style>
