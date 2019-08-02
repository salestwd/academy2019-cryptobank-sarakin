<template>
  <div class="home">
    <div class="content center">
      <img class="logo" :src="require('../assets/logoL.png')" alt="Logo"/>
      
      <div class="main">
          <div class="header">   
            <label class="dep" for="efetua">
            <img class="bac" :src="require('../assets/back.png')" alt="Logo"/> Transferir</label>              
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
            <div class="main-3">
                <label class="inf" for="sendTo">Para quem você deseja enviar?</label>
                <dropdown class="drop" :options="arrayOfObjects" 
                    :selected="object" 
                    v-on:updateOption="methodToRunOnSelect" 
                    :placeholder="'Select an Item'">
                </dropdown>
                <div class="actions-home">
                    <button type="submit" id="create-account-button" class="btn">
                    Transferir
                    </button>
                </div>
            </div>
         </div>

      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import dropdown from 'vue-dropdowns';

export default {
  name: 'home',
    data() {
        return {
        arrayOfObjects: [],
        object: {
            name: 'Object Name',
        }
        }
    },

    components: {
        'dropdown': dropdown,
    },

    methods: {
        methodToRunOnSelect(payload) {
        this.object = payload;
        }
    }
  
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
.main-3 { 
    margin-top: 20px;
    margin-bottom: 100px;
    background-color: #F5F5F5;
    width: 380px;
    height: 189px;
    font-family: 'Roboto';
    font-size: 20px;
    color: #333333;
    justify-content: center;
    text-align: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px
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
.dropdown {
  color: #636b6f;
  min-width: 160px;
  padding: 10px;
  text-transform: none;
  font-weight: 300;
  margin-bottom: 7px;
  border: 0;
  background-image: linear-gradient(#009688, #009688), linear-gradient(#D2D2D2, #D2D2D2);
  background-size: 0 2px, 100% 1px;
  background-repeat: no-repeat;
  background-position: center bottom, center calc(100% - 1px);
  background-color: transparent;
  transition: background 0s ease-out;
  float: none;
  box-shadow: none;
  border-radius: 0;
}
/* .dropdown-toggle:hover {
  background: #e1e1e1;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;
}

.dropdown-menu > li > a {
  padding: 10px 30px;
  display: block;
  clear: both;
  font-weight: normal;
  line-height: 1.6;
  color: #333333;
  white-space: nowrap;
  text-decoration: none;
}
.dropdown-menu > li > a:hover {
  background: #efefef;
  color: #409FCB;
}

.dropdown-menu > li {
  overflow: hidden;
  width: 100%;
  position: relative;
  margin: 0;
} */
</style>