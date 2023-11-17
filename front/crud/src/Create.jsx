import React, { useState } from 'react'
import axios from 'axios'
import Page from './Page'

function Create() {
    const [data,setData]=useState({})
   


    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        setData(data)
        console.log(data);
        axios.post('http://localhost:3004/create',[data])
        .then(console.log('sended'))
        window.location.reload()
    }
  return (
    <div> <div className="inputs">
    <form onSubmit={handleSubmit} >
    <input type="text" placeholder='enter a name' name='Name'  onChange={handleChange}  />
    <input type='email' placeholder='enter the email' name='Email' onChange={handleChange} />
    <input type='number' placeholder='enter the age' name='Age' onChange={handleChange} />
    <button>Submit</button>
</form> 
</div>

<Page/>

</div>
  )
}

export default Create