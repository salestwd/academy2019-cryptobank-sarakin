    <template>
  <div class="createaccount">
    <div class="content center">
      <img class="logo" :src="require('../assets/logoL.png')" alt="Logo"/>

      <form class="createaccount-form"  @submit.prevent="createAccount">
        <label class="lb" for="name-input">Nome</label>
        <div class="input-control"> 
          <input v-model="name" type="text" id="name-input" required name="name" class="input" placeholder="Digite seu nome">
        </div>
        <label class="lb" for="email-input">E-mail</label>
        <div class="input-control">
          
          <input v-model="email" type="email" id="email-input" required name="email" class="input" placeholder="Digite seu e-mail">
        </div>
        <label class="lb" for="password-input">Senha</label>
        <div class="input-control">
          <input v-model="password" type="password" id="password-input" required name="password" class="input" placeholder="Digite sua senha">
        </div>

        <div class="actions">
          <button type="submit" id="create-account-button" class="center">
            Criar conta
          </button>
        </div>

        <br/>

        <div class="actions">
          <p>Já possui conta?
            <router-link class="rl" to="/login">
              Acessar
            </router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import * as firebase from 'firebase'
import httpStatuses from '../utils/httpStatuses.js'
import Account from '../models/Account.js'


export default {
  name: 'create_account',
  data: () => ({
    name:'',
    email:'',
    password:'',
    Account: [],
    httpStatuses
  }),
  methods: {

    createAccount () {

      const database = firebase.firestore()

      if(firebase.auth().currentUser){
        firebase.signOut()
        this.$router.push({ path: '/' })
      }else {
        if (!this.name || !this.email || !this.password) {
          return alert(`Erro ao criar conta, faltando informações!`)
        }
        let email = this.email
        let name = this.name
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)          
          .then(() => {
            let newAccount = new Account({ name, email })
            let docRef = database.collection('users').doc(newAccount.id)
            docRef.set({
              id: newAccount.id,
              agency: newAccount.agency,
              numberAccount: newAccount.numberAccount,
              cpf: newAccount.cpf,
              name: newAccount.name,
              email: newAccount.email,
              balance: newAccount.balance,
              createdAt: newAccount.createdAt,
              userId: firebase.auth().currentUser.uid
            })
            alert('Conta criada com sucesso !')
            this.$router.push({ path: '/' })
          }).catch((error) => {
            alert('Erro ao criar conta. \n\n' + error)
            this.$router.push({ path: '/create' })
          })
      }
    }
 }
}
</script>

<style scoped>
  .createaccount {
    overflow: auto;
    background: url("../assets/fundo.png") no-repeat center center fixed;
    background-color: #333333;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  .createaccount > .content {
    width: 320px;
    margin-top: 60px;
    margin-bottom: 60px;
  }
  .center {
    display: block;
    margin: 0 auto;
  }
  .createaccount-form {
    margin-top: 50px;
  }
  .input-control {
    margin-bottom: 20px;
  }
  .input-control > label {
    display: block;
  }
  .input-control > .input {
    height: 45px;
    width: calc(100% - 30px);
    border-radius: 5px;
    border-width: 0;
    background: #FFF;
    font-family: 'Roboto';
    font-size: 15px;
    padding: 0 25px;
    outline: none;
    margin-top: 10px;
  }
  .input-control > .input:focus {
    background: #F2F2F2;
  }
  .createaccount-form > .actions > button[type="submit"] {
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
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  .createaccount > .content > .createaccount-form > .input-control > label {
    display: none;
  }
  .lb {
    font-family: 'Roboto';
    font-weight: 'bold';
    font-size: 18px;
    color: #FFF;
    height: 18;
    width: 43;
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
