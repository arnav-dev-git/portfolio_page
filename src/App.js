import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from "./Home";
import Service from "./Service";
import Contact from "./contact";
import About from "./About";
import NotFound from "./NotFound";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
