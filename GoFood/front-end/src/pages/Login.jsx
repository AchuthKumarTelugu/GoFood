import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault() //prevents automatic refreshing 

    axios.post("http://localhost:5000/api/loginuser", {
      email: credentials.email,
      password: credentials.password
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      console.log(response.data)
      const {authtoken}=response.data
      localStorage.setItem('userEmail',credentials.email)
      localStorage.setItem('authtoken',authtoken)
      console.log('authtoken',localStorage.getItem('authtoken'))
      navigate('/')
    }).catch(error => {
      const errorMsg = error.response.data.message
      alert(errorMsg)
    })

  }
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.currentTarget.name]: event.currentTarget.value })
  }
  return (
    <div>
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>


          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
          </div>

          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to='/Signup' className=' btn btn-danger m-3'>Join now!</Link>
        </form>
      </div>

    </div>
  )
}
