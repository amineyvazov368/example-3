const express =require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
var app = express()
const mongoose = require('mongoose');
app.use(cors())
app.use(bodyParser.json())
const PORT=7070;

const ProductSchema=new mongoose.Schema({
    title:String,
    img:String,
    price:Number
})
const ProductModel=mongoose.model('Item', ProductSchema)

app.get('/api/products',async(req,res)=>{
    const {title}=req.query
    if(title) products=await ProductModel.find({title:title})
   else products= await ProductModel.find()

   if(products.length>0){
    res.send({products})
   }else{
    res.send({
        message:'not found',
        data:null
    })
   }
}),
app.get('/api/products/:id',async(req,res)=>{
    const {id}=req.params
    let products
    try {
        products=await ProductModel.findById(id)
    } catch (error) {
        res.send({error:error
        })
    }
    if(products){
        res.send({
            message:"success",
            data:products
        })
    }else{
        res.send({
            message:"not found",
            data:null
        })
    }
}),

app.post("/api/products",async(req,res)=>{
    const products=new ProductModel(req.body)
    await products.save()
    res.send({
        message:"posted",
        data:products
    })
}),

app.delete('/api/products/:id',async(req,res)=>{
    const {id}=req.params
    let response
    try {
        response=await ProductModel.findByIdAndDelete(id)
    } catch (error) {
        res.send({error:error})
    }
    res.send({
        message:"delete",
        data:response
    })

    app.patch("/api/products/:id",async(req,res)=>{
        const {id}=req.params
        response=await ProductModel.findByIdAndUpdate(id,req.body)
        res.send({
            message:"update",
            data:response
        })
    })

})


    mongoose.connect('mongodb+srv://amineyvazov:aminamin@project2.ws3s31d.mongodb.net/?retryWrites=true&w=majority&appName=project2').
    then(()=>console.log("Connected!"))


app.listen(PORT, ()=> {
    console.log(`Server listennig  on port ${PORT}`)
  })