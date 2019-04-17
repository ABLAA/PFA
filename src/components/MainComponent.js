import React from "react";
import HeaderHeader from "./AdminHeader";
import Footer from "./client/Footer";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import Home from "./HomeComponent";
import Sign from "./client/SignComponent";
import Login from "./LoginComponent";
import Model from "./client/ModelComponent";
import About from "./client/AboutUsComponent";
import Contact from "./client/ContactUsComponent";
import Category from "./CategoryComponent";
import {CARS} from '../shared/cars';
import {connect} from 'react-redux';
import { addCars,userSignup ,login} from "../redux/ActionCreators";
import Header from './Header'
import Admin from './AdminComponent';
const mapStateToProps=(state)=>{
  return(
    {
    cars:state.cars,
    
    }
  )
}
const  mapDispatchToProps=(dispatch)=>({
  addCars: () => { dispatch(addCars())},
  userSignup:(user)=>{dispatch(userSignup(user))},
  login:(data)=>{dispatch(login(data))}
  


});
class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={cars:CARS};
  }
  componentDidMount() {
    this.props.addCars();
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
          <Route path="/signup" component={() => <Sign userSignup={this.props.userSignup} />} />
          <Route path="/login" component={() => <Login login={this.props.login} />} />
          <Route path="/model/:cath" component={ModelWithCath} />
          <Route path="/model" component={()=><Model cars={this.props.cars} />} />

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
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));