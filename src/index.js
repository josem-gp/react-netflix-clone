import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import App from "./App";
import { FirebaseContext } from "./context/firebase";

//import { seedDatabase } from "./seed";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "netflix-c8ae9.firebaseapp.com",
  databaseURL: "https://netflix-c8ae9.firebaseio.com",
  projectId: "netflix-c8ae9",
  storageBucket: "netflix-c8ae9.appspot.com",
  messagingSenderId: "590575805931",
  appId: "1:590575805931:web:f809092b6cd55306fa25ae",
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
