import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/Login.jsx';
import Signup from './component/Signup.jsx';
import Home from "./component/Home.jsx";
import Add from "./component/Add.jsx";
import Yourbooks from "./component/Yourbooks.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Login/>}/>
        <Route path='/signup'element={<Signup/>}/>
        <Route path='/Home'element={<Home/>}/>
        <Route path='/Add'element={<Add/>}/>
        <Route path='/Yourbooks'element={<Yourbooks/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
