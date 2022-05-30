import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/App.css'
import NavBar from './components/navbar';
import LandingPage from './components/landingPage';
import DogsList from './components/dogsList';
import DogInfo from './components/dogInfo';
import Login from './components/login';
import Favorites from './components/favorites';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={[<NavBar/>, <LandingPage/>]}/>
        <Route path='/login' exact element={[<NavBar/>, <Login/>]}/>
        <Route path='/dogs' exact element={[<NavBar/>, <DogsList/>]}/>
        <Route path='/favorites' exact element={[<NavBar/>, <Favorites/>]}/>
        <Route path='/dog/:dogId' exact element={[<NavBar/>, <DogInfo/>]}/>
      </Routes>
    </Router>
    
  );
}  

export default App;
