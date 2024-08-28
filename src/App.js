import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './pages/Main/Main';
import { CartProvider } from './components/ShoppingCart/CartContext';
import Dashboard from './Admin/Dashboard/Dashboard';
import LogoPage from './LogoPage';

function App() {
  return (
    <div className="App h-screen bg-white text-slate-800  font-inter  ">
      <CartProvider>
      <BrowserRouter>
        <Routes>
          
          <Route path='/signin' element={<Signin />} />
          <Route  path='/signup' element ={<Signup />}/>
          <Route path='/main/*' element={<Main />} />
          <Route path='/dashboard/*' element={<Dashboard />}  />
          <Route path='/'  element={<LogoPage />}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>

      
    </div>
  );
}

export default App;
