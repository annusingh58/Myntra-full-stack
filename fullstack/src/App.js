import logo from './logo.svg';

import './App.css';
import {Routes,Route} from 'react-router-dom';
import Register from './Component/Register';
import Login from './Component/Login';
import MyntraHome from './Component/MyntraHome';
import Multiplepage from './Component/Multiplepage';
import Single from './Component/Single';
import Cart from './Component/Cart';




function App() {
  return (
<>   
  <Routes>
    <Route exact path='/register' element={<Register />}/>
    <Route exact path='/login' element={<Login />}/>
    <Route exact path ='/myntrahome' element={<MyntraHome />}/>
    <Route exact path='/multiplepage' element={<Multiplepage/>}/>
    <Route exact path='/single/:id'element={<Single/>}/>
    <Route exact path='/cart' element={<Cart/>}/>

    </Routes>      
      
    </>
  );
}

export default App;
