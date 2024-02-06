<template>
  <div id="nav">
    <router-link to="/" id="logo-rul">
      <img alt="make your burger" src="img/logo.png" id="logo" />
    </router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/pedidos">Pedidos</router-link>
  </div>
</template>

<script>
export default {
  name: 'component-navbar',
  components: {},
};
</script>

<style scoped>
#nav {
  background-color: #222;
  padding: 15px 50px;
  border-bottom: 4px solid #111;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#logo-rul {
  margin: auto;
  margin-left: 0;
}
#logo {
  width: 40px;
  height: 40px;
}
a {
  color: #fcba03;
  text-emphasis: none;
  margin: 12px;
  transition: 0.3s;
}
a:hover {
  color: #fff;
  text-decoration: none;
}
</style>
