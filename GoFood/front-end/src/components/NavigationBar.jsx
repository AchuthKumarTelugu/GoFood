import React, { useEffect, useState } from 'react'
import {
  Link, useNavigate
} from "react-router-dom";

import { useCartState } from './ContextReducer';
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../pages/Cart';
export default function NavigationBar() {
  const data = useCartState()
  const navigate = useNavigate()
  const [showModal, setShowModel] = useState(false)
  const handleLogout = () => {
    console.log('logout has clicked')
    // localStorage.removeItem('authtoken')
    localStorage.clear()
    navigate('/login')
  }
  const handleCartButton = () => {
    navigate('/cart')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary Nav-bar" >
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5 " aria-current="page" to="/">Home</Link>
              </li>
              {
                (localStorage.getItem('authtoken')) ?
                  <li className="nav-item">
                    <Link className="nav-link active fs-5 " aria-current="page" to="/myOrders">My Orders</Link>
                  </li> : ""
              }
            </ul>
            <div className="d-flex">

              {
                (localStorage.getItem('authtoken')) ?
                  <div>
                    <button className="btn mx-2" to="" style={{ backgroundColor: 'white', color: '#00bc8c' }} onClick={() => { setShowModel(true) }} >
                      Cart
                      {
                        " "
                      }
                      <Badge pill bg="danger" style={{ color: 'white', background: 'red' }}> {data.length} </Badge>
                    </button>
                    {showModal && <Modal onClose={() => setShowModel(false)}> <Cart /> </Modal>}
                    <button className="btn mx-2 " to="" style={{ backgroundColor: 'white', color: 'red' }} onClick={handleLogout}>Logout</button>
                  </div>
                  :
                  <div>
                    <Link className="btn mx-2" to="/login" style={{ backgroundColor: 'white', color: '#00bc8c' }}>Login</Link>
                    <Link className="btn " to="/Signup" style={{ backgroundColor: 'white', color: '#00bc8c' }}>Signup</Link>
                  </div>
              }
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
