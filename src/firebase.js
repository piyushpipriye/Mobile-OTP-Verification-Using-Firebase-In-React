import firebase from 'firebase'

const config={
    apiKey: "AIzaSyCJZ1op7wOvAOF63gdnxz2sk4MDnGE_LGI",
    authDomain: "fir-react-e3c0e.firebaseapp.com",
    projectId: "fir-react-e3c0e",
    storageBucket: "fir-react-e3c0e.appspot.com",
    messagingSenderId: "747690427678",
    appId: "1:747690427678:web:b71318d04358af5cf5f50f"
}
firebase.initializeApp(config);
export default firebase