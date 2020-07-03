import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyALuFSQbloVUy681D_ls9d7U64nuSwfBhI",
    authDomain: "crwm-db-e4b8f.firebaseapp.com",
    databaseURL: "https://crwm-db-e4b8f.firebaseio.com",
    projectId: "crwm-db-e4b8f",
    storageBucket: "crwm-db-e4b8f.appspot.com",
    messagingSenderId: "644961152704",
    appId: "1:644961152704:web:71f6835d3d55e30c018725",
    measurementId: "G-ZM8Q54GJ7J"
  }

firebase.initializeApp(config)

export const createUserProfileDocument = async(userAuth,additionalData) =>{
  if(!userAuth) return
  const userRef = firestone.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()

  if(!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try{
      await userRef.set({
        displayName, email, createdAt, ...additionalData
      })
    }
    catch(error){
      console.log('erros creating user', error.message)
    }
  }
  return userRef
}

export const auth = firebase.auth()
export const firestone = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({promt : 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase