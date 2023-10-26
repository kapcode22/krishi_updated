import "./App.css";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import About from "./components/About";
import Wager from "./components/Wager";
import Features from "./components/Features";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from "react-router-dom";
import Agrimachinery from "./components/Agrimachinery";
import Agris from "./components/Agris";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/footer";


const fakeAuth={
  isAuthenticated: false,
  authenticate(cb){
    this.isAuthenticated=true
    setTimeout(cb,100)
  },
  signout(cb){
    this.isAuthenticated=false
    setTimeout(cb,100)
  }
}
function PrivateRoute({ children, ...rest}){
  return(
    <Route{...rest}render={()=>{
      return fakeAuth.isAuthenticated===true
      ? children
      :<Redirect to='/login'/>
      }}/> 
   
  )
}


  function App() {
  return (
    <>
     
      <Router>
    
        <div className="App">
       
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
         
            <Route exact path="/about" >
              <About />
            </Route>
            <Route exact path="/Login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute>
             <Route exact path="/features">
              <Features></Features>
             </Route>
           
            <Route
              exact
              path="/job"
              render={() => {
                return (
                  <>
                    <Jobs jobs={jobs} onDelete={onDelete} />
                  </>
                );
              }}
            ></Route>
             </PrivateRoute>
         
            <Route
              exact
              path="/wager"
              render={() => {
                return (
                  <>
                    <Wager addJob={addJob} />
                  </>
                );
              }}
            ></Route>
            <Route
              exact
              path="/mach"
              render={() => {
                return (
                  <>
                    <Agris agris={agris} onDelete={onDelete2} />
                  </>
                );
              }}
            ></Route>
            <Route
              exact
              path="/machines"
              render={() => {
                return (
                  <>
                    <Agrimachinery addAgri={addAgri} />
                  </>
                );
              }}
            ></Route>
          </Switch>
          <Footer/> 
        </div>   
      </Router>
    </>
  );
}

export default App;
