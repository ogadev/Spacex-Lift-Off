import React from "react";
import Main from "./Main"
import Header from "./Header"
import Upcoming from './Upcoming'
import Previous from './Previous'
import Footer from "./Footer"

import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />  
       <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route className="card-page-container" path="/upcoming">
            <Upcoming />
          </Route>
          <Route className="card-page-container" path="/previous">
            <Previous />
          </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
