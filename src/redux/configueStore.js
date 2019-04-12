import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Cars} from './cars';
import thunk from 'redux-thunk';



export const ConfigureStore=()=>{
    const store=createStore(
        combineReducers({
            
            cars:Cars
        }),
        applyMiddleware(thunk)
    );
    return store;
}