const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { log } = require("console");
const { type } = require("os");

app.use(express.json());
app.use(cors());

//database connect with mongodb
mongoose.connect("mongodb+srv://bouthainasd562:lm8J2UCyEoa8Bu21@cluster0.9fa7tq1.mongodb.net/e-commerce")

//API Creation

app.get("/",(req,res)=>{
    res.send("espress app is running")
})

//image storage engine
const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)

    }
})

const upload = multer({storage:storage})

// creating upload endpoint for
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success :1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//shcema for creating products
const Product = mongoose.model("product",{
    id:{
        type:Number,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    new_price:{
        type:Number,
        require:true,
    },
    old_price:{
        type:Number,
        require:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    avilable:{
        type:Boolean,
        default:true
    },
})

app.post('/addproduct',async(req,res) => {
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id=1;
    }
    const product = new Product({
        id :id,
        name : req.body.name,
        image: req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price: req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

//creating API for deleting products
app.post('/remouveproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("remouved");
    res.json({
        success:true,
        name:req.body.name
    })
})

//creating API for getting all products
app.get('/allproducts',async(req,res)=>{
    let products = await Product.find({});
    console.log("all products fetched");
    res.send(products);
})



app.listen(port,(error)=>{
    if (!error){
        console.log("server running on Port :" +port)
    }
    else{
        console.log("Error : "+error);
    }
})