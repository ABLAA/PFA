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
export const setUser=(user)=>({
        type:ActionTypes.SET_USER,
        payload:user
}
);
export const login=(userData)=>(dispatch)=>{




        return axios.post('http://localhost:3000/api/auth',userData)
        .then()
        .then(function (response) {
               
                const token=response.data.token;
                localStorage.setItem('jwToken',token);
                setAuthToken(token);
                dispatch(setUser(jwt.decode(token)));
                console.log(jwt.decode(token))
                
        })
         }

    export const setAdmin=(user)=>({
        type:ActionTypes.SET_ADMIN,
        payload:user
}
);
    export const loginAdmin=(userData,h)=>(dispatch)=>{




        return axios.post('http://localhost:3000/api/admin',userData)
        .then(function (response) {
                const token=response.data.token;
                localStorage.setItem('jwToken',token);
                setAuthToken(token);
                dispatch(setAdmin(jwt.decode(token)));
        h.push('/admin')
        })
               

        
          .catch(function (error) {
            console.log(error);
            h.push('home')
    })}