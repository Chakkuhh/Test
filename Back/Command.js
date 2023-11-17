const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')

const app=express()
app.use(cors())
app.use(express.json())


const db=mongoose.connection

mongoose.connect('mongodb://localhost:27017/admins')
.then(console.log('connected'))

app.post('/register',(req,res)=>{
    db.collection('registration').insertOne(req.body)
})
app.post('/check',async(req,res)=>{

    const {email,password}=req.body
   const data=await db.collection('registration').findOne({email,password})
   if(data){
    res.json({status:true,email})
   }
   else{
    res.json({status:false})
   }
   console.log(data);
})

app.get('/lo/:email',async(req,res)=>{

    let email=req.params.email
    console.log(email);
    let data= await db.collection('registration').findOne({email:email})
    res.send(data)
})


app.listen(3005)