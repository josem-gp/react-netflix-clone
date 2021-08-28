import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import App from "./App";
import { FirebaseContext } from "./context/firebase";

import { seedDatabase } from "./seed";

const config = {
  apiKey: "AIzaSyAxXkyUlpz013wv2Rv0JUB1WnJ5G-aYRqo",
  authDomain: "netflix-clone-a94a9.firebaseapp.com",
  projectId: "netflix-clone-a94a9",
  storageBucket: "netflix-clone-a94a9.appspot.com",
  messagingSenderId: "71145020139",
  appId: "1:71145020139:web:dfdf3d61034653e9e3bcae",
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
