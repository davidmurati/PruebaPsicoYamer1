import { useState, useEffect  } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Menu from "./Component/Menu/Menu";
import Test1 from "./Component/Test1/Test1";
import Test2 from "./Component/Test2/Test2";


function App() {

  
  return (
    <div className="container">
    <Router>
     <Switch>
        <Route exact path="/">
          <Menu />
        </Route>
        <Route exact path="/Test1">
          <Test1 />
        </Route>
        <Route exact path="/Test2">
          <Test2/>
        </Route>
     </Switch>
     </Router>
    </div>
  )
}

export default App
