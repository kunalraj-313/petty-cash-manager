import React from 'react'
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App" style={{height:"100vh",width:"100%"}}>
      <Navbar/>
      <HomePage/>
    </div>
  );
}

export default App;
