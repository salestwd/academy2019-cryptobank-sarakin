<template>
  <div class="home">
    <div class="content center">
      <img class="logo" :src="require('../assets/logoL.png')" alt="Logo"/>
      
      <div class="main">
          <div class="header">   
            <label class="dep" for="efetua">
            <img class="bac" :src="require('../assets/back.png')" alt="Logo" @click="homePath"/> Transferir</label>              
          </div>

         <div class="main-2">

            <label class="inf" for="Informe">Informe a quantia desejada</label>
            <div class="val">
                <label for="$KA">
                    $KA <input v-model.lazy="number" type="value" id="value-input" 
                required name="value" class="input" inputmode="decimal"> 
                </label>
            </div>
            <label class="inf2" for="Informe">Digite um valor entre $KA 10,00 e $KA 15.00,00</label>
            <div class="main-3">
                <label class="inf" for="sendTo">Para quem você deseja enviar?</label>
                  <input v-model="email" type="email" id="email-input" 
                  required name="email" class="input-email" inputmode="email" placeholder="Insira um email"> 
                <div class="actions-home">
                    <button type="submit" id="create-account-button" class="btn" @click="transfer">
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
import firebase from 'firebase'
import httpStatuses from '../utils/httpStatuses'

export default {
  name: 'home',
    data() {
        return {
          httpStatuses,
          email:'',
          number:'',
          emails: [],
          flag: false
        }
    },

    methods: {

      transfer () {
          const database = firebase.firestore()
          const id = firebase.auth().currentUser.uid

          database.collection('users').get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              if(doc.data().email){
                this.emails.push(doc.data().email)
              }
            })
          })

          database.collection('users')
          .where('userId', '==', id).get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              const { balance } = doc.data()
              if(balance <= 0 || this.number > balance) {
                alert('Saldo insuficiente para depósito!')
                this.$router.push({ path: '/home' })
              } else {
                  if(this.number >= 10 && this.number <= 15000){
                    //Buscando conta destino
                    
                    this.emails.forEach(element => {
                      if(this.email == element) {
                        this.flag = true
                      }
                    })

                    if(this.flag) {
                      database.collection('users')
                      .where('email', '==', this.email).get()
                      .then(snapshot => {
                        snapshot.forEach(doc => {
                            this.flag = true
                            const increaseTransfer = firebase.firestore.FieldValue.increment(+this.number)
                            const docIdD = doc.id
                            const docD = database.collection('users').doc(docIdD)
                            docD.update({balance: increaseTransfer})
                        })
                      })
                      const decreaseBy = firebase.firestore.FieldValue.increment(-this.number)
                      const docId = doc.id
                      const docC = database.collection('users').doc(docId)
                      docC.update({balance: decreaseBy})
                      alert('Transferência realizada com Sucesso!')
                      this.$router.push({ path: '/home' })
                    } else {
                      alert(`Email não encontrado:  ${this.email}`)
                      this.$router.push({ path: '/home' })
                    }

                  }else {
                    alert(`O valor do pagamento deve estar entre $KA 10,00 and $KA 15.000,00`)
                    this.$router.push({ path: '/home' })
                  }
              }
            })
          })
        },
      methodToRunOnSelect() {
        this.arrayOfObjects = this.getAllEmail();
      },

      homePath () {
        this.$router.push({ path: '/home' })
      },

      getAllEmail () {
        const database = firebase.firestore()
            const shouldReturn = email => {
              return email != firebase.auth().currentUser.email
            }

            const filterSnapshot = snapshot => {
              return snapshot.filter(doc => {
                const { email } = doc.data()
                return shouldReturn(email)
              })
            }

            return new Promise((resolve, reject) => {
              if (firebase.auth().currentUser) {
                reject(new Error('FirebaseAuthError'))
              }

              database
                .collection('users')
                .get()
                .then(snapshot => {
                  resolve(filterSnapshot(snapshot))
                })
                .catch(err => {
                  reject(err)
                })
            })
          },
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
    cursor: pointer;
}


</style>