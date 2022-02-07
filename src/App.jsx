import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Heading from './components/Heading';
import Index from './pages/Index';
import FoodInfo from './pages/FoodInfo';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='App'>
      <Heading/>
      <Routes>
        <Route path='/recipes' element={<Index />}></Route>
        <Route path='/recipes/:recipeId' element={<FoodInfo />}></Route>
        <Route path = '*' element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
