import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {Button} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {placeOredr} from '../Actions/orderAction'

export const Checkout = ({subtotal}) => {
    const dispatch = useDispatch();
    const tokenHandler=(token)=>{
        console.log(token)
        dispatch(placeOredr(token,subtotal))
    }
  return (
    <>
    <StripeCheckout 
    amount={subtotal*100}
    shippingAddress
    billingAddress
    currency='inr'
    description="requir"
    token={tokenHandler}
    stripeKey="pk_test_51LlsxzSGIZRkWd6KI2au5WyjtJ2vUyeRN0PQ9S1Lub2oQuwzXzPj3HWsFilXLIloiHbERuJIMYKbKipMYUyIWL9L00wAPyI7hf"
    >
        <Button>Pay Now</Button>
    </StripeCheckout>
    </>
  )
}
