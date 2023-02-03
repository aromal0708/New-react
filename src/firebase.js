import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIh1_uR0WI2dUhXf69IvvwyUeXWRN5vnM",
  authDomain: "chat-a55a5.firebaseapp.com",
  projectId: "chat-a55a5",
  storageBucket: "chat-a55a5.appspot.com",
  messagingSenderId: "625299346901",
  appId: "1:625299346901:web:d5506145d43cc0024dd95c",
  measurementId: "G-BDPX6BQZXX"
};


export const app = initializeApp(firebaseConfig);

export const auth=getAuth()