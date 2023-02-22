<template>
  <h1 class="label-title">Cálculo do IMC</h1>

  <div class="container">

    <div class="calc-container">
      <h4 class="label-subtitle">Digite seu Peso e Altura</h4>
    
      <div class="div-imc input-itens">
        <span class="p-float-label">
          <primevue-inputtext id="input-weight" type="text" v-model="weight" :disabled="imc" />
          <label for="input-weight">Peso</label>
        </span>
      </div>
      
      <div class="div-imc input-itens">
        <span class="p-float-label">
          <primevue-inputtext id="input-weight" type="text" v-model="height" :disabled="imc" />
          <label for="input-weight">Altura</label>
        </span>
      </div>
    
      <div class="div-imc button-actions">
        <primevue-button label="Calcular" @click="calculate" v-bind:disabled="!height || !weight"/>
        <primevue-button label="Limpar" @click="clear" v-if="height || weight"/>
      </div>

    </div>
    
    <div class="result-container" v-if="imc">
      <h4 class="label-subtitle">Resultado</h4>
      <div>
        <p class="p-result">Seu IMC é: {{ imc }}</p>
      </div>
      <h4 class="label-subtitle">Classificação do IMC</h4>
      <p class="p-result">{{ classification }}</p>
    </div>

  </div>

</template>

<script>

export default {
  data: function () {
    return {
      weight: null, 
      height: null,
      imc: null,
      classification: '' 
    }
  },
  methods: {
    calculate: function() {
      this.imc = (this.weight / (this.height * this.height)).toFixed(2);
      if (this.imc < 18.5) {
        this.classification = 'Magreza';
      } else if (this.imc >= 18.5 && this.imc < 25) {
        this.classification = 'Normal';
      } else if (this.imc >= 25 && this.imc < 30) {
        this.classification = 'Sobrepeso'
      } else if (this.imc >= 30 && this.imc < 40) {
        this.classification = 'Obesidade';
      } else {
        this.classification = 'Obesidade Grave'
      }
    }, 
    clear: function() {
      this.weight = null, 
      this.height = null,
      this.imc = null,
      this.classification = '' 
    }
  }
}

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1 {
  text-align: center;
}

.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 10px; 
}

.calc-container,
.result-container {
  border: 2px solid #2c3e50;
  border-radius: 10px;
  padding: 35px;
  width: 300px; 
}

.result-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: center;
}

h4 {
  padding-bottom: 5px;
  text-align: center;
  margin: 0;
}

.p-result {
  text-align: center;
  margin-bottom: 35px;
}

.input-itens {
  display: flex;
  justify-content: center;
}

.div-imc { 
  margin-top: 2rem;
}

.button-actions {
  display: flex;
  justify-content: space-around;
}

.button-actions > * {
  width: 95px;
}

.label-title {
  font-size: 2rem;
}

.label-subtitle {
  font-size: 1.1rem;
}

</style>
