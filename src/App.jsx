import React from 'react'
import DataPage from './pages/DataPage';
// import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{height:"100vh",width:"100%"}}>
      <BrowserRouter>
      <Routes>
        <Route path=''></Route>

      </Routes>
      </BrowserRouter>
      <Navbar/>
      {/* <HomePage/> */}
      <DataPage/>
    </div>
  );
}

export default App;
