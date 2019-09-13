<template>
  <div class="home">
    <div class="content center">
      <img class="logo" :src="require('../assets/logoL.png')" alt="Logo"/>
      
      <div class="main">
        <h5>Saldo Disponível</h5>
        <h2 class="h">$KA {{balance}}</h2>
      </div>
      
      <form class="home-form" action="">
        <div class="actions-home">
          
          <button type="submit" id="deposit-button" class="center btn-icon btn-icon__deposit" @click="depositPath">
            Depositar
          </button>
        </div>
        <div class="actions-home">
          <button type="submit" id="payment-button" class="center btn-icon btn-icon__payment" @click="payPath">
            Pagar
          </button>
        </div>
        <div class="actions-home">
          <button type="submit" id="transfer-button" class="center btn-icon btn-icon__transfer" @click="transferPath">
            Transferir
          </button>
        </div>
        <div class="actions-home">
          <button type="submit" id="sair-button" class="center btn-icon btn-icon__sair" @click="signOut">
            Sair
          </button>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'
import httpStatuses from '../utils/httpStatuses'

export default {
  name: 'home', 
  data () {
    return {
      balance:'',
      httpStatuses
    }
  },

  methods: {
    show () {
      if(firebase.auth().currentUser) {
        const userId = firebase.auth().currentUser.uid
        const database = firebase.firestore()
        database.collection('users')
        .where('userId', '==', userId).get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            this.balance = doc.data().balance
            return this.balance
          })
        })
        .catch(err => {
          alert(`${httpStatuses.clientError.badRequest} Falha ao buscar saldo! ${err}`)
        })
      }
    },

    depositPath () {
      this.$router.push({ path: '/deposit' })
    },

    payPath () {
      this.$router.push({ path: '/pay' })
    },

    transferPath () {
      this.$router.push({ path: '/transfer' })
    },

    signOut () {
      if(firebase.auth().currentUser) {
        firebase.auth().signOut()
        alert('Deslogado com sucesso!')
        this.$router.push({ path: '/' })
      }
    }

  },

  created () {
    this.show()
  },

  mounted () {
    this.show()
  },

  destroyed () {
    this.show()
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
.btn-icon {
  padding: 10px;
  background-repeat: no-repeat;
  background-position: 10px 50%;
}

.btn-icon__deposit {
  background-image: url('../assets/piggy-bank.png');
}

.btn-icon__payment {
  background-image: url('../assets/pay.png');
}

.btn-icon__transfer {
  background-image: url('../assets/surface1.png');
}

.btn-icon__sair {
  text-align: center;
}


</style>