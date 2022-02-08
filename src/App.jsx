import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Heading from './components/Heading';
import FoodInfo from './pages/FoodInfo';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Heading/>
      <Routes>
        <Route path='/recipes' element={<Home />}></Route>
        <Route path='/recipes/:recipeId' element={<FoodInfo />}></Route>
        <Route path = '*' element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
