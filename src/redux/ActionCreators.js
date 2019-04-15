import * as ActionTypes from './ActionTypes';
import axios from 'axios';
import React from 'react';
import {push} from 'react-router-redux'
import createHistory from 'history/createHashHistory'
import {Redirect} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory({forceRefresh:true});
export const addCars=()=>({
        type:ActionTypes.ADD_CARS
        

})
export const userSignup=(userData)=>(dispatch)=>{




    return axios.post('http://localhost:3000/api/users',userData)
    .then(function (response) {
        history.push('/home');

      })
      .catch(function (error) {
        console.log(error);
})}