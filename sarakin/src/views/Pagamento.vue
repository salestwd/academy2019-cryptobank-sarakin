<template>
  <div class="home">
    <div class="content center">
      <img class="logo" :src="require('../assets/logoL.png')" alt="Logo"/>
      
      <div class="main">
          <div class="header" v-on="'/home'">   
            <label class="dep" for="deposita">
            <img class="bac" :src="require('../assets/back.png')" alt="Logo"/> Efetuar pagamento</label>              
          </div>

         <div class="main-2">

            <label class="inf" for="Informe">Informe a quantia desejada</label>
            <div class="val">
                <label for="$KA">
                    $KA <input v-model.number="number" maxlength="6" type="value" id="value-input" 
                required name="value" class="input" inputmode="decimal"> 
                </label>
            </div>
            <label class="inf2" for="Informe">Digite um valor entre $KA 10,00 e $KA 15.00,00</label>
            <div class="actions-home">
                <button type="submit" id="create-account-button" class="btn">
                 Pagar
                </button>
            </div>
         </div>

      </div>

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
  width: 380px;
  margin-top: 60px;
  margin-bottom: 60px;
  align-items: center;
  }
.logo {
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  }
.center {
  display: block;
  margin: 0 auto;
  }
.main {
    background-color: #4076AD;
    width: 380px;
    height: 240px;
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 13px;
    color: #ffffff;
    border-radius: 10px;
    margin-top: 150px;
    padding-top: 8px;
    /* justify-content: center; */
    text-align: center;
}
.dep {
    padding-bottom: 5px;
    vertical-align: middle;
}
.main-2 {
  padding-top: 0.8em; 
  background-color: #ffffff;
  width: 380px;
  height: 208px;
  font-family: 'Roboto';
  font-size: 20px;
  color: #333333;
  border-radius: 10px;
  justify-content: center;
  text-align: center;
}
.inf {
    padding-top: 0.1em;
}
.inf2{
    font-family: 'Roboto';
    font-size: 10px;
    font-weight: normal;
}
.input {
    height: 35px;
    width: 153px;
    border-radius: 5px;
    border: none;
    background: #FFF;
    font-family: 'Roboto';
    font-size: 30px;
    color: #707070;
    outline: none;
    text-align: center;
    /* margin-top: 10px; */
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
.actions-home  > button {
  margin-top: 6px;
  text-align: center;
  margin-top: 10px;
  color: #FFF;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: normal;
  background-color: #FA7268;
  border: 0;
  border-radius: 5px;
  width: 350px;
  height: 50px;
  cursor: pointer;
  outline: none;
}
.actions-home {
  vertical-align: middle;
}
.val {
    background: #FFF;
    font-family: 'Roboto';
    font-size: 30px;
}
.bac {
    margin-left: 0px;
    width: 8.81px;
    left: 0px;
}
</style>