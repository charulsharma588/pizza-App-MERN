import React,{useState} from 'react';
import {Form,Container,Button} from 'react-bootstrap';
import {useDispatch,useSelector } from 'react-redux';
import {registerUser} from '../Actions/userAction';
import { Error } from '../component/Error';
import { Loader } from '../component/Loader';
import { Success } from '../component/Success';


export const Register = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [cpassword,setCPassword] = useState('');
    const result = useSelector(state=>state.userRegisterReducer);
    const {error,success,loading} = result;
    const dispatch = useDispatch();
   
    const registerHandler = ()=>{
        if(password!==cpassword){
            alert('password do not match')
        }else{
            const user ={name,email,password,cpassword}
            console.log(user)
            setName('');
            setEmail('');
            setPassword('');
            setCPassword('');
            dispatch(registerUser(user))
        }
    }
  return (
   <>
   <Container style={{marginTop:"50px"}}>
     <Form>
        {loading && <Loader />}
        {success && <Success sucess="registered succesfully"/>}
        {error && <Error error="registration failed" />}
        <h1>Registration</h1>
        
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
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
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" value={cpassword} onChange={(e)=>setCPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary"  onClick={registerHandler}>
       Register
      </Button>
    </Form>
    </Container>
   </>
  )
}
