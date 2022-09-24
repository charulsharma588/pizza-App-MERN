import axios from 'axios';

export const AllPizzas =()=>async (dispatch)=>{
dispatch({type:'GET_PIZZAS_REQUEST'})
//'http://localhost:8080
try {
    const res = await axios.get('api/pizzas/getAllPizzas');
    console.log(res);
    dispatch({type:'GET_PIZZAS_SUCCESS', payload:res.data})
} catch (error) {
    dispatch({type:'GET_PIZZAS_FAIL',payload:error})
}
}