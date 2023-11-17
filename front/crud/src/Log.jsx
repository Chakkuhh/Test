import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Log() {

    const {email}=useParams()
    const [log,setLog]=useState({})

    useEffect(()=>{
        axios.get(`http://localhost:3005/lo/${email}`)
        .then((res)=>{
            console.log(res.data)
            setLog(res.data)
        })

    },[email])
  return (
    <div>

            <h1>hi {log.name}</h1>

            



    </div>
  )
}

export default Log