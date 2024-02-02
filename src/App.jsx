import React from 'react'
import DataPage from 'pages/DataPage';
import HomePage from 'pages/HomePage';
import Navbar from 'components/Navbar';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import SignupPage from 'pages/SignupPage';
import { useAuthContext } from 'hooks/useAuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();


function App() {
  const {user} = useAuthContext() 
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App" style={{height:"100vh",width:"100%"}}>

      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={user ? <HomePage/> :<Navigate to='/login'/>} />
        <Route path='/login' element={!user ? <LoginPage/> :<Navigate to='/'/>} />
        <Route path='/signup' element={!user ? <SignupPage/> :<Navigate to='/'/>} />
      </Routes>
      </BrowserRouter>
      {/* <DataPage/> */}
    </div>
    </QueryClientProvider>
  );
}

export default App;
