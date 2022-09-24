import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {AiFillMinusCircle} from 'react-icons/ai'
import {AiFillPlusCircle} from 'react-icons/ai';
import {AiFillDelete} from 'react-icons/ai';
import { addToCart,deleteFromCart } from '../Actions/cartAction';

export const CartScreen = () => {
const state = useSelector((state)=>state.CartReducer);
const cartItems = state.cartItems;
const dispatch=useDispatch();
const subTotal =cartItems.reduce((x,item)=>x+item.price,0)

  return (
    <>
    <Container style={{ marginTop: "30px" }}>
        <Row>
            <Col md={6}><h3>Cart Items</h3>
            <Row>
                {cartItems.map(item=>
                <>
                    <Col md={7}>
                        <h6>{item.name}[{item.varient}]</h6>
                        <h6>Price: {item.quantity} x {item.prices[0][item.varient]}={item.price}</h6>
                        <h6>Quantity: &nbsp;
                            <AiFillMinusCircle className='text-danger' style={{cursor:"pointer"}}
                            onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.varient))}}/> &nbsp;
                            {item.quantity} &nbsp;
                            <AiFillPlusCircle className='text-success'
                               onClick={()=>{dispatch(addToCart(item,item.quantity+1,item.varient))}} style={{cursor:"pointer"}}/></h6>
                    </Col>
                    <Col md={5}>
                        <img   alt={item.name} src={item.image} style={{width:'80px',height:'80px'}}/>
                        <AiFillDelete className='text-danger' style={{cursor:"pointer", marginLeft:'20px',marginTop:'50px'}} onClick={()=>dispatch(deleteFromCart(item))}/>
                    </Col>
                   
                    
                    </>
                    )
                }
            </Row>
            </Col>
            <Col md={4}><h3>Payment Info</h3>
            <h5>Sub Total</h5>
            <h5>RS {subTotal} /-</h5>
            <Button >Checkout</Button>
            </Col>
        </Row>
    </Container>
    </>
  )
}
