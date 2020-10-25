import React from 'react';
import { Route, useLocation, Switch } from "react-router-dom";
import { AnimatePresence } from 'framer-motion'
import Navbar from './Components/Navbar/Navbar'
import Slider from './Components/Slider/Slider'
import Footer from './Components/Footer/Footer'
import Reservas from './Components/Reservas/Reservas';
import Contacto from './Components/Contacto/Contacto';
import Historia from './Components/Historia/Historia';
import './App.css'


function App() {
  const location = useLocation();
  
  return (
    <>
    <div className='App'>
      < Navbar />
      <AnimatePresence exitBeforeEnter> 
        <Switch location={location} key={location.pathname} >
          <Route exact path="/" component={Slider}/>
          <Route  path="/Historia" component={Historia}/>
          <Route  path="/Reservas" component={Reservas}/>
          <Route  path="/Contacto" component={Contacto}/>
        </Switch>
      </AnimatePresence>
    </div >
  </>
  )
}

export default App;
