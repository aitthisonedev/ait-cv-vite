import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCbZI9Kjl4EbGwfdKXz8aNzKX0sABf0qHI",
  authDomain: "web-aitthisone.firebaseapp.com",
  projectId: "web-aitthisone",
  storageBucket: "web-aitthisone.appspot.com",
  messagingSenderId: "368506012822",
  appId: "1:368506012822:web:56bd1df6fa9e5770a02eb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



// addDoc
try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Aitthisone",
    last: "Duangsompheang",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

// GetDoc?
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});



