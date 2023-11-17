import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Login() {

    const navigate=useNavigate()

    const {email}=useParams()


    const [user,setUser]=useState({})


    const handleChang=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSub=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3005/check',user)
        .then((res)=>{
            console.log(res.data)
            if(res.data.status ){
                
                navigate(`/lo/${res.data.email}`)

            }
            else{
                alert('invalid password')
            }
        })
    }
  return (
    <div>

            <form onSubmit={handleSub}>
        <input type='email' placeholder='enter the email' name='email' onChange={handleChang}/>
        <input type="password" placeholder='enter the password' name='password' onChange={handleChang}  />
        <button>dh</button>

</form>

    </div>
  )
}

export default Login