import axios from 'axios';
import { CartData } from '../Reducers/cartReducer';

export const placeOredr =(token,subtotal)=> async (dispatch,getState)=>{
dispatch({type:'PLCAE_ORDER_REQUEST'});
const currentUser = getState().userLoginReducer.curretUser;
const cartItems = CartData.cartItems;
console.log( getState().userLoginReducer,CartData);
try{
 const response = await axios.post('/api/orders/plcaorder',{token,subtotal,currentUser,cartItems});
 dispatch({type:'PLACE_ORDER_SUCCESS'});
 console.log(response);
}catch(error){
    dispatch({type:'PLACE_ORDER_FAIL'});
    console.log(error)
}
}