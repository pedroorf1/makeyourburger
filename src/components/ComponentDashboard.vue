<template>
  <div id="burger-table">
    <div>
      <div id="burger-table-heading">
        <div class="order-id">#:</div>
        <div>Cliente:</div>
        <div>Pão:</div>
        <div>Carne:</div>
        <div>Opcionais:</div>
        <div>Ações:</div>
      </div>
    </div>
    <div id="burger-table-rows">
      <div class="burger-table-row">
        <div class="order-number">1</div>
        <div>João</div>
        <div>Pão de trigo</div>
        <div>Maminha</div>
        <div>
          <ul>
            <li>Salame</li>
            <li>Tomate</li>
          </ul>
        </div>
        <select name="status" class="status">
          <option value="" selected disabled>Status:</option>
          <option value="1">Aguardando</option>
          <option value="2">Em preparação</option>
          <option value="3">Pronto</option>
        </select>
        <div>
          <button class="delete-btn">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dashboard',
  components: {},
};
</script>
<style scoped>
#burger-table {
  font-size: 14px;
  font-weight: normal;
  max-width: 1200px;
  margin: 0 auto;
}

#burger-table-rows {
  width: 100%;
  display: flex;
  flex-direction: column;
}

#burger-table-heading {
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
  padding: 12px;
  border-bottom: 1px solid #333;
}

.burger-table-row {
  display: flex;
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

#burger-table-heading div,
.burger-table-row div {
  display: flex;
  text-align: left;
  width: 13.6% !important;
  padding: 10px;
}

.order-id,
.order-number {
  width: 5% !important;
}

button {
  padding: 10px;
  border-radius: 2px;
  background-color: #fcba03;
  color: #fff;
  border: 1px solid #fcba03;
  cursor: pointer;
  transition: 0.3s;
  margin: 0 auto;
}
button:hover {
  background-color: #ffffff;
  color: #222;
}
select {
  padding: 12px 6px;
  margin-right: 12px;
  border: none;
  border-color: transparent;
  background-color: transparent;
}
</style>
