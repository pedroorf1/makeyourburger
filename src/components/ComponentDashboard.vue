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
      <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
        <div class="order-number">{{ burger.id }}</div>
        <div>{{ burger.nome }}</div>
        <div>{{ burger.pao }}</div>
        <div>{{ burger.carne }}</div>
        <div>{{ burger.carne }}</div>
        <div>
          <ul>
            <li v-for="(opcional, index) in burger.Opcionais" :key="index">{{ opcional }}</li>
          </ul>
        </div>
        <select name="status" class="status" @change="updateStatus($event, burger.id)">
          <option value="" selected disabled>Status:</option>
          <option
            v-for="s in status"
            :key="s.id"
            :value="s.tipo"
            :selected="s.tipo == burger.status"
          >
            {{ s.tipo }}
          </option>
        </select>
        <div>
          <button class="delete-btn" @click="deleteBurger(burger.id)">Remover</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dashboard',
  components: {},
  data() {
    return {
      burgers: null,
      burger_id: null,
      status: [],
    };
  },
  methods: {
    async gerIngredients() {
      const response = await fetch('http://localhost:3000/ingredientes');
      const data = await response.json();
      this.paes = data.paes;
      this.carnes = data.carnes;
      this.opcionaisData = data.opcionais;
    },
    async getPedidos() {
      try {
        const response = await fetch('http://localhost:3000/burgers');
        const burgers = await response.json();
        this.burgers = burgers;
      } catch (error) {
        console.log('Erro ao realizar pedido!');
      }
    },
    async gerStatus() {
      const response = await fetch('http://localhost:3000/status');
      const data = await response.json();
      this.status = data;
    },
    async deleteBurger(id) {
      try {
        await fetch(`http://localhost:3000/burgers/${id}`, {
          method: 'DELETE',
        });
        this.getPedidos();
      } catch (error) {
        console.log('Erro ao deletar pedido!');
      }
    },
    async updateStatus(event, id) {
      const option = event.target.value;
      try {
        const response = await fetch(`http://localhost:3000/burgers/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: option }),
        });
        console.log('\n\n\nResponse: ', response);
        this.getPedidos();
      } catch (error) {
        console.log('Erro ao atualizar status!');
      }
    },
  },
  created() {
    this.getPedidos();
    this.gerStatus();
  },
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
