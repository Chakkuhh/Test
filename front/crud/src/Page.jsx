import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Page() {

    const {_id}=useParams()
    const {Name}=useParams()

    const [users,setUsers]=useState([])


    const [change,setChange]=useState({})
    useEffect(()=>{

        axios.get('http://localhost:3004/lis')
        .then((res)=>
        setUsers(res.data)
        )

    },[_id])

    const deLete=(_id)=>{

        axios.delete(`http://localhost:3004/del/${_id}`)
        .then((res)=>{
            console.log('deleted');
            setUsers(users.filter(user => user._id !== _id));
            
        })




    }
    
       
   

    
  return (
    <div>

            

        <table>
            <thead>
            <tr>
                <th>Sl no</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action
                
                </th>
            </tr>
                </thead>
                <tbody>
                    {
                        users.map((item,index)=>(
                            <tr key={item._id}>
                                <td><input value={index}/> </td>
                                <td><input type="text" value={item.Name}  /></td>
                                <td><input type='email' value={item.Email} /></td>
                                <td><input type="number" value={item.Age}  /></td>
                                <td><Link to={`/update/${item.Name}`}><button>Edit/Submit</button></Link></td>
                                <td><button onClick={()=>deLete(item._id)}>Delete</button></td>
                                
                            </tr>
                        ))
                    }
                </tbody>
        </table>

    </div>
  )
}

export default Page