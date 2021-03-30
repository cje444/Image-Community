import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyCrVL2_0pyv3gge5ws441qrbawNld5rdKM",
    authDomain: "image-community-cje.firebaseapp.com",
    projectId: "image-community-cje",
    storageBucket: "image-community-cje.appspot.com",
    messagingSenderId: "219183499130",
    appId: "1:219183499130:web:2fbac188f8b334482ef8c3",
    measurementId: "G-BLFQF4F81H"

}

//initializeApp은 다른 애들보다 위에 있어야함!!! 
firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();




export {auth, apiKey, firestore, storage};