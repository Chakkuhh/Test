import axios from 'axios'
import React, { useState } from 'react'

function Register() {

    const[data,setData]=useState({})

    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        
        axios.post('http://localhost:3005/register',data)
        .then('sended')
        alert('registerd')
    }
  return (
    <div>

        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='enter email' name='email' onChange={handleChange} />
            <input type="text" placeholder='enter the name' name='name' onChange={handleChange}/>
            <input type="password" placeholder='enter password' name='password' onChange={handleChange} />
            <button>register</button>
        </form>




    </div>
  )
}

export default Register