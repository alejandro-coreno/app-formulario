//Confirguracion inicial de firebase

// Importamos la funcion que inicializara firebase
import { initializeApp } from "firebase/app";

//Permite Conectarnos a la base de datos devuelve un objeto para poder utilizar la bd
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Objeto de configuracion 
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
  appId: process.env.REACT_APP_FIREBASE_APP_ID 
};

/* Configuracion del objeto de firebase
const firebaseConfig = {
  apiKey: "AIzaSyAapBpejYkGdUhKYQ4e3KnkUFzMdoYB8DA",
  authDomain: "app-formulario-90233.firebaseapp.com",
  projectId: "app-formulario-90233",
  storageBucket: "app-formulario-90233.appspot.com",
  messagingSenderId: "1015944047148",
  appId: "1:1015944047148:web:df26b8d1d4555ef247bf89"
};
*/


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Instancia para conectarnos a la base de datos
const db = getFirestore();

// exportamos la variable para poder ocuparla en el proyecto

export default db;