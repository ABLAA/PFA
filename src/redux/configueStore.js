import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import {Cars} from './cars';
import {Auth} from './auth';

import thunk from 'redux-thunk';



export const ConfigureStore=()=>{
    const store=createStore(
        combineReducers({
            
            cars:Cars,
            auth:Auth
        }),
        compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
    );
    return store;
}