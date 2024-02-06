<template>
  <footer id="footer">
    <p>Make Your Burger &copy; 2022</p>
  </footer>
</template>

<script>
export default {
  name: 'component-footer',
  components: {},
};
</script>

<style scoped>
#footer {
  background-color: #222;
  color: #fcba03;
  border-top: 4px solid #222;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 200px;
  z-index: 100;
}
</style>
