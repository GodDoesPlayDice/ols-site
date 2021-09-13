import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import components
import MyAppBar from "./components/MyAppBar";





const firebaseConfig = {
  apiKey: "AIzaSyDPYh8m67ImOIX83-ZkQKuC1nhS62bR-HQ",
  authDomain: "ordinary-least-squares.firebaseapp.com",
  projectId: "ordinary-least-squares",
  storageBucket: "ordinary-least-squares.appspot.com",
  messagingSenderId: "802236112566",
  appId: "1:802236112566:web:9beb84162128795909d017",
  measurementId: "G-CF2YC9JKN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <MyAppBar></MyAppBar>
    </div>
  );
}

export default App;
