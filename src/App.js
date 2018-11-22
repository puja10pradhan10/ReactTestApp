import React from 'react';
// import Header from "../src/layout/header.js";
// import Footer from "../src/layout/footer.js";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "../src/content/Home";
import Stuff from "../src/content/Stuff";
import Contact from "../src/content/Contact";
import Api from "../src/content/api"
import "./index.css";

class App extends React.Component {
  render() {
    return (
      // <div>
      //   <Header></Header>
      //   <Footer />
      // </div>

      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/Home">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/api">API</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/home" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
            <Route path="/api" component={Api}></Route>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
