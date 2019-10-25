import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
	apiKey: 'AIzaSyAiCUTX6MgYY7b_eslXQ4Z8gO1c1ijlJuM',
	authDomain: 'evernote-clone-fbf92.firebaseapp.com',
	databaseURL: 'https://evernote-clone-fbf92.firebaseio.com',
	projectId: 'evernote-clone-fbf92',
	storageBucket: 'evernote-clone-fbf92.appspot.com',
	messagingSenderId: '189028839514',
	appId: '1:189028839514:web:7b4ab68422ff3b78f02863'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
