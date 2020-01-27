import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyB72305T76qBMmzL8WaC9WCUJwlhHVXZF8",
  authDomain: "golf-card-game.firebaseapp.com",
  databaseURL: "https://golf-card-game.firebaseio.com",
  projectId: "golf-card-game",
  storageBucket: "golf-card-game.appspot.com",
  messagingSenderId: "53407633152"
  // appId: "1:53407633152:web:54511b435b9c2fefef2de5",
  // measurementId: "G-0KNQ0RMPZ7"
});

export const db = app.database();
export const scoreRef = db.ref('scores');

export const firstScoreRef = db.ref('scores/-LzbcOnDQ_isE4pJ0ylY').toJSON();
