import axios from "axios"


export const registerUser = (user)=>async (dispatch)=>{
     dispatch({type:'USER_REGISTER_REQUEST'})
     try{
const res =axios.post('/api/user/register',user)
dispatch({type:'USER_REGISTER_SUCCESS'})
     }catch(error){
  console.error(error.message)
  dispatch({type:'USER_REGISTER_FAIL',payload:error})
     }
}

export const userLogin = (user) => async (dispatch)=>{
    dispatch({type:'USER_LOGIN_REQUEST'});
  try{
const result = await axios.post('/api/user/login',user)
dispatch({type:'USER_LOGIN_SUCCESS',payload:result.data})
localStorage.setItem('CurrentUser',JSON.stringify(result.data))
window.location.href = "/";
  }catch(error){
    dispatch({type:'USER_LOGIN_FAIL',payload:error})
  }
}