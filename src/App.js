import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Protected";
import { LanguageProvider } from './LanguageContext'; // Import the LanguageProvider
import LanguageSelector from './LanguageSelector'; // Import the LanguageSelector
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Weather from "./components/Weather";
import Features from "./components/Features";
import Menu from "./components/Menu";
import Profile from "./components/profile";
import Detect from "./components/Detect";
import Jobs from "./components/Jobs";
import Wager from "./components/Wager";
import Agris from "./components/Agris";
import Agrimachinery from "./components/Agrimachinery";
import Footer from "./components/footer";

function App() {
  return (
    <LanguageProvider> {/* Wrap your entire app with LanguageProvider */}
      <Router>
        <div className="App">
          <LanguageSelector /> {/* Include the LanguageSelector */}
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            
            {/* Use PrivateRoute for protected routes */}
            <PrivateRoute>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/weather" component={Weather} />
              <Route exact path="/features" component={Features} />
              <Route exact path="/menu" component={Menu} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/detect" component={Detect} />
              <Route exact path="/job" component={Jobs} />
              <Route exact path="/wager" component={Wager} />
              <Route exact path="/mach" component={Agris} />
              <Route exact path="/machines" component={Agrimachinery} />
            </PrivateRoute>
          </Switch>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
