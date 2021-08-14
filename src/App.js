import React, { useState } from 'react';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import FirstFloor from './Pages/FirstFloor/FirstFloor';
import SecondFloor from './Pages/SecondFloor/SecondFloor';
import ThirdFloor from './Pages/ThirdFloor/ThirdFloor';
import FourthFloor from './Pages/FourthFloor/FourthFloor';
import FifthFloor from './Pages/FifthFloor/FifthFloor';

import Login from './components/Login/Login';
import AdminLogin from './Pages/Admin/Login/AdminLogin';


function App() {

  const [login,setLogin] = useState(()=>{
    const localLogin = localStorage.getItem('login');
    return localLogin? localLogin : false;
  });

  return login? (
    <div>
      <AwesomeSlider fillParent={true} animation='cubeAnimation'>
        <div><FirstFloor/></div>
        <div><SecondFloor/></div>
        <div><ThirdFloor/></div>
        <div><FourthFloor/></div>
        <div><FifthFloor/></div>
      </AwesomeSlider>
      {/* <Login/> */}
    </div>
  ):(
    // <Login setLogin={setLogin}/>
    <AdminLogin/>
  );
}

export default App;

