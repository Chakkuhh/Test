const express=require('express')

const cors=require('cors')

const mongoose=require('mongoose')

const app=express()
app.use(cors())
app.use(express.json())
const db=mongoose.connection

mongoose.connect('mongodb://localhost:27017/admin')
.then(console.log('connected'))

app.post('/create',async (req,res)=>{
   await db.collection('lists').insertMany(req.body)
    .then(console.log(req.body))
    res.send('sended')
})
app.get('/lis',async (req,res)=>{
    let data=await db.collection('lists').find().toArray()
    res.send(data)
})

app.delete('/del/:id',async(req,res)=>{
    let id=new mongoose.Types.ObjectId(req.params.id)
    console.log(id);

    db.collection('lists').deleteOne({_id:id})
    console.log('deleted');

})


app.get('/upd/:Name',async (req,res)=>{
    // const id = new mongoose.Types.ObjectId(req.params.id);
    const Name=req.params.Name
    
    let data = await db.collection('lists').findOne({ Name:Name });
    res.json(data)
    console.log(data);
})
app.post('/updated/:Name',async(req,res)=>{

    const Name=req.params.Name
    console.log(Name);

  let data= await db.collection('lists').updateOne({Name},
        {$set:req.body})
        console.log(data);

})



app.listen(3004)