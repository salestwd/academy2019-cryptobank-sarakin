<template>
  <div class="home">
    <div class="content center">
      <img class="logo" :src="require('../assets/logoL.png')" alt="Logo"/>
      
      <div class="main">
        <h5>Saldo Disponível</h5>
        <h2 class="h">$KA </h2>
      </div>
      
      <form class="home-form" action="">
        <div class="actions-home">
          
          <button type="submit" id="create-account-button" class="center">
          <img class="icon" :src="require('../assets/piggy-bank.png')" alt="Logo"/> 
            Depositar
          </button>
        </div>
        <div class="actions-home">
          <button type="submit" id="create-account-button" class="center">
            Pagar
          </button>
        </div>
        <div class="actions-home">
          <button type="submit" id="create-account-button" class="center">
            Transferir
          </button>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>

<style scoped>

.home {
  overflow: auto;
  background: url("../assets/fundo.png") no-repeat center center fixed;
  background-color: #333333;
  background-size: cover;
  width: 100%;
  height: 100%;
  align-content: center;
  }
.home > .content {
  width: 320px;
  margin-top: 60px;
  margin-bottom: 60px;
  }
.logo {
  align-self: center;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  }
.center {
  display: block;
  margin: 0 auto;
  }
.main {
  background-color: #ffffff;
  width: 334px;
  height: 90px;
  font-family: 'Roboto';
  font-weight: lighter;
  font-size: 15px;
  color: #333333;
  text-align: left;
  border-radius: 5px;
  margin: auto;
}
.h {
  margin: 10 auto;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 40px;
  color: #333333;
  text-align: left;
  margin: auto;
}
.home-form {
  margin-top: 350px;
}
.actions-home  > button {
  margin-top: 6px;
  text-align: right;
  margin-top: 10px;
  color: #FFF;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: normal;
  background-color: #FA7268;
  border: 0;
  border-radius: 5px;
  width: 334px;
  height: 50px;
  cursor: pointer;
  outline:#FFF;
}
.actions-home {
  vertical-align: middle;
}
.icon {
  margin-top: 6px;
  width: 38px;
  vertical-align: middle;
  margin-bottom: 0.75em;
}


</style>