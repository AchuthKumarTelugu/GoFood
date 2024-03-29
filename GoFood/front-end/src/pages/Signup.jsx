import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Signup() 
{
    const [credentials,setCredentials]=useState({name:"",email:"",password:"",geolocation:""})
    const navigate=useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault() //prevents automatic refreshing 
        const response=await fetch("http://localhost:5000/api/create_user",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
        })
        const responseStatus=await response.json()
        console.log(responseStatus)
        if(!responseStatus.success) {
            alert('enter valid credentials')
        }else{
       navigate('/login')
        }
    }
    const onChange = (event)=>{
        setCredentials({...credentials,[event.currentTarget.name]:event.currentTarget.value})
    }
    return (
        <div>
            <div className="container mt-5">
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="geolocation" className="form-label">Location</label>
                    <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} />
                </div>
                <button type="submit" className="m-3 btn btn-success">Submit</button>
                <Link to='/login' className=' btn btn-danger m-3'>Already a User</Link>
            </form>
            </div>
            
        </div>
    )
}
