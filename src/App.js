import { useState } from 'react';
import './App.css';

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { Component }  from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const[mode,setmode]= useState('light');//weather dark mode is enabled or not 

          const toggleMode=()=>{
        if (mode==='light'){
        setmode('dark');
        document.body.style.backgroundColor='#301652';
        }
        else{
          setmode('light');
          document.body.style.backgroundColor='white';
        }
          }
  return (
    <>
    <Router>
      <Navbar title ="TEXTUTILS" about="about" item="Home" mode={mode} toggleMode= {toggleMode}/>
      
      <div className="container">
          
          <Switch >

              
             <Route exact path="/">
              <TextForm title ="Enter your text here"  mode={mode} />
              </Route>
              
              <Route exact path="/about">
              <About />
              </Route>
              
          
          </Switch>
       
      </div>
    </Router>
    </>
   
  );
}

export default App;
