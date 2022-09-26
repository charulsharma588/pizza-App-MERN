import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from '@redux-devtools/extension';
import {getAllPizzaReducers} from './Reducers/pizzaReducers';
import { CartData } from './Reducers/cartReducer';
import {userRegisterReducer} from './Reducers/userReducer';
import {userLoginReducer} from './Reducers/userReducer';
import {placeOrderReducer} from './Reducers/orderReducer'

const rootReducer = combineReducers({getAllPizzaReducers:getAllPizzaReducers,
    CartReducer:CartData,
    userRegisterReducer:userRegisterReducer,
    userLoginReducer:userLoginReducer,
    placeOrderReducer:placeOrderReducer
});
const cartItems = localStorage.getItem('cartData') ? JSON.parse(localStorage.getItem('cartData')) : [];
const userResult = localStorage.getItem('CurrentUser') ? JSON.parse(localStorage.getItem('CurrentUser')) : {};
console.log(cartItems)
const initialState={
    CartReducer:{
    cartItems:cartItems
    },
    userLoginReducer:userResult

}

const middleware = [thunk]

const store= createStore(rootReducer, initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;