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
import {CARS} from '../shared/cars';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={cars:CARS};
  }
  
  render() {
    const ModelWithCath = ({match}) => {
      return(
          <Model cars={this.state.cars.filter((car) => car.categorie === match.params.cath) } 
              cathegory={match.params.cath}

            
            />
      );
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={() => <Home />} />
          <Route path="/signup" component={() => <Sign />} />
          <Route path="/login" component={() => <Login />} />
          <Route path="/model/:cath" component={ModelWithCath} />
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
