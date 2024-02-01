import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Cart from './pages/Cart.jsx'
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './pages/Signup.jsx';
import CartProvider from './components/ContextReducer.jsx';
import MyOrders from './pages/MyOrders.jsx'
function App() {
  return (
    <CartProvider>
      <div >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/myOrders' element={<MyOrders/>} /> 
        </Routes>
      </div>
    </CartProvider>

  )
}

export default App
