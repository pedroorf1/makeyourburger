<template>
  <div>
    <div class="main-banner">
      <h1>Make your Burger</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Banner',
  components: {},
};
</script>
<style scoped>
.main-banner {
  display: flex;
  position: relative;
  border: 0;
  padding: 0;
  margin: 0;
  background-image: url('../assets/burger.jpg');
  background-position: 0 -280px;
  background-size: cover;
  height: 500px;
  top: -4px;
  align-items: center;
  justify-content: flex-start;
  h1 {
    color: white;
    font-size: 3em;
    margin-left: 10%;
    text-align: center;
  }
}
</style>
