import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import "./App.css"

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}/>
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;