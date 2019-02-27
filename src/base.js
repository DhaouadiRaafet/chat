import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAUHwwk7V69qdbOmQVsUCYqYfs9QDDPEy8",
    authDomain: "chat-3056d.firebaseapp.com",
    databaseURL: "https://chat-3056d.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
