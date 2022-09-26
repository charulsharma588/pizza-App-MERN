import React,{useEffect} from 'react';
import { Container, Row, Col} from "react-bootstrap";
import {Pizza} from "../component/Pizza";
import {useDispatch,useSelector} from 'react-redux';
import {AllPizzas} from '../Actions/pizzaAction';
import {Loader} from '../component/Loader'
import { Error } from '../component/Error';

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
        {loading ?  (<Loader />) : error ? (
        <Error error="error while fetching" />) : 
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
