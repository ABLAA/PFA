import React from 'react';
import Header from './Header';
import Footer from './Footer';
class Main extends React.Component{
constructor(props){
    super(props);
}
render(){
    return(
            <div>
                <Header />
                <Footer />
            </div>
    );
}
}
export default Main;