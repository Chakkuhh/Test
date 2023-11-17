import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Create from './Create';
import Update from './Update';
import Register from './Register';
import Login from './Login';
import Log from './Log';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/create' element={<Create/>}/>
    <Route path='/update/:Name' element={<Update/>}/>
    <Route path='/reg' element={<Register/>}/>
    <Route path='/log' element={<Login/>}/>
    <Route path='/lo/:email' element={<Log/>}/>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

