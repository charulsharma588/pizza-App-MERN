import store from "../store"


export const addToCart=(pizza,quantity,varient)=> (dispatch,getState)=>{
  var cartItem={
    name:pizza.name,
    _id:pizza._id,
    varient:varient,
    quantity:quantity,
    image:pizza.image,
    prices:pizza.prices,
    price:pizza.prices[0][varient]*quantity,
  }

  if(cartItem.quantity > 10){
    alert('You can only add 10 items')
  }
  else{
    if(cartItem.quantity<1){
        dispatch({type:'DELETE_FROM_CART',payload:cartItem})
    }else{
        dispatch({type:'ADD_TO_CART',payload:cartItem})
        localStorage.setItem('cartData',JSON.stringify(getState().CartReducer.cartItems))
    }

  }

}

export const deleteFromCart=(pizza)=>(dispatch,getState)=>{
dispatch({type:'DELETE_FROM_CART',payload:pizza})
const cartItems = getState().CartReducer.cartItems;
localStorage.setItem('cartData',JSON.stringify(cartItems))
}