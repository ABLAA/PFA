import * as ActionTypes from './ActionTypes';
import axios from 'axios';


export const addCars=()=>({
        type:ActionTypes.ADD_CARS
        

})
export const userSignup=(userData)=>(dispatch)=>{




    return axios.post('http://localhost:3000/api/users',userData)
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
})}