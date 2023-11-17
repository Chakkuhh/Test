import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Update() {

  const naigate=useNavigate()

    const {Name}=useParams()

const [upd,setUpd]=useState({})

const [change,setChange]=useState({})

useEffect(() => {
    axios.get(`http://localhost:3004/upd/${Name}`)
      .then((res) => 
      
      setUpd(res.data))
  }, [Name]);

  const changes=(e)=>{
    setChange({...change,[e.target.name]:e.target.value})
  }

  const changeSubmit=(e)=>{
    e.preventDefault()
    axios.post(`http://localhost:3004/updated/${Name}`,change)
    .then(console.log('updated'))
    naigate('/create')

  }

  return (
    <div>
      <form onSubmit={changeSubmit} >
        <input type="text" value={upd.Name} name='Name'onChange={changes}/><br/>
        <input type='email' placeholder={upd.Email} name='Email' onChange={changes}/><br/>
        <input type="number" placeholder={upd.Age} name='Age' onChange={changes}/>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Update