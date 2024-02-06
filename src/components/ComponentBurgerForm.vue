<template>
  <div class="form-container">
    <ComponentMessage :message="msg" />
    <div>
      <form id="burger-form">
        <div class="input-container">
          <label for="nome">Nome do cliente:</label>
          <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite seu nome" />
        </div>
        <div class="input-container">
          <label for="pao">Escolha o pão:</label>
          <select name="pao" id="pao" v-model="pao">
            <option selected="selected" disabled>Selecione o pão</option>
            <option :value="item.tipo" v-for="item in paes" :key="item.id">{{ item.tipo }}</option>
          </select>
        </div>
        <div class="input-container">
          <label for="carne">Escolha a carne:</label>
          <select name="carne" id="carne" v-model="carne">
            <option selected="selected" disabled>Selecione a carne</option>
            <option v-for="item in carnes" :key="item.id" :value="item.tipo">
              {{ item.tipo }}
            </option>
          </select>
        </div>
        <div class="input-container">
          <label for="opcionais">Escolha os opcionais:</label>
          <div class="checkbox-container">
            <div class="checkbox-item" v-for="item in opcionaisData" :key="item.id">
              <input
                type="checkbox"
                name="opcionais"
                v-model="opcionais"
                :value="item.tipo"
              /><span>{{ item.tipo }}</span>
            </div>
          </div>
        </div>
        <div class="input-container">
          <button type="button" @click.stop="createBurger">Criar Amburger</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import ComponentMessage from './ComponentMessage.vue';
export default {
  name: 'Form',
  components: {
    ComponentMessage,
  },
  data() {
    return {
      paes: null,
      carnes: null,
      opcionaisData: null,
      nome: null,
      pao: null,
      carne: null,
      opcionais: [],
      msg: null,
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
    async createBurger(e) {
      e.preventDefault();

      const data = {
        nome: this.nome,
        pao: this.pao,
        carne: this.carne ? this.carne : undefined,
        Opcionais: Array.from(this.opcionais),
        status: 'Solicitado',
      };

      const dataJson = JSON.stringify(data);
      try {
        const response = await fetch('http://localhost:3000/burgers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: dataJson,
        });
        const pedido = await response.json();

        this.msg = `O pedido Nº${pedido.id} foi realizado com sucesso!`;

        // Limpa os campos
        this.nome = '';
        this.pao = '';
        this.carne = '';
        this.opcionais = [];
        // Limpa a mensagem
        setTimeout(() => {
          this.msg = null;
        }, 3000);
      } catch (error) {
        this.msg = 'Erro ao realizar pedido!';
      }
    },
  },
  mounted() {
    this.gerIngredients();
  },
};
</script>
<style scoped>
h1 {
  color: red;
}

.form-container,
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form-container {
  max-width: 400px;
  margin: 0 auto;
}
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.input-container input,
select,
checkbox {
  width: 380px;
  padding: 10px 0;
  border-radius: 2px;
  border: 1px solid #ccc;
}

label {
  width: 100%;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 10px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
  display: flex;
  position: relative;
  margin-left: 15px;
}
.checkbox-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
}
.checkbox-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
}
.checkbox-item input {
  width: 40px;
  margin-right: 20px;
}

button {
  width: 380px;
  padding: 10px 0;
  border-radius: 2px;
  background-color: #fcba03;
  color: #fff;
  border: 1px solid #fcba03;
  cursor: pointer;
  transition: 0.3s;
}
button:hover {
  background-color: #ffffff;
  color: #222;
}
</style>
