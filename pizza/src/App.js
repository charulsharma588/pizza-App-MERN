
// import './App.css'/;
import TopBar from './component/TopBar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import  {About}  from './component/About';
import { Contact } from './component/Contact';
import { Policy } from './component/Policy';
import { Header } from './component/Header';
import { HomeScreen } from './screen/HomeScreen';
import {CartScreen } from './screen/CartScreen';
import {Register } from './screen/Register';
import{Login} from './screen/Login';

function App() {
  return (
   <BrowserRouter>
   <TopBar />
  <Header />
  {/* <HomeScreen /> */}
   <Routes>
   <Route path='login' element={<Login />}  exact />
   <Route path='register' element={<Register />}  exact />
   <Route path='cart' element={<CartScreen />}  exact />
    <Route path='about' element={<About/>}  exact />

    <Route path='contact' element={<Contact/>}  exact />

    <Route path='policies' element={<Policy/>}  exact />
    <Route path='' element={<HomeScreen/>}  exact />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
