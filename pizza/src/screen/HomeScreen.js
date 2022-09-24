import React,{useEffect} from 'react';
import { Container, Row, Col} from "react-bootstrap";
import {Pizza} from "../component/Pizza";
import {useDispatch,useSelector} from 'react-redux';
import {AllPizzas} from '../Actions/pizzaAction'

export const HomeScreen = () => {
    const dispatch = useDispatch();
    const pizzaState=useSelector(state=>state.getAllPizzaReducers);
    const {loading,pizzas,error} = pizzaState 
    useEffect(() => {
      dispatch(AllPizzas());
    }, [dispatch])
    
  return (
    <>
    <Container style={{ marginTop: "50px" }}>
        {loading ?  (<h1>loading ....</h1>) : error ? (<h1>error</h1>) : 
                <Row>
                {pizzas.map(pizza=>{
                   return <Col md={4}>
                        <Pizza pizza={pizza}/>
                    </Col>
                })}
            </Row>
        }

    </Container>
    </>
  )
}
