<template>
  <div>
    <ComponentBanner />
    <div class="main-container">
      <h1>Monte o seu burger:</h1>
      <p>Formulario</p>
    </div>
  </div>
</template>

<script>
import ComponentBanner from '../components/ComponentBanner.vue';
export default {
  name: 'home',
  components: { ComponentBanner },
};
</script>

<style scoped></style>
