//Confirguracion inicial de firebase

// Importamos la funcion que inicializara firebase
import { initializeApp } from "firebase/app";

//Permite Conectarnos a la base de datos devuelve un objeto para poder utilizar la bd
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Objeto de configuracion

/*
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};
 */

//Configuracion del objeto de firebase
const firebaseConfig = {
  apiKey: "AIzaSyAapBpejYkGdUhKYQ4e3KnkUFzMdoYB8DA",
  authDomain: "app-formulario-90233.firebaseapp.com",
  projectId: "app-formulario-90233",
  storageBucket: "app-formulario-90233.appspot.com",
  messagingSenderId: "1015944047148",
  appId: "1:1015944047148:web:df26b8d1d4555ef247bf89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Instancia para conectarnos a la base de datos
const db = getFirestore();

// exportamos la variable para poder ocuparla en el proyecto

export default db;
