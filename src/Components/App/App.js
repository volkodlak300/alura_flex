import React from 'react';
import Render from '../Render/Render';
import './App.module.css';
import Header from 'Components/Header/Header';
import Banner from 'Components/Banner/Banner';
import Pie from 'Components/Pie/Pie';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner/>
      <Render />
      <Pie/>
    </div>
  );
}

export default App;