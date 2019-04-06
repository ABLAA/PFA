import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Switch,Redirect,Route ,withRouter} from 'react-router-dom';
import CarouselHome from './CarouselComponent';
import Home from './HomeComponent';

class Main extends React.Component{
constructor(props){
    super(props);
}
render(){
    return(
            <div>
                <Header />
                <Switch>  
                    <Route path='/home' component={()=><Home />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
    );
}
}
export default withRouter(Main);