import { environment as common } from './environment';

export const environment = {
  ...common,
  production: true,
  firebase: {
    apiKey: "AIzaSyCNbo8SWkYpw5_ziBEPUnJe3HE0bIVwdyA",
    authDomain: "angularfire-quickstart-214b4.firebaseapp.com",
    databaseURL: "https://angularfire-quickstart-214b4.firebaseio.com",
    projectId: "angularfire-quickstart-214b4",
    storageBucket: "angularfire-quickstart-214b4.appspot.com",
    messagingSenderId: "853302954186",
    appId: "1:853302954186:web:a11f49195f1a232ad74c33"
  }
};
