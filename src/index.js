import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA89k6OVqWaaEWElc8iihn6X-gmcxrVZ3Y",
  authDomain: "javaria-brascom.firebaseapp.com",
  projectId: "javaria-brascom",
  storageBucket: "javaria-brascom.appspot.com",
  messagingSenderId: "438254448360",
  appId: "1:438254448360:web:757416a4bf17138fa1a35d",
  measurementId: "G-37H9EPH5GV"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

