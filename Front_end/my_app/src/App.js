
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Companion from './Components/Companion';

import Enqu_Appoin from './Components/Enqu_Appoin';
import RequestAppointment from './Components/RequestAppointment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/companionCare' element={<Companion/>}/>

        <Route path='/enquiries-and-appointment/:petID' element={<Enqu_Appoin/>}/>
        <Route path='/request-Appointment' element={<RequestAppointment/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
