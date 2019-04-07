import React from 'react';
import CarouselHome from './CarouselComponent';
import Category from './CategoryComponent';



class Home extends React.Component{
    
    render(){
        return(
            <div>
                
            <CarouselHome />
            <Category />
            </div>
        );
    }
}
export default Home;