import React from 'react'
import DataPage from './components/DataPage';
// import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App" style={{height:"100vh",width:"100%"}}>
      <Navbar/>
      {/* <HomePage/> */}
      <DataPage/>
    </div>
  );
}

export default App;
