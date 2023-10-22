import "./App.css";

import Home from "./components/Home";
import Jobs from "./components/Jobs";
import About from "./components/About";
import Wager from "./components/Wager";
import Features from "./components/Features";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Agrimachinery from "./components/Agrimachinery";
import Agris from "./components/Agris";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Detect from "./components/Detect";
import Footer from "./components/footer";
import Menu from "./components/Menu";


function App() {
  // const [selectedUser, setSelectedUser] = useState(null);
  // const handleAcceptClick = (item) => {
  //   setSelectedUser(item);
  // };
  // setSelectedUser={setSelectedUser} onhandleAcceptClick={handleAcceptClick}
  // selectedUser={selectedUser}
  
  return (
    <>
      <Router>
        <div className="App">
         
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/features">
              <Features></Features>
            </Route>
            <Route exact path="/job" render={() => { return (
                  <> <Jobs/> </>
                );}}>
            </Route>
            <Route exact path="/wager" render={() => {   return (
                  <> <Wager/>  </>
                );}}>
            </Route>
            <Route exact path="/mach" render={() => {   return (
                  <>  <Agris  /> </>
                );}} >
            </Route>
            <Route exact path="/machines" render={() => {   return (
                  <> <Agrimachinery  />  </>
                );}}>
            </Route>
            <Route exact path="/menu">
              <Menu  />
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <Signup></Signup>
            </Route>
            <Route exact path="/Detect">
              <Detect></Detect>
            </Route>
             
         
          </Switch>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
