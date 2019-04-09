import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import Home from "./HomeComponent";
import Sign from "./SignComponent";
import Login from "./LoginComponent";
import Model from "./ModelComponent";
import About from "./AboutUsComponent";
import Contact from "./ContactUsComponent";
import Category from "./CategoryComponent";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={() => <Home />} />
          <Route path="/signup" component={() => <Sign />} />
          <Route path="/login" component={() => <Login />} />
          <Route path="/model" component={() => <Model />} />
          <Route path="/aboutus" component={() => <About />} />
          <Route path="/contactus" component={() => <Contact />} />
          <Route path="/category" component={() => <Category />} />

          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(Main);
