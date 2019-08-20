<template>
  <div class="login">
    <img src="../assets/logoM.png" alt="Sarakin Logo" class="img">

      <form class="login-form" @submit.prevent="submitLogin">
        <div class="input-control">
          <label class="lb" for="email-input">E-mail</label>
          <input v-model="email" type="email" id="email-input" required name="email" class="input" placeholder="Digite seu e-mail">
        </div>

        <div class="input-control">
          <label class="lb" for="password-input">Senha</label>
          <input v-model="password" type="password" id="password-input" required name="password" class="input" placeholder="Digite sua senha">
        </div>
        
        <div class="actions">
          <p v-if="!user">Usuário e/ou senha incorretos</p>
          <button type="submit" id="login-button" class="center">
            Entrar
          </button>
      </div>

        <div class="actions">
          <p>Novo usuário?
            <router-link class="rl" to="/create">
              Criar conta
            </router-link>
          </p>
        </div>
      </form>
  </div>
</template>

<script>

import * as firebase from 'firebase' 

export default {
  data: () => ({
    email: '',
    password: '',
    user:true
  }),
  methods: {
    submitLogin () {
      firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        alert('Autenticado com sucesso!')
        this.$router.push({ path: '/home' })
      })
      .catch(function (error) {
        let errorCode = error.code
        let errorMessage = error.message
        // [START_EXCLUDE]
        if (errorCode == 'auth/wrong-password') {
          alert('Wrong password.')
          this.$router.push({ path: '/' })
        } else {
          alert(errorMessage)
          this.$router.push({ path: '/' })
        }
      })
    },
 }
}
</script>

<style>

.login {
    overflow: auto;
    background: url("../assets/fundo.png") no-repeat center center fixed;
    background-color: #333333;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  .login > .content {
    width: 320px;
    margin-top: 60px;
    margin-bottom: 60px;
  }
  .center {
    display: block;
    margin: 0 auto;
  }
  .login-form {
    margin-top: 78px;
  }
  .input-control {
    margin-bottom: 20px;
  }
  .input-control > label {
    display: block;
  }
  .input-control > .input {
    margin-top: 20px;
    height: 45px;
    width: 320px;
    border-radius: 5px;
    border-width: 0;
    background: #FFF;
    font-family: 'Roboto';
    font-size: 20px;
    padding: 0 25px;
    outline: none;
  }
  .input-control > .input:focus {
    background: #F2F2F2;
  }
  .actions > button[type="submit"] {
    background-color: #FA7268;
    border: 0;
    border-radius: 5px;
    color: #FFF;
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 15px;
    width: 100px;
    height: 45px;
    cursor: pointer;
    outline:#FFF;
  }
  .logo {
    margin: auto;
    display: block;
  }
  .login > .content > .login-form > .input-control > label {
    display: none;
  }
  .input-control > .lb {
    font-family: 'Roboto';
    font-weight: 'bold';
    font-size: 18px;
    color: #FFF;
    height: 18;
    width: 43;  
  }

  .img {
    margin-top: 213px;
    width: auto;
  }
  
  .actions {
    color: #FFF;
    font-family: 'Roboto';
    font-size: 15px;
  }

  .rl {
    color: #FFF;
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 15px;
  }

</style>
