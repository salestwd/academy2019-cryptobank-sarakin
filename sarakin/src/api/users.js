// const { Account } = require('../models')
const firebase = require("firebase")
require("firebase/auth")
require("firebase/database")

const config = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID
  }

firebase.initializeApp(config)

const database = firebase.firestore()

  const showBalance = () => {

    const filterSnapshot = snapshot => {
        return snapshot.filter(doc => {
          const { balance } = doc.data()
          return balance
        })
    }

    return new Promise((resolve, reject) => {
        if (firebase.auth().currentUser) {
          reject(new Error('FirebaseAuthError'))
        }
        const userId = firebase.auth().currentUser.uid
        database
          .collection('users')
          .where('userId', '==', userId)
          .get()
          .then(snapshot => {
            resolve(filterSnapshot(snapshot))
          })
          .catch(err => {
            reject(err)
          })
      })

  }

  const  getAllEmail = () => {
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
    }


module.exports = { getAllEmail, showBalance }