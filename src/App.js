import './App.css';

// import firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// import react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";

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

export default function App() {
  return (
    <Router>
      <MyAppBar
      >
      </MyAppBar>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/games">
        </Route>
        <Route path="/about">
        </Route>
        <Route path="/support">
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
