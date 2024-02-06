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

<style>
body {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #f5f5f5;
  color: rgb(35, 35, 35);
  font-family: 'roboto', 'Arial', sans-serif;
}
a {
  text-decoration: none;
  color: #006eff;
  font-weight: bold;
}
a:hover {
  color: #0056b3;
}
.main-container {
  min-height: 250px;
  margin: 50px;
}
h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}
</style>
