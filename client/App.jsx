import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './containers/Homepage.jsx';
import CreatePet from './components/CreatePet.jsx';

import './stylesheets/styles.css';

const App = (props) => {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/create" element={<CreatePet/>}/>
        </Routes>
      </div>
  );
};

export default App;
