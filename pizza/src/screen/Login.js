import React,{useState,useEffect} from 'react';
import  {Form,Button,Container} from 'react-bootstrap';
import {userLogin} from '../Actions/userAction';
import {useDispatch,useSelector} from 'react-redux';
import { Loader } from '../component/Loader';
import { Success } from '../component/Success';
import { Error } from '../component/Error';


export const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    const result = useSelector(state=>state.userLoginReducer);
    const {error,success,loading} = result;
    useEffect(() => {
    if(localStorage.getItem('CurrentUser')){
        window.location.href ='/'
    }
    
    },[])

    const handleClick = ()=>{
        const user  = {email, password}
        dispatch(userLogin(user))
    }

  return (
   <>
   <Container>
      <Form>
        {loading && <Loader />}
        {success && <Success sucess="logged in  succesfully"/>}
        {error && <Error error="login failed" />}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button  variant="primary" onClick={handleClick}>
        Login
      </Button>
    </Form>
    </Container> 
   </>
  )
}
