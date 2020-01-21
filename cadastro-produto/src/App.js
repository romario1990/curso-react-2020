import React from 'react';

import Home from './views/home';
import NavBar from './components/navbar';


function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Home />
      </div>
    </>
  );
}

export default App;
