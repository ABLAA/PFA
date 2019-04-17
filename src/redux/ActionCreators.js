import * as ActionTypes from './ActionTypes';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory({forceRefresh:true});
export const addCars=()=>({
        type:ActionTypes.ADD_CARS
        

})
export const userSignup=(userData)=>(dispatch)=>{




    return axios.post('http://localhost:3000/api/users',userData)
    .then(function (response) {
       history.push('/home')
      })
      .catch(function (error) {
        console.log(error);
})}


export const setAuthToken=(token)=>{
        if(token){
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; 
console.log(token)
        }
        else delete axios.defaults.headers.common["Authorization"];
}

export const login=(userData)=>(dispatch)=>{




        return axios.post('http://localhost:3000/api/auth',userData)
        .then(function (response) {
                const token=response.data.token;
                localStorage.setItem('jwToken',token);
                setAuthToken(token);
console.log(jwt.decode(token))
        })
          .catch(function (error) {
            console.log(error);
    })}