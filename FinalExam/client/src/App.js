import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';
import PetForm from './components/PetForm';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route element = {<Main/>} path = '/' default/>
          <Route element = {<Detail/>} path = '/detail/:id' />
          <Route element = {<Update/>} path = '/edit/:id' /> 
          <Route element = {<PetForm/>} path = '/add' />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
