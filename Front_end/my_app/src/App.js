
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
