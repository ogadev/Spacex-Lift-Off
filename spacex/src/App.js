import React from "react";
import Main from "./Main"
import Header from "./Header"

import Upcoming from './Upcoming'
import Previous from './Previous'
import About from './About'
import Footer from "./Footer"

import {Switch, Route, Router} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />  
       <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/upcoming">
            <Upcoming />
          </Route>
          <Route path="/previous">
            <Previous />
          </Route>
          <Route path="/about">
            <About />
          </Route>
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
